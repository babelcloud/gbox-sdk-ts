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
   * Backup
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.backup(
   *   'com.example.myapp',
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  backup(packageName: string, params: AndroidBackupParams, options?: RequestOptions): APIPromise<Response> {
    const { boxId } = params;
    return this._client.post(path`/boxes/${boxId}/android/packages/${packageName}/backup`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Backup all
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
  backupAll(boxID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(path`/boxes/${boxID}/android/packages/backup-all`, {
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
   *   boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  close(packageName: string, params: AndroidCloseParams, options?: RequestOptions): APIPromise<void> {
    const { boxId } = params;
    return this._client.post(path`/boxes/${boxId}/android/packages/${packageName}/close`, {
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
  closeAll(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/android/packages/close-all`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get pkg
   *
   * @example
   * ```ts
   * const android = await client.v1.boxes.android.get(
   *   'com.example.myapp',
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  get(
    packageName: string,
    params: AndroidGetParams,
    options?: RequestOptions,
  ): APIPromise<AndroidGetResponse> {
    const { boxId } = params;
    return this._client.get(path`/boxes/${boxId}/android/packages/${packageName}`, options);
  }

  /**
   * Get installed app info by package name
   *
   * @example
   * ```ts
   * const androidApp = await client.v1.boxes.android.getApp(
   *   'com.example.myapp',
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  getApp(packageName: string, params: AndroidGetAppParams, options?: RequestOptions): APIPromise<AndroidApp> {
    const { boxId } = params;
    return this._client.get(path`/boxes/${boxId}/android/apps/${packageName}`, options);
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
  getConnectAddress(boxID: string, options?: RequestOptions): APIPromise<AndroidGetConnectAddressResponse> {
    return this._client.get(path`/boxes/${boxID}/android/connect-address`, options);
  }

  /**
   * Install app
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.install(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { apk: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  install(
    boxID: string,
    body: AndroidInstallParams,
    options?: RequestOptions,
  ): APIPromise<AndroidInstallResponse> {
    return this._client.post(
      path`/boxes/${boxID}/android/packages`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get pkg activities
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.android.listActivities(
   *     'com.example.myapp',
   *     { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   *   );
   * ```
   */
  listActivities(
    packageName: string,
    params: AndroidListActivitiesParams,
    options?: RequestOptions,
  ): APIPromise<AndroidListActivitiesResponse> {
    const { boxId } = params;
    return this._client.get(path`/boxes/${boxId}/android/packages/${packageName}/activities`, options);
  }

  /**
   * List all installed apps on the launcher
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.listApp(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  listApp(boxID: string, options?: RequestOptions): APIPromise<AndroidListAppResponse> {
    return this._client.get(path`/boxes/${boxID}/android/apps`, options);
  }

  /**
   * Retrieve detailed information for all installed pkg. This endpoint provides
   * comprehensive pkg details
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.android.listPkg(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  listPkg(
    boxID: string,
    query: AndroidListPkgParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AndroidListPkgResponse> {
    return this._client.get(path`/boxes/${boxID}/android/packages`, { query, ...options });
  }

  /**
   * A faster endpoint to quickly retrieve basic pkg information. This API provides
   * better performance for scenarios where you need to get essential pkg details
   * quickly
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.android.listPkgSimple(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   );
   * ```
   */
  listPkgSimple(
    boxID: string,
    query: AndroidListPkgSimpleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AndroidListPkgSimpleResponse> {
    return this._client.get(path`/boxes/${boxID}/android/packages/simple`, { query, ...options });
  }

  /**
   * Open app
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.open('com.example.myapp', {
   *   boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  open(packageName: string, params: AndroidOpenParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, ...body } = params;
    return this._client.post(path`/boxes/${boxId}/android/packages/${packageName}/open`, {
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
   *   boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * });
   * ```
   */
  restart(packageName: string, params: AndroidRestartParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, ...body } = params;
    return this._client.post(path`/boxes/${boxId}/android/packages/${packageName}/restart`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Restore
   *
   * @example
   * ```ts
   * await client.v1.boxes.android.restore(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { backup: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  restore(boxID: string, body: AndroidRestoreParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/android/packages/restore`, {
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
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  uninstall(packageName: string, params: AndroidUninstallParams, options?: RequestOptions): APIPromise<void> {
    const { boxId, ...body } = params;
    return this._client.delete(path`/boxes/${boxId}/android/packages/${packageName}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Android app
 */
export interface AndroidApp {
  /**
   * Activity class name
   */
  activityClassName: string;

  /**
   * Activity name
   */
  activityName: string;

  /**
   * App package name
   */
  packageName: string;
}

/**
 * Android pkg information
 */
export interface AndroidGetResponse {
  /**
   * Android apk path
   */
  apkPath: string;

  /**
   * Whether the pkg is currently running
   */
  isRunning: boolean;

  /**
   * Android pkg name
   */
  name: string;

  /**
   * Android package name
   */
  packageName: string;

  /**
   * system or thirdParty
   */
  pkgType: 'system' | 'thirdParty';

  /**
   * Android pkg version
   */
  version: string;
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

/**
 * Response containing the result of installing an Android pkg
 */
export interface AndroidInstallResponse {
  /**
   * Activity list
   */
  activities: Array<AndroidInstallResponse.Activity>;

  /**
   * Android apk path
   */
  apkPath: string;

  /**
   * Android pkg package name
   */
  packageName: string;

  /**
   * system or thirdParty
   */
  pkgType: 'system' | 'thirdParty';
}

export namespace AndroidInstallResponse {
  /**
   * Android pkg activity
   */
  export interface Activity {
    /**
     * Activity class name
     */
    className: string;

    /**
     * Activity class name
     */
    isExported: boolean;

    /**
     * Whether the activity is a launcher activity. Launcher activities appear in the
     * device's pkg launcher/home screen and can be directly launched by the user.
     */
    isLauncher: boolean;

    /**
     * Whether the activity is the main activity. Main activity is the entry point of
     * the pkg and is typically launched when the pkg is started.
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
 * Android pkg activity list
 */
export interface AndroidListActivitiesResponse {
  /**
   * Activity list
   */
  data: Array<AndroidListActivitiesResponse.Data>;
}

export namespace AndroidListActivitiesResponse {
  /**
   * Android pkg activity
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
     * Whether the activity is a launcher activity. Launcher activities appear in the
     * device's pkg launcher/home screen and can be directly launched by the user.
     */
    isLauncher: boolean;

    /**
     * Whether the activity is the main activity. Main activity is the entry point of
     * the pkg and is typically launched when the pkg is started.
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
 * Android app list
 */
export interface AndroidListAppResponse {
  /**
   * App list
   */
  data: Array<AndroidApp>;
}

/**
 * Response containing list of Android pkgs
 */
export interface AndroidListPkgResponse {
  /**
   * Android pkg list
   */
  data: Array<AndroidListPkgResponse.Data>;
}

export namespace AndroidListPkgResponse {
  /**
   * Android pkg information
   */
  export interface Data {
    /**
     * Android apk path
     */
    apkPath: string;

    /**
     * Whether the pkg is currently running
     */
    isRunning: boolean;

    /**
     * Android pkg name
     */
    name: string;

    /**
     * Android package name
     */
    packageName: string;

    /**
     * system or thirdParty
     */
    pkgType: 'system' | 'thirdParty';

    /**
     * Android pkg version
     */
    version: string;
  }
}

/**
 * Response containing list of Android pkgs
 */
export interface AndroidListPkgSimpleResponse {
  /**
   * Android pkg simple list
   */
  data: Array<AndroidListPkgSimpleResponse.Data>;
}

export namespace AndroidListPkgSimpleResponse {
  /**
   * Android pkg simple
   */
  export interface Data {
    /**
     * Android apk path
     */
    apkPath: string;

    /**
     * Android pkg package name
     */
    packageName: string;

    /**
     * system or thirdParty
     */
    pkgType: 'system' | 'thirdParty';
  }
}

export interface AndroidBackupParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface AndroidCloseParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface AndroidGetParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface AndroidGetAppParams {
  /**
   * Box ID
   */
  boxId: string;
}

export type AndroidInstallParams =
  | AndroidInstallParams.InstallAndroidPkgByFile
  | AndroidInstallParams.InstallAndroidPkgByURL;

export declare namespace AndroidInstallParams {
  export interface InstallAndroidPkgByFile {
    /**
     * APK file or ZIP archive to install (max file size: 512MB).
     *
     * **Single APK mode:**
     *
     * - Upload a single APK file (e.g., app.apk)
     * - System will automatically detect and install as single APK
     *
     * **Multi-APK mode (automatically detected):**
     *
     * - Upload a ZIP archive containing multiple APK files
     * - System will automatically detect ZIP format and install all APKs inside
     * - ZIP filename example: com.reddit.frontpage-gplay.zip
     * - ZIP contents example:
     *
     * com.reddit.frontpage-gplay.zip └── com.reddit.frontpage-gplay/ (folder) ├──
     * reddit-base.apk (base APK) ├── reddit-arm64.apk (architecture-specific) ├──
     * reddit-en.apk (language pack) └── reddit-mdpi.apk (density-specific resources)
     *
     * This is commonly used for split APKs where different components are separated by
     * architecture, language, or screen density.
     */
    apk: Uploadable;

    /**
     * Whether to open the app after installation. Will find and launch the launcher
     * activity of the installed app. If there are multiple launcher activities, only
     * one will be opened. If the installed APK has no launcher activity, this
     * parameter will have no effect.
     */
    open?: boolean;
  }

  export interface InstallAndroidPkgByURL {
    /**
     * HTTP URL to download APK file or ZIP archive (max file size: 512MB).
     *
     * **Single APK mode (automatically detected):**
     *
     * - Provide URL to a single APK file
     * - System will automatically detect .apk extension and install as single APK
     * - Example: https://example.com/app.apk
     *
     * **Multi-APK mode (automatically detected):**
     *
     * - Provide URL to a ZIP archive containing multiple APK files
     * - System will automatically detect .zip extension and install all APKs inside
     * - ZIP filename example: com.reddit.frontpage-gplay.zip
     * - ZIP contents example:
     *
     * com.reddit.frontpage-gplay.zip └── com.reddit.frontpage-gplay/ (folder) ├──
     * reddit-base.apk (base APK) ├── reddit-arm64.apk (architecture-specific) ├──
     * reddit-en.apk (language pack) └── reddit-mdpi.apk (density-specific resources)
     *
     * - Example URL: https://example.com/com.reddit.frontpage-gplay.zip
     *
     * This is commonly used for split APKs where different components are separated by
     * architecture, language, or screen density.
     */
    apk: string;

    /**
     * Whether to open the app after installation. Will find and launch the launcher
     * activity of the installed app. If there are multiple launcher activities, only
     * one will be opened. If the installed APK has no launcher activity, this
     * parameter will have no effect.
     */
    open?: boolean;
  }
}

export interface AndroidListActivitiesParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface AndroidListPkgParams {
  /**
   * system or thirdParty, default is thirdParty
   */
  pkgType?: Array<'system' | 'thirdParty'>;

  /**
   * Filter pkgs by running status: running (show only running pkgs), notRunning
   * (show only non-running pkgs). Default is all
   */
  runningFilter?: Array<'running' | 'notRunning'>;
}

export interface AndroidListPkgSimpleParams {
  /**
   * system or thirdParty, default is thirdParty
   */
  pkgType?: Array<'system' | 'thirdParty'>;
}

export interface AndroidOpenParams {
  /**
   * Path param: Box ID
   */
  boxId: string;

  /**
   * Body param: Activity name, default is the main activity.
   */
  activityName?: string;
}

export interface AndroidRestartParams {
  /**
   * Path param: Box ID
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
   * Path param: Box ID
   */
  boxId: string;

  /**
   * Body param: uninstalls the pkg while retaining the data/cache
   */
  keepData?: boolean;
}

export declare namespace Android {
  export {
    type AndroidApp as AndroidApp,
    type AndroidGetResponse as AndroidGetResponse,
    type AndroidGetConnectAddressResponse as AndroidGetConnectAddressResponse,
    type AndroidInstallResponse as AndroidInstallResponse,
    type AndroidListActivitiesResponse as AndroidListActivitiesResponse,
    type AndroidListAppResponse as AndroidListAppResponse,
    type AndroidListPkgResponse as AndroidListPkgResponse,
    type AndroidListPkgSimpleResponse as AndroidListPkgSimpleResponse,
    type AndroidBackupParams as AndroidBackupParams,
    type AndroidCloseParams as AndroidCloseParams,
    type AndroidGetParams as AndroidGetParams,
    type AndroidGetAppParams as AndroidGetAppParams,
    type AndroidInstallParams as AndroidInstallParams,
    type AndroidListActivitiesParams as AndroidListActivitiesParams,
    type AndroidListPkgParams as AndroidListPkgParams,
    type AndroidListPkgSimpleParams as AndroidListPkgSimpleParams,
    type AndroidOpenParams as AndroidOpenParams,
    type AndroidRestartParams as AndroidRestartParams,
    type AndroidRestoreParams as AndroidRestoreParams,
    type AndroidUninstallParams as AndroidUninstallParams,
  };
}
