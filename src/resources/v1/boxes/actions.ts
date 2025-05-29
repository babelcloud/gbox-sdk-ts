// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.click('id', {
   *   type: {},
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  click(id: string, body: ActionClickParams, options?: RequestOptions): APIPromise<ActionClickResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/click`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.drag('id', {
   *   path: [
   *     { x: 100, y: 100 },
   *     { x: 200, y: 200 },
   *   ],
   *   type: {},
   * });
   * ```
   */
  drag(id: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionDragResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/drag`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.keypress(
   *   'id',
   *   { keys: ['Enter'], type: {} },
   * );
   * ```
   */
  keypress(
    id: string,
    body: ActionKeypressParams,
    options?: RequestOptions,
  ): APIPromise<ActionKeypressResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/keypress`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.move('id', {
   *   type: {},
   *   x: 200,
   *   y: 300,
   * });
   * ```
   */
  move(id: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<ActionMoveResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/move`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.screenshot(
   *   'id',
   *   { type: 'png' },
   * );
   * ```
   */
  screenshot(
    id: string,
    body: ActionScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<ActionScreenshotResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/screenshot`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.scroll(
   *   'id',
   *   { scrollX: 0, scrollY: 100, type: {}, x: 100, y: 100 },
   * );
   * ```
   */
  scroll(id: string, body: ActionScrollParams, options?: RequestOptions): APIPromise<ActionScrollResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/scroll`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.touch('id', {
   *   points: [{ start: { x: 0, y: 0 } }],
   *   type: {},
   * });
   * ```
   */
  touch(id: string, body: ActionTouchParams, options?: RequestOptions): APIPromise<ActionTouchResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/touch`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.type('id', {
   *   text: 'Hello World',
   *   type: {},
   * });
   * ```
   */
  type(id: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<ActionTypeResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/type`, { body, ...options });
  }
}

export interface ActionClickResponse {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Configuration for a Linux box instance
   */
  config: ActionClickResponse.Config;

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

export namespace ActionClickResponse {
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

export interface ActionDragResponse {
  /**
   * screenshot
   */
  screenshot: ActionDragResponse.Screenshot;
}

export namespace ActionDragResponse {
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

export interface ActionKeypressResponse {
  /**
   * screenshot
   */
  screenshot: ActionKeypressResponse.Screenshot;
}

export namespace ActionKeypressResponse {
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

export interface ActionMoveResponse {
  /**
   * screenshot
   */
  screenshot: ActionMoveResponse.Screenshot;
}

export namespace ActionMoveResponse {
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

export interface ActionScreenshotResponse {
  /**
   * URL of the screenshot
   */
  uri: string;
}

export interface ActionScrollResponse {
  /**
   * screenshot
   */
  screenshot: ActionScrollResponse.Screenshot;
}

export namespace ActionScrollResponse {
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

export interface ActionTouchResponse {
  /**
   * screenshot
   */
  screenshot: ActionTouchResponse.Screenshot;
}

export namespace ActionTouchResponse {
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

export interface ActionTypeResponse {
  /**
   * screenshot
   */
  screenshot: ActionTypeResponse.Screenshot;
}

export namespace ActionTypeResponse {
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

export interface ActionClickParams {
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

export interface ActionDragParams {
  /**
   * Path of the drag action as a series of coordinates
   */
  path: Array<ActionDragParams.Path>;

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

export namespace ActionDragParams {
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

export interface ActionKeypressParams {
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

export interface ActionMoveParams {
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

export interface ActionScreenshotParams {
  /**
   * clip of the screenshot
   */
  clip?: ActionScreenshotParams.Clip;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Action type for screenshot
   */
  type?: 'png' | 'jpeg';
}

export namespace ActionScreenshotParams {
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

export interface ActionScrollParams {
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

export interface ActionTouchParams {
  /**
   * Array of touch points and their actions
   */
  points: Array<ActionTouchParams.Point>;

  /**
   * Action type for touch interaction
   */
  type: unknown;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace ActionTouchParams {
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

export interface ActionTypeParams {
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

export declare namespace Actions {
  export {
    type ActionClickResponse as ActionClickResponse,
    type ActionDragResponse as ActionDragResponse,
    type ActionKeypressResponse as ActionKeypressResponse,
    type ActionMoveResponse as ActionMoveResponse,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionScrollResponse as ActionScrollResponse,
    type ActionTouchResponse as ActionTouchResponse,
    type ActionTypeResponse as ActionTypeResponse,
    type ActionClickParams as ActionClickParams,
    type ActionDragParams as ActionDragParams,
    type ActionKeypressParams as ActionKeypressParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionScreenshotParams as ActionScreenshotParams,
    type ActionScrollParams as ActionScrollParams,
    type ActionTouchParams as ActionTouchParams,
    type ActionTypeParams as ActionTypeParams,
  };
}
