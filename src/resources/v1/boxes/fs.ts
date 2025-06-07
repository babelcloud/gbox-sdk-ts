// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Fs extends APIResource {
  /**
   * List box files
   *
   * @example
   * ```ts
   * const fs = await client.v1.boxes.fs.list(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { path: '/home/user/documents' },
   * );
   * ```
   */
  list(id: string, query: FListParams, options?: RequestOptions): APIPromise<FListResponse> {
    return this._client.get(path`/boxes/${id}/fs/list`, { query, ...options });
  }

  /**
   * Read box file
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.read(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { path: '/home/user/documents/config.json' },
   * );
   * ```
   */
  read(id: string, query: FReadParams, options?: RequestOptions): APIPromise<FReadResponse> {
    return this._client.get(path`/boxes/${id}/fs/read`, { query, ...options });
  }

  /**
   * Write box file
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.write(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     content: 'Hello, World!\nThis is file content.',
   *     path: '/home/user/documents/output.txt',
   *   },
   * );
   * ```
   */
  write(id: string, body: FWriteParams, options?: RequestOptions): APIPromise<FWriteResponse> {
    return this._client.post(path`/boxes/${id}/fs/write`, { body, ...options });
  }
}

/**
 * Response containing directory listing results
 */
export interface FListResponse {
  /**
   * Array of files and directories
   */
  data: Array<FListResponse.File | FListResponse.Dir>;
}

export namespace FListResponse {
  /**
   * File system file representation
   */
  export interface File {
    /**
     * Last modified time of the file
     */
    lastModified: string;

    /**
     * Name of the file
     */
    name: string;

    /**
     * Full path to the file
     */
    path: string;

    /**
     * Size of the file
     */
    size: string;

    /**
     * File type indicator
     */
    type: 'file';
  }

  /**
   * File system directory representation
   */
  export interface Dir {
    /**
     * Name of the directory
     */
    name: string;

    /**
     * Full path to the directory
     */
    path: string;

    /**
     * Directory type indicator
     */
    type: 'dir';
  }
}

/**
 * Response containing file content
 */
export interface FReadResponse {
  /**
   * Content of the file
   */
  content: string;
}

/**
 * Response after writing file content
 */
export interface FWriteResponse {
  /**
   * Success message
   */
  message: string;
}

export interface FListParams {
  /**
   * Path to the directory
   */
  path: string;

  /**
   * Depth of the directory
   */
  depth?: number;
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
