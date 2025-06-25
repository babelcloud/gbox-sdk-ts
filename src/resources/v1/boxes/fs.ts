// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
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
  list(boxID: string, query: FListParams, options?: RequestOptions): APIPromise<FListResponse> {
    return this._client.get(path`/boxes/${boxID}/fs/list`, { query, ...options });
  }

  /**
   * Check if file/dir exists
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.exists(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { path: '/home/user/documents/output.txt' },
   * );
   * ```
   */
  exists(boxID: string, body: FExistsParams, options?: RequestOptions): APIPromise<FExistsResponse> {
    return this._client.post(path`/boxes/${boxID}/fs/exists`, { body, ...options });
  }

  /**
   * Get file/dir
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.fs.info(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { path: '/home/user/documents/output.txt' },
   * );
   * ```
   */
  info(boxID: string, query: FInfoParams, options?: RequestOptions): APIPromise<FInfoResponse> {
    return this._client.get(path`/boxes/${boxID}/fs/info`, { query, ...options });
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
  read(boxID: string, query: FReadParams, options?: RequestOptions): APIPromise<FReadResponse> {
    return this._client.get(path`/boxes/${boxID}/fs/read`, { query, ...options });
  }

  /**
   * Delete a file or dir. If target path is not exists, the delete will be failed.
   *
   * @example
   * ```ts
   * const f = await client.v1.boxes.fs.remove(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { path: '/home/user/documents/output.txt' },
   * );
   * ```
   */
  remove(boxID: string, body: FRemoveParams, options?: RequestOptions): APIPromise<FRemoveResponse> {
    return this._client.delete(path`/boxes/${boxID}/fs`, { body, ...options });
  }

  /**
   * Rename a file or dir. If target newPath is already exists, the rename will be
   * failed.
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
  rename(boxID: string, body: FRenameParams, options?: RequestOptions): APIPromise<FRenameResponse> {
    return this._client.post(path`/boxes/${boxID}/fs/rename`, { body, ...options });
  }

  /**
   * Creates or overwrites a file. Creates necessary directories in the path if they
   * don't exist. If target path is already exists, the write will be failed.
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
  write(boxID: string, body: FWriteParams, options?: RequestOptions): APIPromise<FWriteResponse> {
    return this._client.post(
      path`/boxes/${boxID}/fs/write`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
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
     * Full path to the file in the box
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
     * Full path to the directory in the box
     */
    path: string;

    /**
     * Directory type indicator
     */
    type: 'dir';
  }
}

/**
 * Response after checking if a file/directory exists
 */
export type FExistsResponse = FExistsResponse.ExistsFileResult | FExistsResponse.NotExistsFileResult;

export namespace FExistsResponse {
  /**
   * Response after checking if a file/directory exists
   */
  export interface ExistsFileResult {
    /**
     * Exists
     */
    exists: boolean;

    /**
     * Type
     */
    type: string;
  }

  /**
   * Response after checking if a file/directory not exists
   */
  export interface NotExistsFileResult {
    /**
     * Exists
     */
    exists: boolean;
  }
}

/**
 * File system file representation
 */
export type FInfoResponse = FInfoResponse.File | FInfoResponse.Dir;

export namespace FInfoResponse {
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
     * Full path to the file in the box
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
     * Full path to the directory in the box
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
 * File system file representation
 */
export type FRenameResponse = FRenameResponse.File | FRenameResponse.Dir;

export namespace FRenameResponse {
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
     * Full path to the file in the box
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
     * Full path to the directory in the box
     */
    path: string;

    /**
     * Directory type indicator
     */
    type: 'dir';
  }
}

/**
 * File system file representation
 */
export interface FWriteResponse {
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
   * Full path to the file in the box
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

export interface FListParams {
  /**
   * Target directory path in the box
   */
  path: string;

  /**
   * Depth of the directory
   */
  depth?: number;

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface FExistsParams {
  /**
   * Target path in the box. If the path does not start with '/', the file/directory
   * will be checked relative to the working directory
   */
  path: string;

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface FInfoParams {
  /**
   * Target path in the box. If the path does not start with '/', the file/directory
   * will be checked relative to the working directory
   */
  path: string;

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface FReadParams {
  /**
   * Target path in the box. If the path does not start with '/', the file will be
   * read from the working directory.
   */
  path: string;

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface FRemoveParams {
  /**
   * Target path in the box. If the path does not start with '/', the file/directory
   * will be deleted relative to the working directory. If the target path does not
   * exist, the delete will fail.
   */
  path: string;

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface FRenameParams {
  /**
   * New path in the box. If the path does not start with '/', the file/directory
   * will be renamed relative to the working directory. If the newPath already
   * exists, the rename will fail.
   */
  newPath: string;

  /**
   * Old path in the box. If the path does not start with '/', the file/directory
   * will be renamed relative to the working directory. If the oldPath does not
   * exist, the rename will fail.
   */
  oldPath: string;

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export type FWriteParams = FWriteParams.WriteFile | FWriteParams.WriteFileByBinary;

export declare namespace FWriteParams {
  export interface WriteFile {
    /**
     * Content of the file (Max size: 512MB)
     */
    content: string;

    /**
     * Target path in the box. If the path does not start with '/', the file will be
     * written relative to the working directory. Creates necessary directories in the
     * path if they don't exist. If the target path already exists, the write will
     * fail.
     */
    path: string;

    /**
     * Working directory. If not provided, the file will be read from the
     * `box.config.workingDir` directory.
     */
    workingDir?: string;
  }

  export interface WriteFileByBinary {
    /**
     * Binary content of the file (Max file size: 512MB)
     */
    content: Uploadable;

    /**
     * Target path in the box. If the path does not start with '/', the file will be
     * written relative to the working directory. Creates necessary directories in the
     * path if they don't exist. If the target path already exists, the write will
     * fail.
     */
    path: string;

    /**
     * Working directory. If not provided, the file will be read from the
     * `box.config.workingDir` directory.
     */
    workingDir?: string;
  }
}

export declare namespace Fs {
  export {
    type FListResponse as FListResponse,
    type FExistsResponse as FExistsResponse,
    type FInfoResponse as FInfoResponse,
    type FReadResponse as FReadResponse,
    type FRemoveResponse as FRemoveResponse,
    type FRenameResponse as FRenameResponse,
    type FWriteResponse as FWriteResponse,
    type FListParams as FListParams,
    type FExistsParams as FExistsParams,
    type FInfoParams as FInfoParams,
    type FReadParams as FReadParams,
    type FRemoveParams as FRemoveParams,
    type FRenameParams as FRenameParams,
    type FWriteParams as FWriteParams,
  };
}
