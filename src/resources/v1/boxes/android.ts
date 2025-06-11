// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Android extends APIResource {
  /**
   * List apps
   *
   * @example
   * ```ts
   * const androids = await client.v1.boxes.android.list(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  list(
    id: string,
    query: AndroidListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AndroidListResponse> {
    return this._client.get(path`/boxes/${id}/android/apps`, { query, ...options });
  }

  /**
   * Close app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.close('com.example.myapp', {
   *   id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  close(packageName: string, params: AndroidCloseParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.post(path`/boxes/${id}/android/apps/${packageName}/close`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get app
   *
   * @example
   * ```ts
   * const androidApp = await client.v1.boxes.android.get(
   *   'com.example.myapp',
   *   { id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  get(packageName: string, params: AndroidGetParams, options?: RequestOptions): APIPromise<AndroidApp> {
    const { id } = params;
    return this._client.get(path`/boxes/${id}/android/apps/${packageName}`, options);
  }

  /**
   * Install app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.install(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { apk: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  install(id: string, body: AndroidInstallParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      path`/boxes/${id}/android/apps`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Open app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.open('com.example.myapp', {
   *   id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  open(packageName: string, params: AndroidOpenParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.post(path`/boxes/${id}/android/apps/${packageName}/open`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restart app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.restart('com.example.myapp', {
   *   id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  restart(packageName: string, params: AndroidRestartParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.post(path`/boxes/${id}/android/apps/${packageName}/restart`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uninstall app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.uninstall(
   *   'com.example.myapp',
   *   { id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  uninstall(packageName: string, params: AndroidUninstallParams, options?: RequestOptions): APIPromise<void> {
    const { id, ...body } = params;
    return this._client.delete(path`/boxes/${id}/android/apps/${packageName}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Android app information
 */
export interface AndroidApp {
  /**
   * Android app apk path
   */
  apkPath: string;

  /**
   * Application type: system or third-party
   */
  appType: 'system' | 'third-party';

  /**
   * Whether the application is currently running
   */
  isRunning: boolean;

  /**
   * Android app name
   */
  name: string;

  /**
   * Android app package name
   */
  packageName: string;

  /**
   * Android app version
   */
  version: string;
}

/**
 * Response containing list of Android apps
 */
export interface AndroidListResponse {
  /**
   * Android app list
   */
  data: Array<AndroidApp>;
}

export interface AndroidListParams {
  /**
   * Application type: system or third-party, default is all
   */
  appType?: 'system' | 'third-party';

  /**
   * Whether to include running apps, default is all
   */
  isRunning?: boolean;
}

export interface AndroidCloseParams {
  /**
   * Box ID
   */
  id: string;
}

export interface AndroidGetParams {
  /**
   * Box ID
   */
  id: string;
}

export type AndroidInstallParams =
  | AndroidInstallParams.InstallAndroidAppByFile
  | AndroidInstallParams.InstallAndroidAppByURL;

export declare namespace AndroidInstallParams {
  export interface InstallAndroidAppByFile {
    /**
     * APK file to install (max file size: 200MB)
     */
    apk: Uploadable;
  }

  export interface InstallAndroidAppByURL {
    /**
     * HTTP URL to download APK file (max file size: 200MB)
     */
    apk: string;
  }
}

export interface AndroidOpenParams {
  /**
   * Path param: Box ID
   */
  id: string;

  /**
   * Body param: Activity name, default is the main activity.
   */
  activityName?: string;
}

export interface AndroidRestartParams {
  /**
   * Box ID
   */
  id: string;
}

export interface AndroidUninstallParams {
  /**
   * Path param: Box ID
   */
  id: string;

  /**
   * Body param: uninstalls the application while retaining the data/cache
   */
  keepData?: boolean;
}

export declare namespace Android {
  export {
    type AndroidApp as AndroidApp,
    type AndroidListResponse as AndroidListResponse,
    type AndroidListParams as AndroidListParams,
    type AndroidCloseParams as AndroidCloseParams,
    type AndroidGetParams as AndroidGetParams,
    type AndroidInstallParams as AndroidInstallParams,
    type AndroidOpenParams as AndroidOpenParams,
    type AndroidRestartParams as AndroidRestartParams,
    type AndroidUninstallParams as AndroidUninstallParams,
  };
}
