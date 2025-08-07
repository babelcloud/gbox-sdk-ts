import {
  MediaGetMediaSupportResponse,
  MediaListAlbumsResponse,
  MediaGetAlbumDetailResponse,
  MediaGetMediaResponse,
  MediaListMediaResponse,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { Uploadable } from '../../internal/uploads';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export interface CreateMediaAlbum {
  name: string;
  media: (Uploadable | string)[];
}

// Cache for media support to avoid repeated API calls
let mediaSupportCache: MediaGetMediaSupportResponse | null = null;

/**
 * Get supported media extensions from the API
 */
async function getMediaSupport(client: GboxClient, boxId: string): Promise<MediaGetMediaSupportResponse> {
  if (!mediaSupportCache) {
    const response = await client.v1.boxes.media.getMediaSupport(boxId);
    mediaSupportCache = response;
  }
  return mediaSupportCache;
}

/**
 * Check if a file is an image or video based on its extension
 */
async function isMediaFile(filePath: string, client: GboxClient, boxId: string): Promise<boolean> {
  const ext = path.extname(filePath).toLowerCase();
  const mediaSupport = await getMediaSupport(client, boxId);

  // Add dot prefix to extensions for comparison
  const photoExtensions = mediaSupport.photo.map((ext) => (ext.startsWith('.') ? ext : `.${ext}`));
  const videoExtensions = mediaSupport.video.map((ext) => (ext.startsWith('.') ? ext : `.${ext}`));

  return photoExtensions.includes(ext) || videoExtensions.includes(ext);
}

/**
 * Recursively get all media files from a directory
 */
async function getMediaFilesFromDirectory(
  dirPath: string,
  client: GboxClient,
  boxId: string,
): Promise<string[]> {
  const mediaFiles: string[] = [];

  try {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively process subdirectories
        mediaFiles.push(...(await getMediaFilesFromDirectory(fullPath, client, boxId)));
      } else if (stat.isFile() && (await isMediaFile(fullPath, client, boxId))) {
        // Only include image and video files
        mediaFiles.push(fullPath);
      }
    }
  } catch (error) {
    throw new Error(`Error reading directory ${dirPath}: ${error}`);
  }

  return mediaFiles;
}

/**
 * Process a single media item (file or directory)
 */
async function processMediaItem(item: string, client: GboxClient, boxId: string): Promise<Uploadable[]> {
  const processedMedia: Uploadable[] = [];

  let filePath: string;

  if (item.startsWith('file://')) {
    // Handle file:// protocol
    filePath = fileURLToPath(item);
  } else {
    // Handle local file paths
    filePath = item;
  }

  const exists = fs.existsSync(filePath);
  if (!exists) {
    throw new Error(`Path ${filePath} does not exist`);
  }

  const stat = fs.statSync(filePath);

  if (stat.isDirectory()) {
    // If it's a directory, get all media files from it
    const mediaFiles = await getMediaFilesFromDirectory(filePath, client, boxId);
    for (const mediaFile of mediaFiles) {
      processedMedia.push(fs.createReadStream(mediaFile));
    }
  } else if (stat.isFile()) {
    // If it's a file, check if it's a media file
    if (await isMediaFile(filePath, client, boxId)) {
      processedMedia.push(fs.createReadStream(filePath));
    } else {
      throw new Error(`File ${filePath} is not a supported image or video file`);
    }
  } else {
    throw new Error(`Path ${filePath} is neither a file nor a directory`);
  }

  return processedMedia;
}

export class MediaOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.media.listAlbums();
   */
  async listAlbums(): Promise<MediaAlbumOperator[]> {
    const res = await this.client.v1.boxes.media.listAlbums(this.boxId);
    return res.data.map((album) => new MediaAlbumOperator(this.client, this.boxId, album));
  }

  /**
   * @example
   * const response = await myBox.media.listAlbumsInfo();
   */
  listAlbumsInfo(): Promise<MediaListAlbumsResponse> {
    return this.client.v1.boxes.media.listAlbums(this.boxId);
  }
  /**
   * @example
   * const response = await myBox.media.createAlbum({ name: 'My Album', media: [fs.createReadStream('path/to/file')] });
   * or
   * const response = await myBox.media.createAlbum({ name: 'My Album', media: ['path/to/your/file'] });
   * or
   * const response = await myBox.media.createAlbum({ name: 'My Album', media: ['file:///path/to/your/file'] });
   * or
   * const response = await myBox.media.createAlbum({ name: 'My Album', media: ['path/to/your/folder'] });
   */
  async createAlbum(body: CreateMediaAlbum): Promise<MediaAlbumOperator> {
    const processedMedia = await this.processMediaArray(body.media);
    const res = await this.client.v1.boxes.media.createAlbum(this.boxId, { ...body, media: processedMedia });

    return new MediaAlbumOperator(this.client, this.boxId, res);
  }

  /**
   * @example
   * const response = await myBox.media.deleteAlbum('My Album');
   */
  deleteAlbum(albumName: string): Promise<void> {
    return this.client.v1.boxes.media.deleteAlbum(albumName, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.media.getAlbumInfo('My Album');
   */
  getAlbumInfo(albumName: string): Promise<MediaGetAlbumDetailResponse> {
    return this.client.v1.boxes.media.getAlbumDetail(albumName, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.media.getAlbum('My Album');
   */
  async getAlbum(albumName: string): Promise<MediaAlbumOperator> {
    const res = await this.client.v1.boxes.media.getAlbumDetail(albumName, { boxId: this.boxId });
    return new MediaAlbumOperator(this.client, this.boxId, res);
  }

  /**
   * @example
   * const response = await myBox.media.getMediaSupport();
   */
  async getMediaSupport(): Promise<MediaGetMediaSupportResponse> {
    return this.client.v1.boxes.media.getMediaSupport(this.boxId);
  }

  private async processMediaArray(media: (Uploadable | string)[]): Promise<Uploadable[]> {
    const processedMedia: Uploadable[] = [];

    for (const item of media) {
      if (typeof item === 'string') {
        // Process string paths (files or directories)
        const mediaFiles = await processMediaItem(item, this.client, this.boxId);
        processedMedia.push(...mediaFiles);
      } else {
        // Handle Uploadable types (File, Response, FsReadStream, BunFile)
        processedMedia.push(item);
      }
    }

    return processedMedia;
  }
}

export class MediaAlbumOperator {
  private client: GboxClient;
  private boxId: string;
  private data: MediaListAlbumsResponse.Data;

  constructor(client: GboxClient, boxId: string, data: MediaListAlbumsResponse.Data) {
    this.client = client;
    this.boxId = boxId;
    this.data = data;
  }

  /**
   * @example
   * const response = await myBox.media.listMediaInfo();
   */
  listMediaInfo(): Promise<MediaListMediaResponse> {
    return this.client.v1.boxes.media.listMedia(this.data.name, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.media.listMedia();
   */
  async listMedia(): Promise<MediaItemOperator[]> {
    const res = await this.client.v1.boxes.media.listMedia(this.data.name, { boxId: this.boxId });
    return res.data.map((media) => new MediaItemOperator(this.client, this.boxId, this.data.name, media));
  }

  /**
   * Download all media files from the album to the specified local folder
   * @example
   * await myAlbum.download("path/to/your/folder");
   */
  async download(localPath: string) {
    // Ensure the target directory exists
    if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath, { recursive: true });
    }

    // Get all media files in the album
    const mediaList = await this.listMedia();

    // Download each media file
    const downloadPromises = mediaList.map(async (mediaItem) => {
      const mediaInfo = await mediaItem.getInfo();
      const fileName = mediaInfo.name;
      const filePath = path.join(localPath, fileName);

      try {
        await mediaItem.download(filePath);
        return { success: true, fileName, filePath };
      } catch (error) {
        return { success: false, fileName, error };
      }
    });

    const results = await Promise.all(downloadPromises);

    const successful = results.filter((result) => result.success);
    const failed = results.filter((result) => !result.success);

    return {
      totalFiles: results.length,
      successful: successful.length,
      failed: failed.length,
      results,
    };
  }

  /**
   * @example
   * const response = await myBox.media.appendMedia([fs.createReadStream('path/to/file')]);
   * or
   * const response = await myBox.media.appendMedia(['path/to/your/file']);
   * or
   * const response = await myBox.media.appendMedia(['file:///path/to/your/file']);
   * or
   * const response = await myBox.media.appendMedia(['path/to/your/folder']);
   */
  async appendMedia(media: (Uploadable | string)[]): Promise<MediaAlbumOperator> {
    const processedMedia = await this.processMediaArray(media);
    await this.client.v1.boxes.media.updateAlbum(this.data.name, {
      boxId: this.boxId,
      media: processedMedia,
    });

    return this;
  }

  /**
   * @example
   * const response = await myBox.media.deleteMedia('My Media');
   */
  deleteMedia(mediaName: string): Promise<void> {
    return this.client.v1.boxes.media.deleteMedia(mediaName, {
      boxId: this.boxId,
      albumName: this.data.name,
    });
  }

  private async processMediaArray(media: (Uploadable | string)[]): Promise<Uploadable[]> {
    const processedMedia: Uploadable[] = [];

    for (const item of media) {
      if (typeof item === 'string') {
        // Process string paths (files or directories)
        const mediaFiles = await processMediaItem(item, this.client, this.boxId);
        processedMedia.push(...mediaFiles);
      } else {
        // Handle Uploadable types (File, Response, FsReadStream, BunFile)
        processedMedia.push(item);
      }
    }

    return processedMedia;
  }
}

export class MediaItemOperator {
  private client: GboxClient;
  private boxId: string;
  private albumName: string;
  private data: MediaListMediaResponse.Photo | MediaListMediaResponse.Video;

  constructor(
    client: GboxClient,
    boxId: string,
    albumName: string,
    data: MediaListMediaResponse.Photo | MediaListMediaResponse.Video,
  ) {
    this.client = client;
    this.boxId = boxId;
    this.albumName = albumName;
    this.data = data;
  }

  /**
   * @example
   * const response = await media.getInfo();
   */
  async getInfo(): Promise<MediaGetMediaResponse> {
    return this.client.v1.boxes.media.getMedia(this.data.name, {
      boxId: this.boxId,
      albumName: this.albumName,
    });
  }

  /**
   * @example
   * const blob = await media.download(); // Return blob only
   * const blob = await media.download("path/to/your/file"); // Download and save to file, then return blob
   */
  async download(filePath?: string): Promise<Blob> {
    const res = await this.client.v1.boxes.media.downloadMedia(this.data.name, {
      boxId: this.boxId,
      albumName: this.albumName,
    });
    const blob = await res.blob();

    // If file path is provided, write to file system
    if (filePath) {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const buffer = Buffer.from(await blob.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
    }

    return blob;
  }
}
