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
   *   'boxId',
   * );
   * ```
   */
  list(
    boxID: string,
    query: AndroidListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AndroidListResponse> {
    return this._client.get(path`/boxes/${boxID}/android/apps`, { query, ...options });
  }

  /**
   * Backup app
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.backup(
   *   'com.example.myapp',
   *   { boxId: 'boxId' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  backup(packageName: string, params: AndroidBackupParams, options?: RequestOptions): APIPromise<Response> {
    const { boxId } = params;
    return this._client.post(path`/boxes/${boxId}/android/apps/${packageName}/backup`, {
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
   *   'boxId',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  backupAll(boxID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/boxes/${boxID}/android/apps/backup-all`, {
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
   *   boxId: 'boxId',
   * });
   * ```
   */
  close(packageName: string, params: AndroidCloseParams, options?: RequestOptions): APIPromise<void> {
    const { boxId } = params;
    return this._client.post(path`/boxes/${boxId}/android/apps/${packageName}/close`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Close all apps
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.closeAll('boxId');
   * ```
   */
  closeAll(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/android/apps/close-all`, {
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
   *   { boxId: 'boxId' },
   * );
   * ```
   */
  get(packageName: string, params: AndroidGetParams, options?: RequestOptions): APIPromise<AndroidApp> {
    const { boxId } = params;
    return this._client.get(path`/boxes/${boxId}/android/apps/${packageName}`, options);
  }

  /**
   * Get connect address
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.android.getConnectAddress('boxId');
   * ```
   */
  getConnectAddress(boxID: string, options?: RequestOptions): APIPromise<AndroidGetConnectAddressResponse> {
    return this._client.get(path`/boxes/${boxID}/android/connect-address`, options);
  }

  /**
   * Install app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.install('boxId', {
   *   apk: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  install(boxID: string, body: AndroidInstallParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      path`/boxes/${boxID}/android/apps`,
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
   *     { boxId: 'boxId' },
   *   );
   * ```
   */
  listActivities(
    packageName: string,
    params: AndroidListActivitiesParams,
    options?: RequestOptions,
  ): APIPromise<AndroidListActivitiesResponse> {
    const { boxId } = params;
    return this._client.get(path`/boxes/${boxId}/android/apps/${packageName}/activities`, options);
  }

  /**
   * A faster endpoint to quickly retrieve basic app information. This API provides
   * better performance for scenarios where you need to get essential app details
   * quickly
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.listSimple(
   *   'boxId',
   * );
   * ```
   */
  listSimple(
    boxID: string,
    query: AndroidListSimpleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AndroidListSimpleResponse> {
    return this._client.get(path`/boxes/${boxID}/android/apps/simple`, { query, ...options });
  }

  /**
   * Open app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.open('com.example.myapp', {
   *   boxId: 'boxId',
   * });
   * ```
   */
  open(packageName: string, params: AndroidOpenParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, ...body } = params;
    return this._client.post(path`/boxes/${boxId}/android/apps/${packageName}/open`, {
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
   *   boxId: 'boxId',
   * });
   * ```
   */
  restart(packageName: string, params: AndroidRestartParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, ...body } = params;
    return this._client.post(path`/boxes/${boxId}/android/apps/${packageName}/restart`, {
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
   * await client.v1.boxes.android.restore('boxId', {
   *   backup: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  restore(boxID: string, body: AndroidRestoreParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/android/apps/restore`, {
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
   *   { boxId: 'boxId' },
   * );
   * ```
   */
  uninstall(packageName: string, params: AndroidUninstallParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, ...body } = params;
    return this._client.delete(path`/boxes/${boxId}/android/apps/${packageName}`, {
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
  boxId: string;
}

export interface AndroidCloseParams {
  boxId: string;
}

export interface AndroidGetParams {
  boxId: string;
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
  boxId: string;
}

export interface AndroidListSimpleParams {
  /**
   * Application type: system or third-party, default is third-party
   */
  appType?: 'system' | 'third-party';
}

export interface AndroidOpenParams {
  /**
   * Path param:
   */
  boxId: string;

  /**
   * Body param: Activity name, default is the main activity.
   */
  activityName?: string;
}

export interface AndroidRestartParams {
  /**
   * Path param:
   */
  boxId: string;

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
   * Path param:
   */
  boxId: string;

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
