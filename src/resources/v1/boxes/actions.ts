// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Click
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.click(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 100, y: 100 },
   * );
   * ```
   */
  click(id: string, body: ActionClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/click`, { body, ...options });
  }

  /**
   * Drag
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.drag(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     path: [
   *       { x: 100, y: 100 },
   *       { x: 200, y: 200 },
   *     ],
   *   },
   * );
   * ```
   */
  drag(id: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/drag`, { body, ...options });
  }

  /**
   * Move to position
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.move(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 200, y: 300 },
   * );
   * ```
   */
  move(id: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/move`, { body, ...options });
  }

  /**
   * Press key
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.press(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { keys: ['Enter'] },
   * );
   * ```
   */
  press(id: string, body: ActionPressParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/press`, { body, ...options });
  }

  /**
   * Take screenshot
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.screenshot(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  screenshot(
    id: string,
    body: ActionScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<ActionScreenshotResponse> {
    return this._client.post(path`/boxes/${id}/actions/screenshot`, { body, ...options });
  }

  /**
   * Scroll
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.scroll(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { scrollX: 0, scrollY: 100, x: 100, y: 100 },
   * );
   * ```
   */
  scroll(id: string, body: ActionScrollParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/scroll`, { body, ...options });
  }

  /**
   * Touch
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.touch(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { points: [{ start: { x: 100, y: 150 } }] },
   * );
   * ```
   */
  touch(id: string, body: ActionTouchParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/touch`, { body, ...options });
  }

  /**
   * Type text
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.type(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { text: 'Hello World' },
   * );
   * ```
   */
  type(id: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${id}/actions/type`, { body, ...options });
  }
}

/**
 * Result of an interface action execution
 */
export interface ActionResult {
  /**
   * Complete screenshot result with highlight, before and after images
   */
  screenshot: ActionResult.Screenshot;
}

export namespace ActionResult {
  /**
   * Complete screenshot result with highlight, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before: Screenshot.Before;

    /**
     * Screenshot with action highlight
     */
    highlight: Screenshot.Highlight;
  }

  export namespace Screenshot {
    /**
     * Screenshot taken after action execution
     */
    export interface After {
      /**
       * URI of the screenshot after the action
       */
      uri: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;
    }

    /**
     * Screenshot with action highlight
     */
    export interface Highlight {
      /**
       * URI of the screenshot before the action with highlight
       */
      uri: string;
    }
  }
}

/**
 * Result of screenshot capture action
 */
export interface ActionScreenshotResponse {
  /**
   * URL of the screenshot
   */
  uri: string;
}

export interface ActionClickParams {
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
   * Time interval between points (e.g. "50ms")
   */
  duration?: string;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace ActionDragParams {
  /**
   * Single point in a drag path
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

export interface ActionMoveParams {
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
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export interface ActionScreenshotParams {
  /**
   * Clipping region for screenshot capture
   */
  clip?: ActionScreenshotParams.Clip;

  /**
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace ActionScreenshotParams {
  /**
   * Clipping region for screenshot capture
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
   * Type of the URI
   */
  outputFormat?: 'base64' | 'storageKey';
}

export namespace ActionTouchParams {
  /**
   * Touch point configuration with start position and actions
   */
  export interface Point {
    /**
     * Initial touch point position
     */
    start: Point.Start;

    /**
     * Sequence of actions to perform after initial touch
     */
    actions?: Array<unknown>;
  }

  export namespace Point {
    /**
     * Initial touch point position
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
