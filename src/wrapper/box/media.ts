import { MediaListAlbumsResponse } from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { Uploadable } from '../../internal/uploads';

export interface CreateMediaAlbum {
  name: string;
  media: Uploadable[];
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
  async listAlbums() {
    const res = await this.client.v1.boxes.media.listAlbums(this.boxId);
    return res.data.map((album) => new MediaAlbumOperator(this.client, this.boxId, album));
  }

  /**
   * @example
   * const response = await myBox.media.listAlbumsInfo();
   */
  listAlbumsInfo() {
    return this.client.v1.boxes.media.listAlbums(this.boxId);
  }
  /**
   * @example
   * const response = await myBox.media.createAlbum({ name: 'My Album', media: [fs.createReadStream('path/to/file')] });
   */
  createAlbum(body: CreateMediaAlbum) {
    return this.client.v1.boxes.media.createAlbum(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.media.deleteAlbum('My Album');
   */
  deleteAlbum(albumName: string) {
    return this.client.v1.boxes.media.deleteAlbum(albumName, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.media.getAlbumInfo('My Album');
   */
  getAlbumInfo(albumName: string) {
    return this.client.v1.boxes.media.getAlbumDetail(albumName, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.media.getAlbum('My Album');
   */
  async getAlbum(albumName: string) {
    const res = await this.client.v1.boxes.media.getAlbumDetail(albumName, { boxId: this.boxId });
    return new MediaAlbumOperator(this.client, this.boxId, res);
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
   * const response = await myBox.media.listMedia();
   */
  listMediaInfo() {
    return this.client.v1.boxes.media.listMedia(this.data.name, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.media.appendMedia([fs.createReadStream('path/to/file')]);
   */
  appendMedia(media: Uploadable[]) {
    return this.client.v1.boxes.media.updateAlbum(this.data.name, {
      boxId: this.boxId,
      media,
    });
  }

  /**
   * @example
   * const response = await myBox.media.deleteMedia('My Media');
   */
  deleteMedia(mediaName: string) {
    return this.client.v1.boxes.media.deleteMedia(mediaName, {
      boxId: this.boxId,
      albumName: this.data.name,
    });
  }
}
