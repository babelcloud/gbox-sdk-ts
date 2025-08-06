// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Media extends APIResource {
  /**
   * Create a new album with media files
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.media.createAlbum(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     media: [fs.createReadStream('path/to/file')],
   *     name: 'Vacation Photos',
   *   },
   * );
   * ```
   */
  createAlbum(
    boxID: string,
    body: MediaCreateAlbumParams,
    options?: RequestOptions,
  ): APIPromise<MediaCreateAlbumResponse> {
    return this._client.post(
      path`/boxes/${boxID}/media/albums`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Delete an album and all its media files
   *
   * @example
   * ```ts
   * await client.v1.boxes.media.deleteAlbum('Pictures', {
   *   boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  deleteAlbum(albumName: string, params: MediaDeleteAlbumParams, options?: RequestOptions): APIPromise<void> {
    const { boxId } = params;
    return this._client.delete(path`/boxes/${boxId}/media/albums/${albumName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a specific media file from an album
   *
   * @example
   * ```ts
   * await client.v1.boxes.media.deleteMedia('IMG_001.jpg', {
   *   boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   albumName: 'Pictures',
   * });
   * ```
   */
  deleteMedia(mediaName: string, params: MediaDeleteMediaParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, albumName } = params;
    return this._client.delete(path`/boxes/${boxId}/media/albums/${albumName}/${mediaName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Download a specific media file from an album
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.media.downloadMedia(
   *   'IMG_001.jpg',
   *   {
   *     boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     albumName: 'Pictures',
   *   },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  downloadMedia(
    mediaName: string,
    params: MediaDownloadMediaParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { boxId, albumName } = params;
    return this._client.get(path`/boxes/${boxId}/media/albums/${albumName}/${mediaName}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get detailed information about a specific album including its media files
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.media.getAlbumDetail(
   *   'Pictures',
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  getAlbumDetail(
    albumName: string,
    params: MediaGetAlbumDetailParams,
    options?: RequestOptions,
  ): APIPromise<MediaGetAlbumDetailResponse> {
    const { boxId } = params;
    return this._client.get(path`/boxes/${boxId}/media/albums/${albumName}`, options);
  }

  /**
   * Get a list of albums in the box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.media.listAlbums(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  listAlbums(boxID: string, options?: RequestOptions): APIPromise<MediaListAlbumsResponse> {
    return this._client.get(path`/boxes/${boxID}/media/albums`, options);
  }

  /**
   * Add media files to an existing album
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.media.updateAlbum(
   *   'Pictures',
   *   {
   *     boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     media: [fs.createReadStream('path/to/file')],
   *   },
   * );
   * ```
   */
  updateAlbum(
    albumName: string,
    params: MediaUpdateAlbumParams,
    options?: RequestOptions,
  ): APIPromise<MediaUpdateAlbumResponse> {
    const { boxId, ...body } = params;
    return this._client.patch(
      path`/boxes/${boxId}/media/albums/${albumName}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Detailed album information with media files
 */
export interface MediaCreateAlbumResponse {
  /**
   * List of media files (photos and videos) in the album
   */
  data: Array<MediaCreateAlbumResponse.Photo | MediaCreateAlbumResponse.Video>;

  /**
   * Last modified time of the album
   */
  lastModified: string;

  /**
   * Name of the album
   */
  name: string;

  /**
   * Full path to the album in the box
   */
  path: string;

  /**
   * Size of the album
   */
  size: string;
}

export namespace MediaCreateAlbumResponse {
  /**
   * Photo representation
   */
  export interface Photo {
    /**
     * Last modified time of the photo
     */
    lastModified: string;

    /**
     * Name of the photo
     */
    name: string;

    /**
     * Full path to the photo in the box
     */
    path: string;

    /**
     * Size of the photo
     */
    size: string;

    /**
     * Photo type indicator
     */
    type: 'photo';
  }

  /**
   * Video representation
   */
  export interface Video {
    /**
     * Last modified time of the video
     */
    lastModified: string;

    /**
     * Name of the video
     */
    name: string;

    /**
     * Full path to the video in the box
     */
    path: string;

    /**
     * Size of the video
     */
    size: string;

    /**
     * Video type indicator
     */
    type: 'video';
  }
}

/**
 * Detailed album information with media files
 */
export interface MediaGetAlbumDetailResponse {
  /**
   * List of media files (photos and videos) in the album
   */
  data: Array<MediaGetAlbumDetailResponse.Photo | MediaGetAlbumDetailResponse.Video>;

  /**
   * Last modified time of the album
   */
  lastModified: string;

  /**
   * Name of the album
   */
  name: string;

  /**
   * Full path to the album in the box
   */
  path: string;

  /**
   * Size of the album
   */
  size: string;
}

export namespace MediaGetAlbumDetailResponse {
  /**
   * Photo representation
   */
  export interface Photo {
    /**
     * Last modified time of the photo
     */
    lastModified: string;

    /**
     * Name of the photo
     */
    name: string;

    /**
     * Full path to the photo in the box
     */
    path: string;

    /**
     * Size of the photo
     */
    size: string;

    /**
     * Photo type indicator
     */
    type: 'photo';
  }

  /**
   * Video representation
   */
  export interface Video {
    /**
     * Last modified time of the video
     */
    lastModified: string;

    /**
     * Name of the video
     */
    name: string;

    /**
     * Full path to the video in the box
     */
    path: string;

    /**
     * Size of the video
     */
    size: string;

    /**
     * Video type indicator
     */
    type: 'video';
  }
}

/**
 * List albums
 */
export interface MediaListAlbumsResponse {
  /**
   * List of albums
   */
  data: Array<MediaListAlbumsResponse.Data>;
}

export namespace MediaListAlbumsResponse {
  /**
   * Album representation
   */
  export interface Data {
    /**
     * Last modified time of the album
     */
    lastModified: string;

    /**
     * Name of the album
     */
    name: string;

    /**
     * Full path to the album in the box
     */
    path: string;

    /**
     * Size of the album
     */
    size: string;
  }
}

/**
 * Detailed album information with media files
 */
export interface MediaUpdateAlbumResponse {
  /**
   * List of media files (photos and videos) in the album
   */
  data: Array<MediaUpdateAlbumResponse.Photo | MediaUpdateAlbumResponse.Video>;

  /**
   * Last modified time of the album
   */
  lastModified: string;

  /**
   * Name of the album
   */
  name: string;

  /**
   * Full path to the album in the box
   */
  path: string;

  /**
   * Size of the album
   */
  size: string;
}

export namespace MediaUpdateAlbumResponse {
  /**
   * Photo representation
   */
  export interface Photo {
    /**
     * Last modified time of the photo
     */
    lastModified: string;

    /**
     * Name of the photo
     */
    name: string;

    /**
     * Full path to the photo in the box
     */
    path: string;

    /**
     * Size of the photo
     */
    size: string;

    /**
     * Photo type indicator
     */
    type: 'photo';
  }

  /**
   * Video representation
   */
  export interface Video {
    /**
     * Last modified time of the video
     */
    lastModified: string;

    /**
     * Name of the video
     */
    name: string;

    /**
     * Full path to the video in the box
     */
    path: string;

    /**
     * Size of the video
     */
    size: string;

    /**
     * Video type indicator
     */
    type: 'video';
  }
}

export interface MediaCreateAlbumParams {
  /**
   * Media files to include in the album (max size: 512MB per file)
   */
  media: Array<Uploadable>;

  /**
   * Name of the album to create
   */
  name: string;
}

export interface MediaDeleteAlbumParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface MediaDeleteMediaParams {
  /**
   * Box ID
   */
  boxId: string;

  /**
   * Album name
   */
  albumName: string;
}

export interface MediaDownloadMediaParams {
  /**
   * Box ID
   */
  boxId: string;

  /**
   * Album name
   */
  albumName: string;
}

export interface MediaGetAlbumDetailParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface MediaUpdateAlbumParams {
  /**
   * Path param: Box ID
   */
  boxId: string;

  /**
   * Body param: Media files to add to the album (max size: 512MB per file)
   */
  media: Array<Uploadable>;
}

export declare namespace Media {
  export {
    type MediaCreateAlbumResponse as MediaCreateAlbumResponse,
    type MediaGetAlbumDetailResponse as MediaGetAlbumDetailResponse,
    type MediaListAlbumsResponse as MediaListAlbumsResponse,
    type MediaUpdateAlbumResponse as MediaUpdateAlbumResponse,
    type MediaCreateAlbumParams as MediaCreateAlbumParams,
    type MediaDeleteAlbumParams as MediaDeleteAlbumParams,
    type MediaDeleteMediaParams as MediaDeleteMediaParams,
    type MediaDownloadMediaParams as MediaDownloadMediaParams,
    type MediaGetAlbumDetailParams as MediaGetAlbumDetailParams,
    type MediaUpdateAlbumParams as MediaUpdateAlbumParams,
  };
}
