// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
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
  list(boxID: string, query: FListParams, options?: RequestOptions): APIPromise<FListResponse> {
    return this._client.get(path`/boxes/${boxID}/fs/list`, { query, ...options });
  }

  /**
   * Check if file exists
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
   * Get file/directory
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
  remove(boxID: string, body: FRemoveParams, options?: RequestOptions): APIPromise<FRemoveResponse> {
    return this._client.delete(path`/boxes/${boxID}/fs`, { body, ...options });
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
  rename(boxID: string, body: FRenameParams, options?: RequestOptions): APIPromise<FRenameResponse> {
    return this._client.post(path`/boxes/${boxID}/fs/rename`, { body, ...options });
  }

  /**
   * Creates or overwrites a file. Creates necessary directories in the path if they
   * don't exist. if the path is a directory, the write will be failed.
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
    return this._client.post(path`/boxes/${boxID}/fs/write`, { body, ...options });
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
 * Response after checking if a file/directory exists
 */
export interface FExistsResponse {
  /**
   * Exists
   */
  exists: boolean;
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

  /**
   * Working directory. If not provided, the file will be read from the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface FExistsParams {
  /**
   * Path to the file/directory. If the path is not start with '/', the
   * file/directory will be checked from the working directory
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
   * Path to the file/directory. If the path is not start with '/', the
   * file/directory will be checked from the working directory
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
   * Path to the file. If the path is not start with '/', the file will be read from
   * the working directory.
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
   * Path to the file/directory. If the path is not start with '/', the
   * file/directory will be deleted from the working directory
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
   * New path for the file/directory. If the path is not start with '/', the
   * file/directory will be renamed to the working directory
   */
  newPath: string;

  /**
   * Old path to the file/directory. If the path is not start with '/', the
   * file/directory will be renamed from the working directory
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
     * Path to the file. If the path is not start with '/', the file will be written to
     * the working directory
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
     * Path to the file. If the path is not start with '/', the file will be written to
     * the working directory
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
