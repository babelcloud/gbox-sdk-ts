// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Storage extends APIResource {
  /**
   * Create a presigned url for a storage key. This endpoint provides a presigned url
   * for a storage key, which can be used to download the file from the storage.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.storage.presignedURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { storageKey: 'storage://xxxxxx/xxxxxx/xxxxxxx' },
   * );
   * ```
   */
  presignedURL(boxID: string, body: StoragePresignedURLParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/boxes/${boxID}/storage/presigned-url`, { body, ...options });
  }
}

export type StoragePresignedURLResponse = string;

export interface StoragePresignedURLParams {
  /**
   * Storage key
   */
  storageKey: string;

  /**
   * Presigned url expires in
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m Maximum allowed: 6h
   */
  expiresIn?: string;
}

export declare namespace Storage {
  export {
    type StoragePresignedURLResponse as StoragePresignedURLResponse,
    type StoragePresignedURLParams as StoragePresignedURLParams,
  };
}
