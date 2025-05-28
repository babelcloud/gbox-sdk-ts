// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Box extends APIResource {
  /**
   * @example
   * ```ts
   * const box = await client.api.v1_1.box.create({
   *   type: 'linux',
   * });
   * ```
   */
  create(body: BoxCreateParams, options?: RequestOptions): APIPromise<BoxCreateResponse> {
    return this._client.post('/api/v1.1/box', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const box = await client.api.v1_1.box.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/api/v1.1/box/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const boxes = await client.api.v1_1.box.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BoxListResponse> {
    return this._client.get('/api/v1.1/box', options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.click('id', {
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  click(id: string, body: BoxClickParams, options?: RequestOptions): APIPromise<BoxClickResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/click`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1_1.box.createAndroid();
   * ```
   */
  createAndroid(body: BoxCreateAndroidParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1.1/box/android', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1_1.box.createLinux();
   * ```
   */
  createLinux(body: BoxCreateLinuxParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1.1/box/linux', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.drag('id', {
   *   path: [{ x: 0, y: 0 }],
   * });
   * ```
   */
  drag(id: string, body: BoxDragParams, options?: RequestOptions): APIPromise<BoxDragResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/drag`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.keypress('id', {
   *   keys: ['string'],
   * });
   * ```
   */
  keypress(id: string, body: BoxKeypressParams, options?: RequestOptions): APIPromise<BoxKeypressResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/keypress`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.move('id', {
   *   x: 200,
   *   y: 300,
   * });
   * ```
   */
  move(id: string, body: BoxMoveParams, options?: RequestOptions): APIPromise<BoxMoveResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/move`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.screenshot('id');
   * ```
   */
  screenshot(
    id: string,
    body: BoxScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<BoxScreenshotResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/screenshot`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.scroll('id', {
   *   scrollX: 0,
   *   scrollY: 0,
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  scroll(id: string, body: BoxScrollParams, options?: RequestOptions): APIPromise<BoxScrollResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/scroll`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.touch('id', {
   *   points: [{ start: { x: 0, y: 0 } }],
   * });
   * ```
   */
  touch(id: string, body: BoxTouchParams, options?: RequestOptions): APIPromise<BoxTouchResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/touch`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.api.v1_1.box.type('id', {
   *   text: 'Hello World',
   * });
   * ```
   */
  type(id: string, body: BoxTypeParams, options?: RequestOptions): APIPromise<BoxTypeResponse> {
    return this._client.post(path`/api/v1.1/box/${id}/type`, { body, ...options });
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxCreateResponse = BoxCreateResponse.UnionMember0 | BoxCreateResponse.UnionMember1;

export namespace BoxCreateResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: unknown;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: unknown;

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
    updatedAt: unknown;
  }

  export namespace UnionMember0 {
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
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
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
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: unknown;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: unknown;

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
    updatedAt: unknown;
  }

  export namespace UnionMember1 {
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
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

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
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxRetrieveResponse = BoxRetrieveResponse.UnionMember0 | BoxRetrieveResponse.UnionMember1;

export namespace BoxRetrieveResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: unknown;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: unknown;

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
    updatedAt: unknown;
  }

  export namespace UnionMember0 {
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
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
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
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: unknown;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: unknown;

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
    updatedAt: unknown;
  }

  export namespace UnionMember1 {
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
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

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
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export interface BoxListResponse {
  data: Array<BoxListResponse.UnionMember0 | BoxListResponse.UnionMember1>;

  /**
   * Total number of items
   */
  total: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  pageSize?: number;
}

export namespace BoxListResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: unknown;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: unknown;

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
    updatedAt: unknown;
  }

  export namespace UnionMember0 {
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
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
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
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: unknown;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: unknown;

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
    updatedAt: unknown;
  }

  export namespace UnionMember1 {
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
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

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
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export interface BoxClickResponse {
  screenshot: BoxClickResponse.Screenshot;
}

export namespace BoxClickResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export interface BoxDragResponse {
  screenshot: BoxDragResponse.Screenshot;
}

export namespace BoxDragResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export interface BoxKeypressResponse {
  screenshot: BoxKeypressResponse.Screenshot;
}

export namespace BoxKeypressResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export interface BoxMoveResponse {
  screenshot: BoxMoveResponse.Screenshot;
}

export namespace BoxMoveResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export interface BoxScreenshotResponse {
  /**
   * URL of the screenshot
   */
  uri: string;
}

export interface BoxScrollResponse {
  screenshot: BoxScrollResponse.Screenshot;
}

export namespace BoxScrollResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export interface BoxTouchResponse {
  screenshot: BoxTouchResponse.Screenshot;
}

export namespace BoxTouchResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export interface BoxTypeResponse {
  screenshot: BoxTypeResponse.Screenshot;
}

export namespace BoxTypeResponse {
  export interface Screenshot {
    after: Screenshot.After;

    before: Screenshot.Before;

    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

export type BoxCreateParams = BoxCreateParams.Variant0 | BoxCreateParams.Variant1;

export declare namespace BoxCreateParams {
  export interface Variant0 {
    type: 'linux';

    config?: Variant0.Config;
  }

  export namespace Variant0 {
    export interface Config {
      /**
       * Environment variables for the box
       */
      envs?: Record<string, string>;

      /**
       * The box will be alive for the given duration (e.g. '10m')
       */
      expiresIn?: string;

      /**
       * Key-value pairs of labels for the box
       */
      labels?: Record<string, string>;
    }
  }

  export interface Variant1 {
    type: 'android';

    config?: Variant1.Config;
  }

  export namespace Variant1 {
    export interface Config {
      /**
       * Environment variables for the box
       */
      envs?: Record<string, string>;

      /**
       * The box will be alive for the given duration (e.g. '10m')
       */
      expiresIn?: string;

      /**
       * Key-value pairs of labels for the box
       */
      labels?: Record<string, string>;
    }
  }
}

export interface BoxClickParams {
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
  config?: BoxCreateAndroidParams.Config;
}

export namespace BoxCreateAndroidParams {
  export interface Config {
    /**
     * Environment variables for the box
     */
    envs?: Record<string, string>;

    /**
     * The box will be alive for the given duration (e.g. '10m')
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box
     */
    labels?: Record<string, string>;
  }
}

export interface BoxCreateLinuxParams {
  config?: BoxCreateLinuxParams.Config;
}

export namespace BoxCreateLinuxParams {
  export interface Config {
    /**
     * Environment variables for the box
     */
    envs?: Record<string, string>;

    /**
     * The box will be alive for the given duration (e.g. '10m')
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box
     */
    labels?: Record<string, string>;
  }
}

export interface BoxDragParams {
  /**
   * Path of the drag action as a series of coordinates
   */
  path: Array<BoxDragParams.Path>;

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
  /**
   * Point in the drag path
   */
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

export interface BoxKeypressParams {
  /**
   * Array of keys to press
   */
  keys: Array<string>;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export interface BoxMoveParams {
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

export interface BoxScreenshotParams {
  /**
   * clip of the screenshot
   */
  clip?: BoxScreenshotParams.Clip;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
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
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace BoxTouchParams {
  /**
   * Schema for a single touch point and its actions
   */
  export interface Point {
    /**
     * Starting position for touch
     */
    start: Point.Start;

    /**
     * Sequence of actions to perform after initial touch
     */
    actions?: Array<Point.UnionMember0 | Point.UnionMember1>;
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

    /**
     * Schema for touch movement actions
     */
    export interface UnionMember0 {
      /**
       * Duration of the movement (e.g. "200ms")
       */
      duration: string;

      /**
       * Action type for touch movement
       */
      type: 'move';

      /**
       * Target X coordinate
       */
      x: number;

      /**
       * Target Y coordinate
       */
      y: number;
    }

    /**
     * Schema for touch wait actions
     */
    export interface UnionMember1 {
      /**
       * Duration to wait (e.g. "500ms")
       */
      duration: string;

      /**
       * Action type for waiting
       */
      type: 'wait';
    }
  }
}

export interface BoxTypeParams {
  /**
   * Text to type
   */
  text: string;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export declare namespace Box {
  export {
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxClickResponse as BoxClickResponse,
    type BoxDragResponse as BoxDragResponse,
    type BoxKeypressResponse as BoxKeypressResponse,
    type BoxMoveResponse as BoxMoveResponse,
    type BoxScreenshotResponse as BoxScreenshotResponse,
    type BoxScrollResponse as BoxScrollResponse,
    type BoxTouchResponse as BoxTouchResponse,
    type BoxTypeResponse as BoxTypeResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxClickParams as BoxClickParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxDragParams as BoxDragParams,
    type BoxKeypressParams as BoxKeypressParams,
    type BoxMoveParams as BoxMoveParams,
    type BoxScreenshotParams as BoxScreenshotParams,
    type BoxScrollParams as BoxScrollParams,
    type BoxTouchParams as BoxTouchParams,
    type BoxTypeParams as BoxTypeParams,
  };
}
