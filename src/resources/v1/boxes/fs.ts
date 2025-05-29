// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Fs extends APIResource {
  /**
   * @example
   * ```ts
   * const fs = await client.v1.boxes.fs.list('id', {
   *   depth: 0,
   *   path: 'path',
   * });
   * ```
   */
  list(id: string, query: FListParams, options?: RequestOptions): APIPromise<FListResponse> {
    return this._client.get(path`/api/v1/boxes/${id}/fs/list`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.read('id', {
   *   path: 'path',
   * });
   * ```
   */
  read(id: string, query: FReadParams, options?: RequestOptions): APIPromise<FReadResponse> {
    return this._client.get(path`/api/v1/boxes/${id}/fs/read`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.write('id', {
   *   content: 'content',
   *   path: 'path',
   * });
   * ```
   */
  write(id: string, body: FWriteParams, options?: RequestOptions): APIPromise<FWriteResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/fs/write`, { body, ...options });
  }
}

export interface FListResponse {
  /**
   * A box instance that can be either Linux or Android type
   */
  data: Array<unknown>;
}

export interface FReadResponse {
  /**
   * Content of the file
   */
  content: string;
}

export interface FWriteResponse {
  /**
   * Success message
   */
  message: string;
}

export interface FListParams {
  /**
   * Depth of the directory
   */
  depth: number;

  /**
   * Path to the directory
   */
  path: string;
}

export interface FReadParams {
  /**
   * Path to the file
   */
  path: string;
}

export interface FWriteParams {
  /**
   * Content of the file
   */
  content: string;

  /**
   * Path to the file
   */
  path: string;
}

export declare namespace Fs {
  export {
    type FListResponse as FListResponse,
    type FReadResponse as FReadResponse,
    type FWriteResponse as FWriteResponse,
    type FListParams as FListParams,
    type FReadParams as FReadParams,
    type FWriteParams as FWriteParams,
  };
}
