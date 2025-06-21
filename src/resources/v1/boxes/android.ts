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
   * Retrieve detailed information for all installed applications. This endpoint
   * provides comprehensive app details
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
   * Backup app
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.backup(
   *   'com.example.myapp',
   *   { id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  backup(packageName: string, params: AndroidBackupParams, options?: RequestOptions): APIPromise<Response> {
    const { id } = params;
    return this._client.post(path`/boxes/${id}/android/apps/${packageName}/backup`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Backup all apps
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.backupAll(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  backupAll(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/boxes/${id}/android/apps/backup-all`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
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
   * Close all apps
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.closeAll(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  closeAll(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/android/apps/close-all`, {
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
   * Get connect address
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.android.getConnectAddress(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   );
   * ```
   */
  getConnectAddress(id: string, options?: RequestOptions): APIPromise<AndroidGetConnectAddressResponse> {
    return this._client.get(path`/boxes/${id}/android/connect-address`, options);
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
   * Get app activities
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.android.listActivities(
   *     'com.example.myapp',
   *     { id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   *   );
   * ```
   */
  listActivities(
    packageName: string,
    params: AndroidListActivitiesParams,
    options?: RequestOptions,
  ): APIPromise<AndroidListActivitiesResponse> {
    const { id } = params;
    return this._client.get(path`/boxes/${id}/android/apps/${packageName}/activities`, options);
  }

  /**
   * A faster endpoint to quickly retrieve basic app information. This API provides
   * better performance for scenarios where you need to get essential app details
   * quickly
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.listSimple(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  listSimple(
    id: string,
    query: AndroidListSimpleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AndroidListSimpleResponse> {
    return this._client.get(path`/boxes/${id}/android/apps/simple`, { query, ...options });
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
    const { id, ...body } = params;
    return this._client.post(path`/boxes/${id}/android/apps/${packageName}/restart`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restore app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.restore(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { backup: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  restore(id: string, body: AndroidRestoreParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/android/apps/restore`, {
      body,
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

/**
 * Android connection information
 */
export interface AndroidGetConnectAddressResponse {
  /**
   * Android adb connect address. use `adb connect <adbConnectAddress>` to connect to
   * the Android device
   */
  adb: string;
}

export interface AndroidListActivitiesResponse {
  /**
   * Activity list
   */
  data: Array<AndroidListActivitiesResponse.Data>;
}

export namespace AndroidListActivitiesResponse {
  /**
   * Android app activity
   */
  export interface Data {
    /**
     * Activity class name
     */
    className: string;

    /**
     * Activity class name
     */
    isExported: boolean;

    /**
     * Whether the activity is the main activity
     */
    isMain: boolean;

    /**
     * Activity name
     */
    name: string;

    /**
     * Activity package name
     */
    packageName: string;
  }
}

/**
 * Response containing list of Android apps
 */
export interface AndroidListSimpleResponse {
  /**
   * Android app simple list
   */
  data: Array<AndroidListSimpleResponse.Data>;
}

export namespace AndroidListSimpleResponse {
  export interface Data {
    /**
     * Android app apk path
     */
    apkPath: string;

    /**
     * Application type: system or third-party
     */
    appType: 'system' | 'third-party';

    /**
     * Android app package name
     */
    packageName: string;
  }
}

export interface AndroidListParams {
  /**
   * Application type: system or third-party, default is third-party
   */
  appType?: 'system' | 'third-party';

  /**
   * Whether to include running apps, default is all
   */
  isRunning?: boolean;
}

export interface AndroidBackupParams {
  /**
   * Box ID
   */
  id: string;
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
     * APK file to install (max file size: 512MB)
     */
    apk: Uploadable;
  }

  export interface InstallAndroidAppByURL {
    /**
     * HTTP URL to download APK file (max file size: 512MB)
     */
    apk: string;
  }
}

export interface AndroidListActivitiesParams {
  /**
   * Box ID
   */
  id: string;
}

export interface AndroidListSimpleParams {
  /**
   * Application type: system or third-party, default is third-party
   */
  appType?: 'system' | 'third-party';
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
   * Path param: Box ID
   */
  id: string;

  /**
   * Body param: Activity name, default is the main activity.
   */
  activityName?: string;
}

export interface AndroidRestoreParams {
  /**
   * Backup file to restore (max file size: 100MB)
   */
  backup: Uploadable;
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
    type AndroidGetConnectAddressResponse as AndroidGetConnectAddressResponse,
    type AndroidListActivitiesResponse as AndroidListActivitiesResponse,
    type AndroidListSimpleResponse as AndroidListSimpleResponse,
    type AndroidListParams as AndroidListParams,
    type AndroidBackupParams as AndroidBackupParams,
    type AndroidCloseParams as AndroidCloseParams,
    type AndroidGetParams as AndroidGetParams,
    type AndroidInstallParams as AndroidInstallParams,
    type AndroidListActivitiesParams as AndroidListActivitiesParams,
    type AndroidListSimpleParams as AndroidListSimpleParams,
    type AndroidOpenParams as AndroidOpenParams,
    type AndroidRestartParams as AndroidRestartParams,
    type AndroidRestoreParams as AndroidRestoreParams,
    type AndroidUninstallParams as AndroidUninstallParams,
  };
}
