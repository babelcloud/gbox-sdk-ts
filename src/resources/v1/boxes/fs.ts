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
   * Delete box file/directory
   *
   * @example
   * ```ts
   * const f = await client.v1.boxes.fs.remove(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { path: '/home/user/documents/output.txt' },
   * );
   * ```
   */
  remove(id: string, body: FRemoveParams, options?: RequestOptions): APIPromise<FRemoveResponse> {
    return this._client.delete(path`/boxes/${id}/fs`, { body, ...options });
  }

  /**
   * Rename box file
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.rename(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     newPath: '/home/user/documents/new-name.txt',
   *     oldPath: '/home/user/documents/output.txt',
   *   },
   * );
   * ```
   */
  rename(id: string, body: FRenameParams, options?: RequestOptions): APIPromise<FRenameResponse> {
    return this._client.post(path`/boxes/${id}/fs/rename`, { body, ...options });
  }

  /**
   * Creates or overwrites a file. Creates necessary directories in the path if they
   * don't exist.
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
     * File metadata
     */
    mode: string;

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
     * Last modified time of the directory
     */
    lastModified: string;

    /**
     * Directory metadata
     */
    mode: string;

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
 * Response after deleting file/directory
 */
export interface FRemoveResponse {
  /**
   * Success message
   */
  message: string;
}

/**
 * Response after renaming file/directory
 */
export interface FRenameResponse {
  /**
   * Success message
   */
  message: string;
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

export interface FRemoveParams {
  /**
   * Path to the file/directory
   */
  path: string;
}

export interface FRenameParams {
  /**
   * New path for the file/directory
   */
  newPath: string;

  /**
   * Old path to the file/directory
   */
  oldPath: string;
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
    type FRemoveResponse as FRemoveResponse,
    type FRenameResponse as FRenameResponse,
    type FWriteResponse as FWriteResponse,
    type FListParams as FListParams,
    type FReadParams as FReadParams,
    type FRemoveParams as FRemoveParams,
    type FRenameParams as FRenameParams,
    type FWriteParams as FWriteParams,
  };
}
