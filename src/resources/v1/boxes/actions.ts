// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.click(
   *   'id',
   *   { type: {}, x: 100, y: 100 },
   * );
   * ```
   */
  click(id: string, body: ActionClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/click`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.drag(
   *   'id',
   *   {
   *     path: [
   *       { x: 100, y: 100 },
   *       { x: 200, y: 200 },
   *     ],
   *     type: {},
   *   },
   * );
   * ```
   */
  drag(id: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/drag`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.move(
   *   'id',
   *   { type: {}, x: 200, y: 300 },
   * );
   * ```
   */
  move(id: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/move`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.press(
   *   'id',
   *   { keys: ['Enter'], type: {} },
   * );
   * ```
   */
  press(id: string, body: ActionPressParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/press`, { body, ...options });
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
   * const actionResult = await client.v1.boxes.actions.scroll(
   *   'id',
   *   { scrollX: 0, scrollY: 100, type: {}, x: 100, y: 100 },
   * );
   * ```
   */
  scroll(id: string, body: ActionScrollParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/scroll`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.touch(
   *   'id',
   *   { points: [{ start: { x: 0, y: 0 } }], type: {} },
   * );
   * ```
   */
  touch(id: string, body: ActionTouchParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/touch`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.type(
   *   'id',
   *   { text: 'Hello World', type: {} },
   * );
   * ```
   */
  type(id: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/api/v1/boxes/${id}/actions/type`, { body, ...options });
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

export interface ActionScreenshotResponse {
  /**
   * URL of the screenshot
   */
  uri: string;
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

export interface ActionPressParams {
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
}
