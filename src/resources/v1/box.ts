// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Box extends APIResource {
  /**
   * @example
   * ```ts
   * const box = await client.v1.box.create({ type: 'linux' });
   * ```
   */
  create(body: BoxCreateParams, options?: RequestOptions): APIPromise<BoxCreateResponse> {
    return this._client.post('/api/v1/box', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const box = await client.v1.box.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/api/v1/box/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const boxes = await client.v1.box.list({
   *   page: 0,
   *   pageSize: 0,
   * });
   * ```
   */
  list(query: BoxListParams, options?: RequestOptions): APIPromise<BoxListResponse> {
    return this._client.get('/api/v1/box', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const linuxBox = await client.v1.box.click('id', {
   *   type: {},
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  click(id: string, body: BoxClickParams, options?: RequestOptions): APIPromise<LinuxBox> {
    return this._client.post(path`/api/v1/box/${id}/click`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const androidBox = await client.v1.box.createAndroid({
   *   type: 'linux',
   * });
   * ```
   */
  createAndroid(body: BoxCreateAndroidParams, options?: RequestOptions): APIPromise<AndroidBox> {
    return this._client.post('/api/v1/box/android', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const linuxBox = await client.v1.box.createLinux({
   *   type: 'linux',
   * });
   * ```
   */
  createLinux(body: BoxCreateLinuxParams, options?: RequestOptions): APIPromise<LinuxBox> {
    return this._client.post('/api/v1/box/linux', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.box.drag('id', {
   *   path: [
   *     { x: 100, y: 100 },
   *     { x: 200, y: 200 },
   *   ],
   *   type: {},
   * });
   * ```
   */
  drag(id: string, body: BoxDragParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/box/${id}/drag`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.box.executeCommands('id', {
   *   commands: ['ls', '-l'],
   * });
   * ```
   */
  executeCommands(
    id: string,
    body: BoxExecuteCommandsParams,
    options?: RequestOptions,
  ): APIPromise<BoxExecuteCommandsResponse> {
    return this._client.post(path`/api/v1/box/${id}/commands`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.box.keypress('id', {
   *   keys: ['Enter'],
   *   type: {},
   * });
   * ```
   */
  keypress(id: string, body: BoxKeypressParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/box/${id}/keypress`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.box.move('id', {
   *   type: {},
   *   x: 200,
   *   y: 300,
   * });
   * ```
   */
  move(id: string, body: BoxMoveParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/box/${id}/move`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.box.runCode('id', {
   *   code: 'print("Hello, World!")',
   *   type: 'bash',
   * });
   * ```
   */
  runCode(id: string, body: BoxRunCodeParams, options?: RequestOptions): APIPromise<BoxRunCodeResponse> {
    return this._client.post(path`/api/v1/box/${id}/run-code`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.box.screenshot('id', {
   *   type: 'png',
   * });
   * ```
   */
  screenshot(
    id: string,
    body: BoxScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<BoxScreenshotResponse> {
    return this._client.post(path`/api/v1/box/${id}/screenshot`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.box.scroll('id', {
   *   scrollX: 0,
   *   scrollY: 100,
   *   type: {},
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  scroll(id: string, body: BoxScrollParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/box/${id}/scroll`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.box.touch('id', {
   *   points: [{ start: { x: 0, y: 0 } }],
   *   type: {},
   * });
   * ```
   */
  touch(id: string, body: BoxTouchParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/box/${id}/touch`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.box.type('id', {
   *   text: 'Hello World',
   *   type: {},
   * });
   * ```
   */
  type(id: string, body: BoxTypeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/box/${id}/type`, { body, ...options });
  }
}

export interface ActionResult {
  /**
   * screenshot
   */
  screenshot: ActionResult.Screenshot;
}

export namespace ActionResult {
  /**
   * screenshot
   */
  export interface Screenshot {
    /**
     * URI of the screenshot after the action
     */
    after: Screenshot.After;

    /**
     * URI of the screenshot before the action
     */
    before: Screenshot.Before;

    /**
     * URI of the screenshot before the action with highlight
     */
    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    /**
     * URI of the screenshot after the action
     */
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    /**
     * URI of the screenshot before the action
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    /**
     * URI of the screenshot before the action with highlight
     */
    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
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
  type: 'linux' | 'android';

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
  }
}

export interface CreateAndroidBox {
  /**
   * Box type is Android
   */
  type: 'linux' | 'android';

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
  type: 'linux' | 'android';

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
  type: 'linux' | 'android';

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

export interface BoxScreenshotResponse {
  /**
   * URL of the screenshot
   */
  uri: string;
}

export type BoxCreateParams = BoxCreateParams.CreateLinuxBox | BoxCreateParams.CreateAndroidBox;

export declare namespace BoxCreateParams {
  export interface CreateLinuxBox {
    /**
     * Box type is Linux
     */
    type: 'linux' | 'android';

    /**
     * Configuration for a Linux box instance
     */
    config?: CreateBoxConfig;
  }

  export interface CreateAndroidBox {
    /**
     * Box type is Android
     */
    type: 'linux' | 'android';

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
  page: number;

  /**
   * Page size
   */
  pageSize: number;
}

export interface BoxClickParams {
  /**
   * Action type for mouse click
   */
  type: unknown;

  /**
   * X coordinate of the click
   */
  x: number;

  /**
   * Y coordinate of the click
   */
  y: number;

  /**
   * Mouse button to click
   */
  button?: 'left' | 'right' | 'middle';

  /**
   * Whether to perform a double click
   */
  double?: boolean;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export interface BoxCreateAndroidParams {
  /**
   * Box type is Android
   */
  type: 'linux' | 'android';

  /**
   * Configuration for an Android box instance
   */
  config?: CreateBoxConfig;
}

export interface BoxCreateLinuxParams {
  /**
   * Box type is Linux
   */
  type: 'linux' | 'android';

  /**
   * Configuration for a Linux box instance
   */
  config?: CreateBoxConfig;
}

export interface BoxDragParams {
  /**
   * Path of the drag action as a series of coordinates
   */
  path: Array<BoxDragParams.Path>;

  /**
   * Action type for drag interaction
   */
  type: unknown;

  /**
   * Time interval between points (e.g. "50ms")
   */
  duration?: string;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace BoxDragParams {
  export interface Path {
    /**
     * X coordinate of a point in the drag path
     */
    x: number;

    /**
     * Y coordinate of a point in the drag path
     */
    y: number;
  }
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

export interface BoxKeypressParams {
  /**
   * Array of keys to press
   */
  keys: Array<string>;

  /**
   * Action type for keyboard key press
   */
  type: unknown;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export interface BoxMoveParams {
  /**
   * Action type for cursor movement
   */
  type: unknown;

  /**
   * X coordinate to move to
   */
  x: number;

  /**
   * Y coordinate to move to
   */
  y: number;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export interface BoxRunCodeParams {
  /**
   * The code to run
   */
  code: string;

  /**
   * The type of the code.
   */
  type: 'bash' | 'python3' | 'typescript';

  /**
   * The arguments to run the code. e.g. ["-h"]
   */
  argv?: Array<string>;

  /**
   * The environment variables to run the code
   */
  envs?: unknown;

  /**
   * The timeout of the code. e.g. "30s"
   */
  timeout?: string;

  /**
   * The working directory of the code.
   */
  workingDir?: string;
}

export interface BoxScreenshotParams {
  /**
   * clip of the screenshot
   */
  clip?: BoxScreenshotParams.Clip;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Action type for screenshot
   */
  type?: 'png' | 'jpeg';
}

export namespace BoxScreenshotParams {
  /**
   * clip of the screenshot
   */
  export interface Clip {
    /**
     * Height of the clip
     */
    height: number;

    /**
     * Width of the clip
     */
    width: number;

    /**
     * X coordinate of the clip
     */
    x: number;

    /**
     * Y coordinate of the clip
     */
    y: number;
  }
}

export interface BoxScrollParams {
  /**
   * Horizontal scroll amount
   */
  scrollX: number;

  /**
   * Vertical scroll amount
   */
  scrollY: number;

  /**
   * Action type for scroll interaction
   */
  type: unknown;

  /**
   * X coordinate of the scroll position
   */
  x: number;

  /**
   * Y coordinate of the scroll position
   */
  y: number;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export interface BoxTouchParams {
  /**
   * Array of touch points and their actions
   */
  points: Array<BoxTouchParams.Point>;

  /**
   * Action type for touch interaction
   */
  type: unknown;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace BoxTouchParams {
  export interface Point {
    /**
     * Starting position for touch
     */
    start: Point.Start;

    /**
     * Sequence of actions to perform after initial touch
     */
    actions?: Array<unknown>;
  }

  export namespace Point {
    /**
     * Starting position for touch
     */
    export interface Start {
      /**
       * Starting X coordinate
       */
      x: number;

      /**
       * Starting Y coordinate
       */
      y: number;
    }
  }
}

export interface BoxTypeParams {
  /**
   * Text to type
   */
  text: string;

  /**
   * Action type for typing text
   */
  type: unknown;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export declare namespace Box {
  export {
    type ActionResult as ActionResult,
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
    type BoxScreenshotResponse as BoxScreenshotResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
    type BoxClickParams as BoxClickParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxDragParams as BoxDragParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxKeypressParams as BoxKeypressParams,
    type BoxMoveParams as BoxMoveParams,
    type BoxRunCodeParams as BoxRunCodeParams,
    type BoxScreenshotParams as BoxScreenshotParams,
    type BoxScrollParams as BoxScrollParams,
    type BoxTouchParams as BoxTouchParams,
    type BoxTypeParams as BoxTypeParams,
  };
}
