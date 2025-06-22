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
   *   'boxId',
   *   { x: 100, y: 100 },
   * );
   * ```
   */
  click(boxID: string, body: ActionClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/click`, { body, ...options });
  }

  /**
   * Drag
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.drag(
   *   'boxId',
   *   {
   *     path: [
   *       { x: 100, y: 100 },
   *       { x: 200, y: 200 },
   *     ],
   *   },
   * );
   * ```
   */
  drag(boxID: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/drag`, { body, ...options });
  }

  /**
   * Move to position
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.move(
   *   'boxId',
   *   { x: 200, y: 300 },
   * );
   * ```
   */
  move(boxID: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/move`, { body, ...options });
  }

  /**
   * Press button on the device. like power button, volume up button, volume down
   * button, etc.
   *
   * @example
   * ```ts
   * const actionResult =
   *   await client.v1.boxes.actions.pressButton('boxId', {
   *     buttons: ['power'],
   *   });
   * ```
   */
  pressButton(
    boxID: string,
    body: ActionPressButtonParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/press-button`, { body, ...options });
  }

  /**
   * Simulates pressing a specific key by triggering the complete keyboard key event
   * chain (keydown, keypress, keyup). Use this to activate keyboard key event
   * listeners such as shortcuts or form submissions.
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.pressKey(
   *   'boxId',
   *   { keys: ['enter'] },
   * );
   * ```
   */
  pressKey(boxID: string, body: ActionPressKeyParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/press-key`, { body, ...options });
  }

  /**
   * Rotate screen
   *
   * @example
   * ```ts
   * const actionResult =
   *   await client.v1.boxes.actions.screenRotation('boxId', {
   *     angle: 90,
   *     direction: 'clockwise',
   *   });
   * ```
   */
  screenRotation(
    boxID: string,
    body: ActionScreenRotationParams,
    options?: RequestOptions,
  ): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/screen-rotation`, { body, ...options });
  }

  /**
   * Take screenshot
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.screenshot(
   *   'boxId',
   * );
   * ```
   */
  screenshot(
    boxID: string,
    body: ActionScreenshotParams,
    options?: RequestOptions,
  ): APIPromise<ActionScreenshotResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/screenshot`, { body, ...options });
  }

  /**
   * Scroll
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.scroll(
   *   'boxId',
   *   { scrollX: 0, scrollY: 100, x: 100, y: 100 },
   * );
   * ```
   */
  scroll(boxID: string, body: ActionScrollParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/scroll`, { body, ...options });
  }

  /**
   * Performs a swipe in the specified direction
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.swipe(
   *   'boxId',
   *   { direction: 'up' },
   * );
   * ```
   */
  swipe(boxID: string, body: ActionSwipeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/swipe`, { body, ...options });
  }

  /**
   * Touch
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.touch(
   *   'boxId',
   *   { points: [{ start: { x: 100, y: 150 } }] },
   * );
   * ```
   */
  touch(boxID: string, body: ActionTouchParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/touch`, { body, ...options });
  }

  /**
   * Directly inputs text content without triggering physical key events (keydown,
   * etc.), ideal for quickly filling large amounts of text when intermediate input
   * events aren't needed.
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.type(
   *   'boxId',
   *   { text: 'Hello World' },
   * );
   * ```
   */
  type(boxID: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/type`, { body, ...options });
  }
}

/**
 * Result of an UI action execution
 */
export interface ActionResult {
  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot: ActionResult.Screenshot;
}

export namespace ActionResult {
  /**
   * Complete screenshot result with operation trace, before and after images
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
     * Screenshot with action operation trace
     */
    trace: Screenshot.Trace;
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
     * Screenshot with action operation trace
     */
    export interface Trace {
      /**
       * URI of the screenshot with operation trace
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
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
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
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
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
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
}

export interface ActionPressButtonParams {
  /**
   * Button to press
   */
  buttons: Array<'power' | 'volumeUp' | 'volumeDown' | 'volumeMute' | 'home' | 'back' | 'menu' | 'appSwitch'>;

  /**
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
}

export interface ActionPressKeyParams {
  /**
   * This is an array of keyboard keys to press. Supports cross-platform
   * compatibility.
   */
  keys: Array<
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'y'
    | 'z'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'f1'
    | 'f2'
    | 'f3'
    | 'f4'
    | 'f5'
    | 'f6'
    | 'f7'
    | 'f8'
    | 'f9'
    | 'f10'
    | 'f11'
    | 'f12'
    | 'control'
    | 'alt'
    | 'shift'
    | 'meta'
    | 'win'
    | 'cmd'
    | 'option'
    | 'arrowUp'
    | 'arrowDown'
    | 'arrowLeft'
    | 'arrowRight'
    | 'home'
    | 'end'
    | 'pageUp'
    | 'pageDown'
    | 'enter'
    | 'space'
    | 'tab'
    | 'escape'
    | 'backspace'
    | 'delete'
    | 'insert'
    | 'capsLock'
    | 'numLock'
    | 'scrollLock'
    | 'pause'
    | 'printScreen'
    | ';'
    | '='
    | ','
    | '-'
    | '.'
    | '/'
    | '`'
    | '['
    | '\\'
    | ']'
    | "'"
    | 'numpad0'
    | 'numpad1'
    | 'numpad2'
    | 'numpad3'
    | 'numpad4'
    | 'numpad5'
    | 'numpad6'
    | 'numpad7'
    | 'numpad8'
    | 'numpad9'
    | 'numpadAdd'
    | 'numpadSubtract'
    | 'numpadMultiply'
    | 'numpadDivide'
    | 'numpadDecimal'
    | 'numpadEnter'
    | 'numpadEqual'
    | 'volumeUp'
    | 'volumeDown'
    | 'volumeMute'
    | 'mediaPlayPause'
    | 'mediaStop'
    | 'mediaNextTrack'
    | 'mediaPreviousTrack'
  >;

  /**
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
}

export interface ActionScreenRotationParams {
  /**
   * Rotation angle in degrees
   */
  angle: 90 | 180 | 270;

  /**
   * Rotation direction
   */
  direction: 'clockwise' | 'counter-clockwise';
}

export interface ActionScreenshotParams {
  /**
   * Clipping region for screenshot capture
   */
  clip?: ActionScreenshotParams.Clip;

  /**
   * Type of the URI. default is base64.
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
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
}

export type ActionSwipeParams = ActionSwipeParams.SwipeSimple | ActionSwipeParams.Swipe;

export declare namespace ActionSwipeParams {
  export interface SwipeSimple {
    /**
     * Direction of the swipe
     */
    direction: 'up' | 'down' | 'left' | 'right' | 'upLeft' | 'upRight' | 'downLeft' | 'downRight';

    /**
     * Distance of the swipe in pixels. If not provided, will use a default distance
     * based on screen size
     */
    distance?: number;

    /**
     * Duration of the swipe
     */
    duration?: string;

    /**
     * Type of the URI. default is base64.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * Delay after performing the action, before taking the final screenshot.
     *
     * Execution flow:
     *
     * 1. Take screenshot before action
     * 2. Perform the action
     * 3. Wait for screenshotDelay (this parameter)
     * 4. Take screenshot after action
     *
     * Example: '500ms' means wait 500ms after the action before capturing the final
     * screenshot.
     */
    screenshotDelay?: string;
  }

  export interface Swipe {
    /**
     * End point of the swipe path
     */
    end: unknown;

    /**
     * Start point of the swipe path
     */
    start: unknown;

    /**
     * Duration of the swipe
     */
    duration?: string;

    /**
     * Type of the URI. default is base64.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * Delay after performing the action, before taking the final screenshot.
     *
     * Execution flow:
     *
     * 1. Take screenshot before action
     * 2. Perform the action
     * 3. Wait for screenshotDelay (this parameter)
     * 4. Take screenshot after action
     *
     * Example: '500ms' means wait 500ms after the action before capturing the final
     * screenshot.
     */
    screenshotDelay?: string;
  }
}

export interface ActionTouchParams {
  /**
   * Array of touch points and their actions
   */
  points: Array<ActionTouchParams.Point>;

  /**
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
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
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Delay after performing the action, before taking the final screenshot.
   *
   * Execution flow:
   *
   * 1. Take screenshot before action
   * 2. Perform the action
   * 3. Wait for screenshotDelay (this parameter)
   * 4. Take screenshot after action
   *
   * Example: '500ms' means wait 500ms after the action before capturing the final
   * screenshot.
   */
  screenshotDelay?: string;
}

export declare namespace Actions {
  export {
    type ActionResult as ActionResult,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionClickParams as ActionClickParams,
    type ActionDragParams as ActionDragParams,
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
}
