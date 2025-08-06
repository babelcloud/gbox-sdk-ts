// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionAIParams,
  ActionAIResponse,
  ActionClickParams,
  ActionClickResponse,
  ActionDragParams,
  ActionDragResponse,
  ActionExtractParams,
  ActionExtractResponse,
  ActionMoveParams,
  ActionMoveResponse,
  ActionPressButtonParams,
  ActionPressButtonResponse,
  ActionPressKeyParams,
  ActionPressKeyResponse,
  ActionScreenLayoutResponse,
  ActionScreenRotationParams,
  ActionScreenRotationResponse,
  ActionScreenshotParams,
  ActionScreenshotResponse,
  ActionScrollParams,
  ActionScrollResponse,
  ActionSwipeParams,
  ActionSwipeResponse,
  ActionTouchParams,
  ActionTouchResponse,
  ActionTypeParams,
  ActionTypeResponse,
  Actions,
} from './actions';
import * as AndroidAPI from './android';
import {
  Android,
  AndroidApp,
  AndroidBackupParams,
  AndroidCloseParams,
  AndroidGetAppParams,
  AndroidGetConnectAddressResponse,
  AndroidGetParams,
  AndroidGetResponse,
  AndroidInstallParams,
  AndroidInstallResponse,
  AndroidListActivitiesParams,
  AndroidListActivitiesResponse,
  AndroidListAppResponse,
  AndroidListPkgParams,
  AndroidListPkgResponse,
  AndroidListPkgSimpleParams,
  AndroidListPkgSimpleResponse,
  AndroidOpenParams,
  AndroidRestartParams,
  AndroidRestoreParams,
  AndroidUninstallParams,
} from './android';
import * as BrowserAPI from './browser';
import {
  Browser,
  BrowserCdpURLParams,
  BrowserCdpURLResponse,
  BrowserCloseTabParams,
  BrowserCloseTabResponse,
  BrowserGetTabsResponse,
  BrowserOpenTabParams,
  BrowserOpenTabResponse,
  BrowserSwitchTabParams,
  BrowserSwitchTabResponse,
  BrowserUpdateTabParams,
  BrowserUpdateTabResponse,
} from './browser';
import * as FsAPI from './fs';
import {
  FExistsParams,
  FExistsResponse,
  FInfoParams,
  FInfoResponse,
  FListParams,
  FListResponse,
  FReadParams,
  FReadResponse,
  FRemoveParams,
  FRemoveResponse,
  FRenameParams,
  FRenameResponse,
  FWriteParams,
  FWriteResponse,
  Fs,
} from './fs';
import * as MediaAPI from './media';
import {
  Media,
  MediaCreateAlbumParams,
  MediaCreateAlbumResponse,
  MediaDeleteAlbumParams,
  MediaDeleteMediaParams,
  MediaDownloadMediaParams,
  MediaDownloadMediaResponse,
  MediaGetAlbumDetailParams,
  MediaGetAlbumDetailResponse,
  MediaListAlbumsResponse,
  MediaUpdateAlbumParams,
  MediaUpdateAlbumResponse,
} from './media';
import * as ProxyAPI from './proxy';
import { Proxy, ProxySetParams } from './proxy';
import * as StorageAPI from './storage';
import { Storage, StoragePresignedURLParams, StoragePresignedURLResponse } from './storage';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Boxes extends APIResource {
  storage: StorageAPI.Storage = new StorageAPI.Storage(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  proxy: ProxyAPI.Proxy = new ProxyAPI.Proxy(this._client);
  media: MediaAPI.Media = new MediaAPI.Media(this._client);
  fs: FsAPI.Fs = new FsAPI.Fs(this._client);
  browser: BrowserAPI.Browser = new BrowserAPI.Browser(this._client);
  android: AndroidAPI.Android = new AndroidAPI.Android(this._client);

  /**
   * Get box
   *
   * @example
   * ```ts
   * const box = await client.v1.boxes.retrieve(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  retrieve(boxID: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/boxes/${boxID}`, options);
  }

  /**
   * List box
   *
   * @example
   * ```ts
   * const boxes = await client.v1.boxes.list();
   * ```
   */
  list(query: BoxListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BoxListResponse> {
    return this._client.get('/boxes', { query, ...options });
  }

  /**
   * Create android box
   *
   * @example
   * ```ts
   * const androidBox = await client.v1.boxes.createAndroid();
   * ```
   */
  createAndroid(body: BoxCreateAndroidParams, options?: RequestOptions): APIPromise<AndroidBox> {
    return this._client.post('/boxes/android', { body, ...options });
  }

  /**
   * Create linux box
   *
   * @example
   * ```ts
   * const linuxBox = await client.v1.boxes.createLinux();
   * ```
   */
  createLinux(body: BoxCreateLinuxParams, options?: RequestOptions): APIPromise<LinuxBox> {
    return this._client.post('/boxes/linux', { body, ...options });
  }

  /**
   * Retrieve the current display properties for a running box. This endpoint
   * provides details about the box's screen resolution, orientation, and other
   * visual properties
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.display(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  display(boxID: string, options?: RequestOptions): APIPromise<BoxDisplayResponse> {
    return this._client.get(path`/boxes/${boxID}/display`, options);
  }

  /**
   * Execute a command on a running box. This endpoint allows you to send commands to
   * the box and receive the output
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.executeCommands(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { commands: ['ls', '-l'] },
   * );
   * ```
   */
  executeCommands(
    boxID: string,
    body: BoxExecuteCommandsParams,
    options?: RequestOptions,
  ): APIPromise<BoxExecuteCommandsResponse> {
    return this._client.post(path`/boxes/${boxID}/commands`, { body, ...options });
  }

  /**
   * This endpoint allows you to generate a pre-signed URL for accessing the live
   * view of a running box. The URL is valid for a limited time and can be used to
   * view the box's live stream
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.liveViewURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  liveViewURL(
    boxID: string,
    body: BoxLiveViewURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxLiveViewURLResponse> {
    return this._client.post(path`/boxes/${boxID}/live-view-url`, { body, ...options });
  }

  /**
   * Run code on the box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.runCode(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { code: 'print("Hello, World!")' },
   * );
   * ```
   */
  runCode(boxID: string, body: BoxRunCodeParams, options?: RequestOptions): APIPromise<BoxRunCodeResponse> {
    return this._client.post(path`/boxes/${boxID}/run-code`, { body, ...options });
  }

  /**
   * Start box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.start(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  start(
    boxID: string,
    body: BoxStartParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxStartResponse> {
    return this._client.post(path`/boxes/${boxID}/start`, { body, ...options });
  }

  /**
   * Stop box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.stop(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  stop(
    boxID: string,
    body: BoxStopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxStopResponse> {
    return this._client.post(path`/boxes/${boxID}/stop`, { body, ...options });
  }

  /**
   * Terminate a running box. This action will stop the box and release its resources
   *
   * @example
   * ```ts
   * await client.v1.boxes.terminate(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  terminate(
    boxID: string,
    body: BoxTerminateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/terminate`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint allows you to generate a pre-signed URL for accessing the web
   * terminal of a running box. The URL is valid for a limited time and can be used
   * to access the box's terminal interface
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.webTerminalURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  webTerminalURL(
    boxID: string,
    body: BoxWebTerminalURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxWebTerminalURLResponse> {
    return this._client.post(path`/boxes/${boxID}/web-terminal-url`, { body, ...options });
  }

  /**
   * Get the websocket url for the box. This endpoint provides the WebSocket URLs for
   * executing shell commands and running code snippets in the box environment. These
   * URLs allow real-time communication and data exchange with the box, enabling
   * interactive terminal sessions and code execution.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.websocketURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  websocketURL(boxID: string, options?: RequestOptions): APIPromise<BoxWebsocketURLResponse> {
    return this._client.get(path`/boxes/${boxID}/websocket-url`, options);
  }
}

/**
 * Android box instance with full configuration and status
 */
export interface AndroidBox {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Complete configuration for Android box instance
   */
  config: AndroidBox.Config;

  /**
   * Creation timestamp of the box
   */
  createdAt: string;

  /**
   * Expiration timestamp of the box
   */
  expiresAt: string | null;

  /**
   * The current status of a box instance
   */
  status: 'pending' | 'running' | 'error' | 'terminated';

  /**
   * Box type is Android
   */
  type: 'android';

  /**
   * Last update timestamp of the box
   */
  updatedAt: string;

  /**
   * The reason for the current status, if any
   */
  reason?: string | null;
}

export namespace AndroidBox {
  /**
   * Complete configuration for Android box instance
   */
  export interface Config {
    /**
     * CPU cores allocated to the box
     */
    cpu: number;

    /**
     * Environment variables for the box. These variables will be available in all
     * operations including command execution, code running, and other box behaviors
     */
    envs: { [key: string]: string };

    /**
     * Key-value pairs of labels for the box. Labels are used to add custom metadata to
     * help identify, categorize, and manage boxes. Common use cases include project
     * names, environments, teams, applications, or any other organizational tags that
     * help you organize and filter your boxes.
     */
    labels: { [key: string]: string };

    /**
     * Memory allocated to the box in MiB
     */
    memory: number;

    /**
     * Android operating system configuration
     */
    os: Config.Os;

    /**
     * Storage allocated to the box in GiB
     */
    storage: number;

    /**
     * Device type - virtual or physical Android device
     */
    deviceType?: 'virtual' | 'physical';

    /**
     * Working directory path for the box. This directory serves as the default
     * starting point for all operations including command execution, code running, and
     * file system operations. When you execute commands or run code, they will start
     * from this directory unless explicitly specified otherwise.
     */
    workingDir?: string;
  }

  export namespace Config {
    /**
     * Android operating system configuration
     */
    export interface Os {
      /**
       * Supported Android versions
       */
      version: '12' | '13' | '15';
    }
  }
}

/**
 * Request body for creating a new Android box instance
 */
export interface CreateAndroidBox {
  /**
   * Configuration for a Android box instance
   */
  config?: CreateAndroidBox.Config;

  /**
   * Timeout for waiting the box to transition from pending to running state, default
   * is 30s. If the box doesn't reach running state within this timeout, the API will
   * return HTTP status code 408. The timed-out box will be automatically deleted and
   * will not count towards your quota.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30s Maximum allowed: 5m
   */
  timeout?: string;

  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export namespace CreateAndroidBox {
  /**
   * Configuration for a Android box instance
   */
  export interface Config {
    /**
     * Device type - virtual or physical Android device
     */
    deviceType?: 'virtual' | 'physical';

    /**
     * Environment variables for the box. These variables will be available in all
     * operations including command execution, code running, and other box behaviors
     */
    envs?: { [key: string]: string };

    /**
     * The box will be alive for the given duration
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 60m
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box. Labels are used to add custom metadata to
     * help identify, categorize, and manage boxes. Common use cases include project
     * names, environments, teams, applications, or any other organizational tags that
     * help you organize and filter your boxes.
     */
    labels?: { [key: string]: string };
  }
}

/**
 * Request body for creating a new Linux box instance
 */
export interface CreateLinuxBox {
  /**
   * Configuration for a Linux box instance
   */
  config?: CreateLinuxBox.Config;

  /**
   * Timeout for waiting the box to transition from pending to running state, default
   * is 30s. If the box doesn't reach running state within this timeout, the API will
   * return HTTP status code 408. The timed-out box will be automatically deleted and
   * will not count towards your quota.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30s Maximum allowed: 5m
   */
  timeout?: string;

  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export namespace CreateLinuxBox {
  /**
   * Configuration for a Linux box instance
   */
  export interface Config {
    /**
     * Environment variables for the box. These variables will be available in all
     * operations including command execution, code running, and other box behaviors
     */
    envs?: { [key: string]: string };

    /**
     * The box will be alive for the given duration
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 60m
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box. Labels are used to add custom metadata to
     * help identify, categorize, and manage boxes. Common use cases include project
     * names, environments, teams, applications, or any other organizational tags that
     * help you organize and filter your boxes.
     */
    labels?: { [key: string]: string };
  }
}

/**
 * Linux box instance with full configuration and status
 */
export interface LinuxBox {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Complete configuration for Linux box instance
   */
  config: LinuxBox.Config;

  /**
   * Creation timestamp of the box
   */
  createdAt: string;

  /**
   * Expiration timestamp of the box
   */
  expiresAt: string | null;

  /**
   * The current status of a box instance
   */
  status: 'pending' | 'running' | 'error' | 'terminated';

  /**
   * Box type is Linux
   */
  type: 'linux';

  /**
   * Last update timestamp of the box
   */
  updatedAt: string;

  /**
   * The reason for the current status, if any
   */
  reason?: string | null;
}

export namespace LinuxBox {
  /**
   * Complete configuration for Linux box instance
   */
  export interface Config {
    /**
     * CPU cores allocated to the box
     */
    cpu: number;

    /**
     * Environment variables for the box. These variables will be available in all
     * operations including command execution, code running, and other box behaviors
     */
    envs: { [key: string]: string };

    /**
     * Key-value pairs of labels for the box. Labels are used to add custom metadata to
     * help identify, categorize, and manage boxes. Common use cases include project
     * names, environments, teams, applications, or any other organizational tags that
     * help you organize and filter your boxes.
     */
    labels: { [key: string]: string };

    /**
     * Memory allocated to the box in MiB
     */
    memory: number;

    /**
     * Linux operating system configuration
     */
    os: Config.Os;

    /**
     * Storage allocated to the box in GiB.
     */
    storage: number;

    /**
     * Working directory path for the box. This directory serves as the default
     * starting point for all operations including command execution, code running, and
     * file system operations. When you execute commands or run code, they will start
     * from this directory unless explicitly specified otherwise.
     */
    workingDir: string;
  }

  export namespace Config {
    /**
     * Linux operating system configuration
     */
    export interface Os {
      /**
       * OS version string (e.g. 'ubuntu-20.04')
       */
      version: string;
    }
  }
}

/**
 * Linux box instance with full configuration and status
 */
export type BoxRetrieveResponse = LinuxBox | AndroidBox;

/**
 * Response containing paginated list of box instances
 */
export interface BoxListResponse {
  /**
   * A box instance that can be either Linux or Android type
   */
  data: Array<LinuxBox | AndroidBox>;

  /**
   * Page number
   */
  page: number;

  /**
   * Page size
   */
  pageSize: number;

  /**
   * Total number of items
   */
  total: number;
}

/**
 * Box display
 */
export interface BoxDisplayResponse {
  /**
   * Orientation of the box
   */
  orientation: 'portrait' | 'landscapeLeft' | 'portraitUpsideDown' | 'landscapeRight';

  /**
   * Resolution configuration
   */
  resolution: BoxDisplayResponse.Resolution;
}

export namespace BoxDisplayResponse {
  /**
   * Resolution configuration
   */
  export interface Resolution {
    /**
     * Height of the screen
     */
    height: number;

    /**
     * Width of the screen
     */
    width: number;
  }
}

/**
 * Result of command execution
 */
export interface BoxExecuteCommandsResponse {
  /**
   * The exit code of the command
   */
  exitCode: number;

  /**
   * The standard error output of the command
   */
  stderr: string;

  /**
   * The standard output of the command
   */
  stdout: string;
}

/**
 * Live view result
 */
export interface BoxLiveViewURLResponse {
  /**
   * Raw live view url without additional layout content, typically used for
   * embedding into your own application
   */
  rawUrl: string;

  /**
   * Live view url with Gbox interface and basic information, typically used for
   * real-time observation of box usage status
   */
  url: string;
}

/**
 * Result of code execution
 */
export interface BoxRunCodeResponse {
  /**
   * The exit code of the code
   */
  exitCode: number;

  /**
   * The stderr of the code
   */
  stderr: string;

  /**
   * The stdout of the code
   */
  stdout: string;
}

/**
 * Linux box instance with full configuration and status
 */
export type BoxStartResponse = LinuxBox | AndroidBox;

/**
 * Linux box instance with full configuration and status
 */
export type BoxStopResponse = LinuxBox | AndroidBox;

/**
 * Web terminal result
 */
export interface BoxWebTerminalURLResponse {
  /**
   * Web terminal url
   */
  url: string;
}

/**
 * Box WebSocket Url
 */
export interface BoxWebsocketURLResponse {
  /**
   * WebSocket URL for executing shell commands in the box. This endpoint allows
   * real-time command execution with streaming output, supporting interactive
   * terminal sessions and long-running processes.
   */
  command: string;

  /**
   * WebSocket URL for running code snippets in the box environment. This endpoint
   * enables execution of code in various programming languages with real-time output
   * streaming, perfect for interactive coding sessions and script execution.
   */
  runCode: string;
}

export interface BoxListParams {
  /**
   * Filter boxes by their device type (virtual, physical)
   */
  deviceType?: string;

  /**
   * Filter boxes by their labels. Labels are key-value pairs that help identify and
   * categorize boxes. Use this to filter boxes that match specific label criteria.
   * For example, you can filter by project, environment, team, or any custom labels
   * you've added to your boxes.
   */
  labels?: unknown;

  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  pageSize?: number;

  /**
   * Filter boxes by their current status (pending, running, stopped, error,
   * terminated, all). Must be an array of statuses. Use 'all' to get boxes with any
   * status.
   */
  status?: Array<'all' | 'pending' | 'running' | 'error' | 'terminated'>;

  /**
   * Filter boxes by their type (linux, android, all). Must be an array of types. Use
   * 'all' to get boxes of any type.
   */
  type?: Array<'all' | 'linux' | 'android'>;
}

export interface BoxCreateAndroidParams {
  /**
   * Configuration for a Android box instance
   */
  config?: BoxCreateAndroidParams.Config;

  /**
   * Timeout for waiting the box to transition from pending to running state, default
   * is 30s. If the box doesn't reach running state within this timeout, the API will
   * return HTTP status code 408. The timed-out box will be automatically deleted and
   * will not count towards your quota.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30s Maximum allowed: 5m
   */
  timeout?: string;

  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export namespace BoxCreateAndroidParams {
  /**
   * Configuration for a Android box instance
   */
  export interface Config {
    /**
     * Device type - virtual or physical Android device
     */
    deviceType?: 'virtual' | 'physical';

    /**
     * Environment variables for the box. These variables will be available in all
     * operations including command execution, code running, and other box behaviors
     */
    envs?: { [key: string]: string };

    /**
     * The box will be alive for the given duration
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 60m
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box. Labels are used to add custom metadata to
     * help identify, categorize, and manage boxes. Common use cases include project
     * names, environments, teams, applications, or any other organizational tags that
     * help you organize and filter your boxes.
     */
    labels?: { [key: string]: string };
  }
}

export interface BoxCreateLinuxParams {
  /**
   * Configuration for a Linux box instance
   */
  config?: BoxCreateLinuxParams.Config;

  /**
   * Timeout for waiting the box to transition from pending to running state, default
   * is 30s. If the box doesn't reach running state within this timeout, the API will
   * return HTTP status code 408. The timed-out box will be automatically deleted and
   * will not count towards your quota.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30s Maximum allowed: 5m
   */
  timeout?: string;

  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export namespace BoxCreateLinuxParams {
  /**
   * Configuration for a Linux box instance
   */
  export interface Config {
    /**
     * Environment variables for the box. These variables will be available in all
     * operations including command execution, code running, and other box behaviors
     */
    envs?: { [key: string]: string };

    /**
     * The box will be alive for the given duration
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 60m
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box. Labels are used to add custom metadata to
     * help identify, categorize, and manage boxes. Common use cases include project
     * names, environments, teams, applications, or any other organizational tags that
     * help you organize and filter your boxes.
     */
    labels?: { [key: string]: string };
  }
}

export interface BoxExecuteCommandsParams {
  /**
   * The command to run. Can be a single string or an array of strings
   */
  commands: string | Array<string>;

  /**
   * The environment variables to run the command
   */
  envs?: unknown;

  /**
   * The timeout of the command. If the command times out, the exit code will be 124.
   * For example: 'timeout 5s sleep 10s' will result in exit code 124.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30s
   */
  timeout?: string;

  /**
   * The working directory of the command. It not provided, the command will be run
   * in the `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface BoxLiveViewURLParams {
  /**
   * The live view will be alive for the given duration
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 180m
   */
  expiresIn?: string;
}

export interface BoxRunCodeParams {
  /**
   * The code to run
   */
  code: string;

  /**
   * The arguments to run the code. For example, if you want to run "python index.py
   * --help", you should pass ["--help"] as arguments.
   */
  argv?: Array<string>;

  /**
   * The environment variables to run the code
   */
  envs?: unknown;

  /**
   * The language of the code.
   */
  language?: 'bash' | 'python' | 'typescript';

  /**
   * The timeout of the code execution. If the code execution times out, the exit
   * code will be 124.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30s
   */
  timeout?: string;

  /**
   * The working directory of the code. It not provided, the code will be run in the
   * `box.config.workingDir` directory.
   */
  workingDir?: string;
}

export interface BoxStartParams {
  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export interface BoxStopParams {
  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export interface BoxTerminateParams {
  /**
   * Wait for the box operation to be completed, default is true
   */
  wait?: boolean;
}

export interface BoxWebTerminalURLParams {
  /**
   * The web terminal will be alive for the given duration
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 180m
   */
  expiresIn?: string;
}

Boxes.Storage = Storage;
Boxes.Actions = Actions;
Boxes.Proxy = Proxy;
Boxes.Media = Media;
Boxes.Fs = Fs;
Boxes.Browser = Browser;
Boxes.Android = Android;

export declare namespace Boxes {
  export {
    type AndroidBox as AndroidBox,
    type CreateAndroidBox as CreateAndroidBox,
    type CreateLinuxBox as CreateLinuxBox,
    type LinuxBox as LinuxBox,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxDisplayResponse as BoxDisplayResponse,
    type BoxExecuteCommandsResponse as BoxExecuteCommandsResponse,
    type BoxLiveViewURLResponse as BoxLiveViewURLResponse,
    type BoxRunCodeResponse as BoxRunCodeResponse,
    type BoxStartResponse as BoxStartResponse,
    type BoxStopResponse as BoxStopResponse,
    type BoxWebTerminalURLResponse as BoxWebTerminalURLResponse,
    type BoxWebsocketURLResponse as BoxWebsocketURLResponse,
    type BoxListParams as BoxListParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxLiveViewURLParams as BoxLiveViewURLParams,
    type BoxRunCodeParams as BoxRunCodeParams,
    type BoxStartParams as BoxStartParams,
    type BoxStopParams as BoxStopParams,
    type BoxTerminateParams as BoxTerminateParams,
    type BoxWebTerminalURLParams as BoxWebTerminalURLParams,
  };

  export {
    Storage as Storage,
    type StoragePresignedURLResponse as StoragePresignedURLResponse,
    type StoragePresignedURLParams as StoragePresignedURLParams,
  };

  export {
    Actions as Actions,
    type ActionAIResponse as ActionAIResponse,
    type ActionClickResponse as ActionClickResponse,
    type ActionDragResponse as ActionDragResponse,
    type ActionExtractResponse as ActionExtractResponse,
    type ActionMoveResponse as ActionMoveResponse,
    type ActionPressButtonResponse as ActionPressButtonResponse,
    type ActionPressKeyResponse as ActionPressKeyResponse,
    type ActionScreenLayoutResponse as ActionScreenLayoutResponse,
    type ActionScreenRotationResponse as ActionScreenRotationResponse,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionScrollResponse as ActionScrollResponse,
    type ActionSwipeResponse as ActionSwipeResponse,
    type ActionTouchResponse as ActionTouchResponse,
    type ActionTypeResponse as ActionTypeResponse,
    type ActionAIParams as ActionAIParams,
    type ActionClickParams as ActionClickParams,
    type ActionDragParams as ActionDragParams,
    type ActionExtractParams as ActionExtractParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionPressButtonParams as ActionPressButtonParams,
    type ActionPressKeyParams as ActionPressKeyParams,
    type ActionScreenRotationParams as ActionScreenRotationParams,
    type ActionScreenshotParams as ActionScreenshotParams,
    type ActionScrollParams as ActionScrollParams,
    type ActionSwipeParams as ActionSwipeParams,
    type ActionTouchParams as ActionTouchParams,
    type ActionTypeParams as ActionTypeParams,
  };

  export { Proxy as Proxy, type ProxySetParams as ProxySetParams };

  export {
    Media as Media,
    type MediaCreateAlbumResponse as MediaCreateAlbumResponse,
    type MediaDownloadMediaResponse as MediaDownloadMediaResponse,
    type MediaGetAlbumDetailResponse as MediaGetAlbumDetailResponse,
    type MediaListAlbumsResponse as MediaListAlbumsResponse,
    type MediaUpdateAlbumResponse as MediaUpdateAlbumResponse,
    type MediaCreateAlbumParams as MediaCreateAlbumParams,
    type MediaDeleteAlbumParams as MediaDeleteAlbumParams,
    type MediaDeleteMediaParams as MediaDeleteMediaParams,
    type MediaDownloadMediaParams as MediaDownloadMediaParams,
    type MediaGetAlbumDetailParams as MediaGetAlbumDetailParams,
    type MediaUpdateAlbumParams as MediaUpdateAlbumParams,
  };

  export {
    Fs as Fs,
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

  export {
    Browser as Browser,
    type BrowserCdpURLResponse as BrowserCdpURLResponse,
    type BrowserCloseTabResponse as BrowserCloseTabResponse,
    type BrowserGetTabsResponse as BrowserGetTabsResponse,
    type BrowserOpenTabResponse as BrowserOpenTabResponse,
    type BrowserSwitchTabResponse as BrowserSwitchTabResponse,
    type BrowserUpdateTabResponse as BrowserUpdateTabResponse,
    type BrowserCdpURLParams as BrowserCdpURLParams,
    type BrowserCloseTabParams as BrowserCloseTabParams,
    type BrowserOpenTabParams as BrowserOpenTabParams,
    type BrowserSwitchTabParams as BrowserSwitchTabParams,
    type BrowserUpdateTabParams as BrowserUpdateTabParams,
  };

  export {
    Android as Android,
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
