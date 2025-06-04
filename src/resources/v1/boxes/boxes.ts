// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionClickParams,
  ActionDragParams,
  ActionMoveParams,
  ActionPressParams,
  ActionResult,
  ActionScreenshotParams,
  ActionScreenshotResponse,
  ActionScrollParams,
  ActionTouchParams,
  ActionTypeParams,
  Actions,
} from './actions';
import * as BrowserAPI from './browser';
import { Browser as BrowserAPIBrowser, BrowserCdpURLResponse, BrowserConnectURLResponse } from './browser';
import * as FsAPI from './fs';
import {
  FListParams,
  FListResponse,
  FReadParams,
  FReadResponse,
  FWriteParams,
  FWriteResponse,
  Fs,
} from './fs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Boxes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  fs: FsAPI.Fs = new FsAPI.Fs(this._client);
  browser: BrowserAPI.Browser = new BrowserAPI.Browser(this._client);

  /**
   * Create box
   *
   * @example
   * ```ts
   * const box = await client.v1.boxes.create({ type: 'linux' });
   * ```
   */
  create(body: BoxCreateParams, options?: RequestOptions): APIPromise<BoxCreateResponse> {
    return this._client.post('/boxes', { body, ...options });
  }

  /**
   * Get box detail
   *
   * @example
   * ```ts
   * const box = await client.v1.boxes.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/boxes/${id}`, options);
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
   * Delete box
   *
   * @example
   * ```ts
   * await client.v1.boxes.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/boxes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create android box
   *
   * @example
   * ```ts
   * const androidBox = await client.v1.boxes.createAndroid({
   *   type: 'android',
   * });
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
   * const linuxBox = await client.v1.boxes.createLinux({
   *   type: 'linux',
   * });
   * ```
   */
  createLinux(body: BoxCreateLinuxParams, options?: RequestOptions): APIPromise<LinuxBox> {
    return this._client.post('/boxes/linux', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.executeCommands(
   *   'id',
   *   { commands: ['ls', '-l'] },
   * );
   * ```
   */
  executeCommands(
    id: string,
    body: BoxExecuteCommandsParams,
    options?: RequestOptions,
  ): APIPromise<BoxExecuteCommandsResponse> {
    return this._client.post(path`/boxes/${id}/commands`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.runCode('id', {
   *   code: 'print("Hello, World!")',
   * });
   * ```
   */
  runCode(id: string, body: BoxRunCodeParams, options?: RequestOptions): APIPromise<BoxRunCodeResponse> {
    return this._client.post(path`/boxes/${id}/run-code`, { body, ...options });
  }

  /**
   * Start box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.start('id');
   * ```
   */
  start(id: string, options?: RequestOptions): APIPromise<BoxStartResponse> {
    return this._client.post(path`/boxes/${id}/start`, options);
  }

  /**
   * Stop box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.stop('id');
   * ```
   */
  stop(id: string, options?: RequestOptions): APIPromise<BoxStopResponse> {
    return this._client.post(path`/boxes/${id}/stop`, options);
  }
}

export interface AndroidBox {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Configuration for an Android box instance
   */
  config: AndroidBox.Config;

  /**
   * Creation timestamp of the box
   */
  createdAt: string;

  /**
   * Expiration timestamp of the box
   */
  expiresAt: string;

  /**
   * The current status of a box instance
   */
  status: 'pending' | 'running' | 'stopped' | 'error';

  /**
   * Box type is Android
   */
  type: 'android';

  /**
   * Last update timestamp of the box
   */
  updatedAt: string;
}

export namespace AndroidBox {
  /**
   * Configuration for an Android box instance
   */
  export interface Config {
    /**
     * Browser configuration
     */
    browser: Config.Browser;

    /**
     * CPU cores allocated to the box
     */
    cpu: number;

    /**
     * Environment variables for the box
     */
    envs: unknown;

    /**
     * Key-value pairs of labels for the box
     */
    labels: unknown;

    /**
     * Memory allocated to the box in MB
     */
    memory: number;

    /**
     * Android operating system configuration
     */
    os: Config.Os;

    /**
     * Resolution of the box
     */
    resolution: Config.Resolution;

    /**
     * Storage allocated to the box in GB
     */
    storage: number;

    /**
     * Working directory path for the box
     */
    workingDir: string;
  }

  export namespace Config {
    /**
     * Browser configuration
     */
    export interface Browser {
      /**
       * Supported browser types for Android boxes
       */
      type: 'Chrome for Android' | 'UC Browser for Android';

      /**
       * Browser version string (e.g. '136')
       */
      version: string;
    }

    /**
     * Android operating system configuration
     */
    export interface Os {
      /**
       * Supported Android versions
       */
      version: '12' | '13';
    }

    /**
     * Resolution of the box
     */
    export interface Resolution {
      /**
       * Height of the box
       */
      height: number;

      /**
       * Width of the box
       */
      width: number;
    }
  }
}

export interface CreateAndroidBox {
  /**
   * Box type is Android
   */
  type: 'android';

  /**
   * Configuration for an Android box instance
   */
  config?: CreateBoxConfig;
}

export interface CreateBoxConfig {
  /**
   * Environment variables for the box
   */
  envs?: unknown;

  /**
   * The box will be alive for the given duration (e.g. '10m')
   */
  expiresIn?: string;

  /**
   * Key-value pairs of labels for the box
   */
  labels?: unknown;
}

export interface CreateLinuxBox {
  /**
   * Box type is Linux
   */
  type: 'linux';

  /**
   * Configuration for a Linux box instance
   */
  config?: CreateBoxConfig;
}

export interface LinuxBox {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Configuration for a Linux box instance
   */
  config: LinuxBox.Config;

  /**
   * Creation timestamp of the box
   */
  createdAt: string;

  /**
   * Expiration timestamp of the box
   */
  expiresAt: string;

  /**
   * The current status of a box instance
   */
  status: 'pending' | 'running' | 'stopped' | 'error';

  /**
   * Box type is Linux
   */
  type: 'linux';

  /**
   * Last update timestamp of the box
   */
  updatedAt: string;
}

export namespace LinuxBox {
  /**
   * Configuration for a Linux box instance
   */
  export interface Config {
    /**
     * Browser configuration
     */
    browser: Config.Browser;

    /**
     * CPU cores allocated to the box
     */
    cpu: number;

    /**
     * Environment variables for the box
     */
    envs: unknown;

    /**
     * Key-value pairs of labels for the box
     */
    labels: unknown;

    /**
     * Memory allocated to the box in MB
     */
    memory: number;

    /**
     * Operating system configuration
     */
    os: Config.Os;

    /**
     * Resolution of the box
     */
    resolution: Config.Resolution;

    /**
     * Storage allocated to the box in GB.
     */
    storage: number;

    /**
     * Working directory path for the box
     */
    workingDir: string;
  }

  export namespace Config {
    /**
     * Browser configuration
     */
    export interface Browser {
      /**
       * Supported browser types for Linux boxes
       */
      type: 'chromium' | 'firefox' | 'webkit';

      /**
       * Browser version string (e.g. '12')
       */
      version: string;
    }

    /**
     * Operating system configuration
     */
    export interface Os {
      /**
       * OS version string (e.g. 'ubuntu-20.04')
       */
      version: string;
    }

    /**
     * Resolution of the box
     */
    export interface Resolution {
      /**
       * Height of the box
       */
      height: number;

      /**
       * Width of the box
       */
      width: number;
    }
  }
}

export type BoxCreateResponse = LinuxBox | AndroidBox;

export type BoxRetrieveResponse = LinuxBox | AndroidBox;

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

export type BoxStartResponse = LinuxBox | AndroidBox;

export type BoxStopResponse = LinuxBox | AndroidBox;

export type BoxCreateParams = BoxCreateParams.CreateLinuxBox | BoxCreateParams.CreateAndroidBox;

export declare namespace BoxCreateParams {
  export interface CreateLinuxBox {
    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Configuration for a Linux box instance
     */
    config?: CreateBoxConfig;
  }

  export interface CreateAndroidBox {
    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Configuration for an Android box instance
     */
    config?: CreateBoxConfig;
  }
}

export interface BoxListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  pageSize?: number;
}

export interface BoxCreateAndroidParams {
  /**
   * Box type is Android
   */
  type: 'android';

  /**
   * Configuration for an Android box instance
   */
  config?: CreateBoxConfig;
}

export interface BoxCreateLinuxParams {
  /**
   * Box type is Linux
   */
  type: 'linux';

  /**
   * Configuration for a Linux box instance
   */
  config?: CreateBoxConfig;
}

export interface BoxExecuteCommandsParams {
  /**
   * The command to run
   */
  commands: Array<string>;

  /**
   * The environment variables to run the command
   */
  envs?: unknown;

  /**
   * The timeout of the command. e.g. '30s'
   */
  timeout?: string;

  /**
   * The working directory of the command
   */
  workingDir?: string;
}

export interface BoxRunCodeParams {
  /**
   * The code to run
   */
  code: string;

  /**
   * The arguments to run the code. e.g. ["-h"]
   */
  argv?: Array<string>;

  /**
   * The environment variables to run the code
   */
  envs?: unknown;

  /**
   * The language of the code.
   */
  language?: 'bash' | 'python3' | 'typescript';

  /**
   * The timeout of the code. e.g. "30s"
   */
  timeout?: string;

  /**
   * The working directory of the code.
   */
  workingDir?: string;
}

Boxes.Actions = Actions;
Boxes.Fs = Fs;
Boxes.Browser = BrowserAPIBrowser;

export declare namespace Boxes {
  export {
    type AndroidBox as AndroidBox,
    type CreateAndroidBox as CreateAndroidBox,
    type CreateBoxConfig as CreateBoxConfig,
    type CreateLinuxBox as CreateLinuxBox,
    type LinuxBox as LinuxBox,
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxExecuteCommandsResponse as BoxExecuteCommandsResponse,
    type BoxRunCodeResponse as BoxRunCodeResponse,
    type BoxStartResponse as BoxStartResponse,
    type BoxStopResponse as BoxStopResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxRunCodeParams as BoxRunCodeParams,
  };

  export {
    Actions as Actions,
    type ActionResult as ActionResult,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionClickParams as ActionClickParams,
    type ActionDragParams as ActionDragParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionPressParams as ActionPressParams,
    type ActionScreenshotParams as ActionScreenshotParams,
    type ActionScrollParams as ActionScrollParams,
    type ActionTouchParams as ActionTouchParams,
    type ActionTypeParams as ActionTypeParams,
  };

  export {
    Fs as Fs,
    type FListResponse as FListResponse,
    type FReadResponse as FReadResponse,
    type FWriteResponse as FWriteResponse,
    type FListParams as FListParams,
    type FReadParams as FReadParams,
    type FWriteParams as FWriteParams,
  };

  export {
    BrowserAPIBrowser as Browser,
    type BrowserCdpURLResponse as BrowserCdpURLResponse,
    type BrowserConnectURLResponse as BrowserConnectURLResponse,
  };
}
