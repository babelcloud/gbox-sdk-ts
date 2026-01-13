// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Simulates a click action on the box.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.click(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 100, y: 100 },
   * );
   * ```
   */
  click(boxID: string, body: ActionClickParams, options?: RequestOptions): APIPromise<ActionClickResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/click`, { body, ...options });
  }

  /**
   * Get the clipboard content
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.clipboardGet(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  clipboardGet(boxID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/boxes/${boxID}/actions/clipboard`, options);
  }

  /**
   * Set the clipboard content
   *
   * @example
   * ```ts
   * await client.v1.boxes.actions.clipboardSet(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { content: 'Hello, world!' },
   * );
   * ```
   */
  clipboardSet(boxID: string, body: ActionClipboardSetParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/actions/clipboard`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Simulates a drag gesture, moving from a start point to an end point over a set
   * duration. Supports simple start/end coordinates, multi-point drag paths, and
   * natural-language targets.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.drag(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     end: { x: 200, y: 200 },
   *     start: { x: 100, y: 100 },
   *   },
   * );
   * ```
   */
  drag(boxID: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionDragResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/drag`, { body, ...options });
  }

  /**
   * Detect and identify interactive UI elements in the current screen. Note: This
   * feature currently only supports element detection within a running browser. If
   * the browser is not running, the Elements array will be empty.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.actions.elementsDetect(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   );
   * ```
   */
  elementsDetect(
    boxID: string,
    body: ActionElementsDetectParams,
    options?: RequestOptions,
  ): APIPromise<ActionElementsDetectResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/elements/detect`, { body, ...options });
  }

  /**
   * Extract data from the UI interface using a JSON schema.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.extract(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     instruction:
   *       'Extract the email address from the UI interface',
   *   },
   * );
   * ```
   */
  extract(
    boxID: string,
    body: ActionExtractParams,
    options?: RequestOptions,
  ): APIPromise<ActionExtractResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/extract`, { body, ...options });
  }

  /**
   * Perform a long press action at specified coordinates for a specified duration.
   * Useful for triggering context menus, drag operations, or other long-press
   * interactions.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.longPress(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     x: 350,
   *     y: 250,
   *     duration: '1s',
   *   },
   * );
   * ```
   */
  longPress(
    boxID: string,
    body: ActionLongPressParams,
    options?: RequestOptions,
  ): APIPromise<ActionLongPressResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/long-press`, { body, ...options });
  }

  /**
   * Moves the focus to a specific coordinate on the box without performing a click
   * or tap. Use this endpoint to position the cursor, hover over elements, or
   * prepare for chained actions such as drag or swipe.
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.move(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 200, y: 300 },
   * );
   * ```
   */
  move(boxID: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/move`, { body, ...options });
  }

  /**
   * Press device buttons like power, volume, home, back, etc.
   *
   * @example
   * ```ts
   * const actionResult =
   *   await client.v1.boxes.actions.pressButton(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     { buttons: ['power'] },
   *   );
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
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { keys: ['enter'] },
   * );
   * ```
   */
  pressKey(boxID: string, body: ActionPressKeyParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/press-key`, { body, ...options });
  }

  /**
   * Start recording the box screen. Only one recording can be active at a time. If a
   * recording is already in progress, starting a new recording will stop the
   * previous one and keep only the latest recording.
   *
   * @example
   * ```ts
   * await client.v1.boxes.actions.recordingStart(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  recordingStart(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/actions/recording/start`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stop recording the box screen
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.actions.recordingStop(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   );
   * ```
   */
  recordingStop(boxID: string, options?: RequestOptions): APIPromise<ActionRecordingStopResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/recording/stop`, options);
  }

  /**
   * Disable the device's background screen rewind recording.
   *
   * @example
   * ```ts
   * await client.v1.boxes.actions.rewindDisable(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  rewindDisable(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/boxes/${boxID}/actions/recording/rewind`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Enable the device's background screen rewind recording.
   *
   * @example
   * ```ts
   * await client.v1.boxes.actions.rewindEnable(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  rewindEnable(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/actions/recording/rewind`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rewind and capture the device's background screen recording from a specified
   * time period.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.actions.rewindExtract(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   );
   * ```
   */
  rewindExtract(
    boxID: string,
    body: ActionRewindExtractParams,
    options?: RequestOptions,
  ): APIPromise<ActionRewindExtractResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/recording/rewind/extract`, { body, ...options });
  }

  /**
   * Get the current structured screen layout information. This endpoint returns
   * detailed structural information about the UI elements currently displayed on the
   * screen, which can be used for UI automation, element analysis, and accessibility
   * purposes. The format varies by box type: Android boxes return XML format with
   * detailed UI hierarchy information including element bounds, text content,
   * resource IDs, and properties, while other box types may return different
   * structured formats.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.screenLayout(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  screenLayout(boxID: string, options?: RequestOptions): APIPromise<ActionScreenLayoutResponse> {
    return this._client.get(path`/boxes/${boxID}/actions/screen-layout`, options);
  }

  /**
   * Rotates the screen orientation. Note that even after rotating the screen,
   * applications or system layouts may not automatically adapt to the gravity sensor
   * changes, so visual changes may not always occur.
   *
   * @example
   * ```ts
   * const actionResult =
   *   await client.v1.boxes.actions.screenRotation(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     { orientation: 'landscapeLeft' },
   *   );
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
   * Captures a screenshot of the current box screen
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.screenshot(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
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
   * Performs a scroll action. Supports both advanced scroll with coordinates and
   * simple scroll with direction.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.scroll(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     scrollX: 0,
   *     scrollY: 100,
   *     x: 100,
   *     y: 100,
   *   },
   * );
   * ```
   */
  scroll(
    boxID: string,
    body: ActionScrollParams,
    options?: RequestOptions,
  ): APIPromise<ActionScrollResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/scroll`, { body, ...options });
  }

  /**
   * Get the action settings for the box
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.settings(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  settings(boxID: string, options?: RequestOptions): APIPromise<ActionSettingsResponse> {
    return this._client.get(path`/boxes/${boxID}/actions/settings`, options);
  }

  /**
   * Resets the box settings to default
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.actions.settingsReset(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   );
   * ```
   */
  settingsReset(boxID: string, options?: RequestOptions): APIPromise<ActionSettingsResetResponse> {
    return this._client.delete(path`/boxes/${boxID}/actions/settings`, options);
  }

  /**
   * Update the action settings for the box
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.actions.settingsUpdate(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     { scale: 1 },
   *   );
   * ```
   */
  settingsUpdate(
    boxID: string,
    body: ActionSettingsUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ActionSettingsUpdateResponse> {
    return this._client.put(path`/boxes/${boxID}/actions/settings`, { body, ...options });
  }

  /**
   * Performs a swipe in the specified direction
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.swipe(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { direction: 'up' },
   * );
   * ```
   */
  swipe(boxID: string, body: ActionSwipeParams, options?: RequestOptions): APIPromise<ActionSwipeResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/swipe`, { body, ...options });
  }

  /**
   * Tap action for Android devices using ADB input tap command
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.tap(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 100, y: 100 },
   * );
   * ```
   */
  tap(boxID: string, body: ActionTapParams, options?: RequestOptions): APIPromise<ActionTapResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/tap`, { body, ...options });
  }

  /**
   * Performs more advanced touch gestures. Use this endpoint to simulate realistic
   * behaviors.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.touch(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     points: [
   *       {
   *         start: { x: 100, y: 150 },
   *         actions: [
   *           {
   *             type: 'move',
   *             x: 400,
   *             y: 300,
   *             duration: '200ms',
   *           },
   *         ],
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  touch(boxID: string, body: ActionTouchParams, options?: RequestOptions): APIPromise<ActionTouchResponse> {
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
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { text: 'Hello World' },
   * );
   * ```
   */
  type(boxID: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/type`, { body, ...options });
  }
}

/**
 * Action common options
 */
export interface ActionCommonOptions {
  /**
   * Model to use for natural-language target resolution. Defaults to 'uitars'.
   */
  model?: 'gpt-5' | 'gpt-4o' | 'gelato' | 'ui-tars' | 'openai-computer-use';

  /**
   * Screenshot options. Can be a boolean to enable/disable screenshots, or an object
   * to configure screenshot options.
   */
  screenshot?: ActionScreenshotOptions | boolean;
}

/**
 * Result of an UI action execution with optional screenshots
 */
export interface ActionResult {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionResult.Screenshot;
}

export namespace ActionResult {
  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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
 * Action screenshot options
 */
export interface ActionScreenshotOptions {
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  delay?: string;

  /**
   * Type of the URI. default is base64.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * Specify which screenshot phases to capture.
   *
   * Available options:
   *
   * - before: Screenshot before the action
   * - after: Screenshot after the action
   * - trace: Screenshot with operation trace
   *
   * Default captures all three phases. Can specify one or multiple in an array. If
   * empty array is provided, no screenshots will be taken.
   */
  phases?: Array<'before' | 'after' | 'trace'>;

  /**
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;
}

/**
 * Detected UI element
 */
export interface DetectedElement {
  /**
   * Element id
   */
  id: string;

  /**
   * Element center x coordinate relative to screen
   */
  centerX: number;

  /**
   * Element center y coordinate relative to screen
   */
  centerY: number;

  /**
   * Element height
   */
  height: number;

  /**
   * A human-readable identifier generated from the element's visible attributes to
   * help understand what this element represents. For images, it uses alt text or
   * filename; for links, it uses text content or href; for buttons, it uses text
   * content or aria-label; for inputs, it uses placeholder or value; etc.
   */
  label: string;

  /**
   * Element path
   */
  path: string;

  /**
   * Element source
   */
  source: string;

  /**
   * Element type
   */
  type: string;

  /**
   * Element width
   */
  width: number;

  /**
   * Element x coordinate relative to screen
   */
  x: number;

  /**
   * Element y coordinate relative to screen
   */
  y: number;
}

/**
 * Result of click action execution with actual parameters used. The actual field
 * shows the exact parameters used when performing the click, which is especially
 * useful when using natural language or element-based targeting to understand
 * exactly what action was performed.
 */
export interface ActionClickResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the click action, with the same field
   * names as input parameters
   */
  actual: ActionClickResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionClickResponse.Screenshot;
}

export namespace ActionClickResponse {
  /**
   * Actual parameters used when executing the click action, with the same field
   * names as input parameters
   */
  export interface Actual {
    /**
     * Mouse button that was clicked
     */
    button: 'left' | 'right' | 'middle';

    /**
     * Whether a double click was performed
     */
    double: boolean;

    /**
     * X coordinate where the click was executed
     */
    x: number;

    /**
     * Y coordinate where the click was executed
     */
    y: number;

    /**
     * Modifier keys that were pressed during the click (e.g., control, shift, alt).
     * Matches the KeyboardKey enum used by pressKey action.
     */
    modifierKeys?: Array<
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
  }

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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

export type ActionClipboardGetResponse = string;

/**
 * Result of drag action execution with actual parameters used
 */
export interface ActionDragResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the drag action
   */
  actual: ActionDragResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionDragResponse.Screenshot;
}

export namespace ActionDragResponse {
  /**
   * Actual parameters used when executing the drag action
   */
  export interface Actual {
    /**
     * Duration of the drag
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration: string;

    /**
     * Single point in a drag path
     */
    end: Actual.End;

    /**
     * Single point in a drag path
     */
    start: Actual.Start;
  }

  export namespace Actual {
    /**
     * Single point in a drag path
     */
    export interface End {
      /**
       * X coordinate of a point in the drag path
       */
      x: number;

      /**
       * Y coordinate of a point in the drag path
       */
      y: number;
    }

    /**
     * Single point in a drag path
     */
    export interface Start {
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

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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
 * Result containing original screenshot, annotated screenshot, and detected
 * elements
 */
export interface ActionElementsDetectResponse {
  /**
   * Detected UI elements
   */
  elements: Array<DetectedElement>;

  /**
   * Detected elements screenshot
   */
  screenshot: ActionElementsDetectResponse.Screenshot;
}

export namespace ActionElementsDetectResponse {
  /**
   * Detected elements screenshot
   */
  export interface Screenshot {
    /**
     * Result of screenshot capture action
     */
    marked: Screenshot.Marked;

    /**
     * Result of screenshot capture action
     */
    source: Screenshot.Source;
  }

  export namespace Screenshot {
    /**
     * Result of screenshot capture action
     */
    export interface Marked {
      /**
       * URL of the screenshot
       */
      uri: string;

      /**
       * Presigned url of the screenshot
       */
      presignedUrl?: string;
    }

    /**
     * Result of screenshot capture action
     */
    export interface Source {
      /**
       * URL of the screenshot
       */
      uri: string;

      /**
       * Presigned url of the screenshot
       */
      presignedUrl?: string;
    }
  }
}

/**
 * Result of extract action execution
 */
export interface ActionExtractResponse {
  /**
   * The extracted data structure that conforms to the provided JSON schema. The
   * actual structure and content depend on the schema defined in the extract action
   * request.
   */
  data: { [key: string]: unknown };

  /**
   * Base64-encoded screenshot of the UI interface at the time of extraction
   */
  screenshot: string;
}

/**
 * Result of long press action execution with actual parameters used
 */
export interface ActionLongPressResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the long press action
   */
  actual: ActionLongPressResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionLongPressResponse.Screenshot;
}

export namespace ActionLongPressResponse {
  /**
   * Actual parameters used when executing the long press action
   */
  export interface Actual {
    /**
     * Duration of the long press
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 1s
     */
    duration: string;

    /**
     * X coordinate where the long press was executed
     */
    x: number;

    /**
     * Y coordinate where the long press was executed
     */
    y: number;
  }

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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
 * Recording stop result
 */
export interface ActionRecordingStopResponse {
  /**
   * Presigned URL of the recording. This is a temporary downloadable URL with an
   * expiration time for accessing the recording file.
   */
  presignedUrl: string;

  /**
   * Storage key of the recording. Before the box is deleted, you can use this
   * storageKey with the endpoint `box/:boxId/storage/presigned-url` to get a
   * downloadable URL for the recording.
   */
  storageKey: string;
}

/**
 * Result of extracting the recording rewind
 */
export interface ActionRewindExtractResponse {
  /**
   * Presigned URL of the recording. This is a temporary downloadable URL with an
   * expiration time for accessing the recording file.
   */
  presignedUrl: string;

  /**
   * Storage key of the recording. Before the box is deleted, you can use this
   * storageKey with the endpoint `box/:boxId/storage/presigned-url` to get a
   * downloadable URL for the recording.
   */
  storageKey: string;
}

/**
 * Screen layout content.
 *
 * Android boxes (XML):
 *
 * <?xml version='1.0' encoding='UTF-8' standalone='yes'?>
 * <hierarchy rotation="0">
 *   <node ... />
 * </hierarchy>
 *
 * Browser (Linux) boxes (HTML):
 *
 * <html>
 *   <head><title>Example</title></head>
 *   <body>
 *     <h1>Hello World</h1>
 *   </body>
 * </html>
 */
export interface ActionScreenLayoutResponse {
  /**
   * Screen layout content.
   *
   * Android boxes (XML):
   *
   * ```xml
   * <?xml version='1.0' encoding='UTF-8' standalone='yes'?>
   * <hierarchy rotation="0">
   *   <node ... />
   * </hierarchy>
   * ```
   *
   * Browser (Linux) boxes (HTML):
   *
   * ```html
   * <html>
   *   <head>
   *     <title>Example</title>
   *   </head>
   *   <body>
   *     <h1>Hello World</h1>
   *   </body>
   * </html>
   * ```
   */
  content: string;
}

/**
 * Result of screenshot capture action
 */
export interface ActionScreenshotResponse {
  /**
   * URL of the screenshot
   */
  uri: string;

  /**
   * Presigned url of the screenshot
   */
  presignedUrl?: string;
}

/**
 * Result of scroll action execution with actual parameters used
 */
export interface ActionScrollResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the scroll action
   */
  actual: ActionScrollResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionScrollResponse.Screenshot;
}

export namespace ActionScrollResponse {
  /**
   * Actual parameters used when executing the scroll action
   */
  export interface Actual {
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
  }

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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
 * Action setting
 */
export interface ActionSettingsResponse {
  /**
   * The scale of the action to be performed. Must be greater than 0.1 and less than
   * or equal to 1.
   *
   * Notes:
   *
   * - Scale does not change the box's actual screen resolution.
   * - It affects the size of the output screenshot and the coordinates/distances of
   *   actions. Coordinates and distances are scaled by this factor. Example: when
   *   scale = 1, Click({x:100, y:100}); when scale = 0.5, the equivalent position is
   *   Click({x:50, y:50}).
   */
  scale: number;
}

/**
 * Action setting
 */
export interface ActionSettingsResetResponse {
  /**
   * The scale of the action to be performed. Must be greater than 0.1 and less than
   * or equal to 1.
   *
   * Notes:
   *
   * - Scale does not change the box's actual screen resolution.
   * - It affects the size of the output screenshot and the coordinates/distances of
   *   actions. Coordinates and distances are scaled by this factor. Example: when
   *   scale = 1, Click({x:100, y:100}); when scale = 0.5, the equivalent position is
   *   Click({x:50, y:50}).
   */
  scale: number;
}

/**
 * Action setting
 */
export interface ActionSettingsUpdateResponse {
  /**
   * The scale of the action to be performed. Must be greater than 0.1 and less than
   * or equal to 1.
   *
   * Notes:
   *
   * - Scale does not change the box's actual screen resolution.
   * - It affects the size of the output screenshot and the coordinates/distances of
   *   actions. Coordinates and distances are scaled by this factor. Example: when
   *   scale = 1, Click({x:100, y:100}); when scale = 0.5, the equivalent position is
   *   Click({x:50, y:50}).
   */
  scale: number;
}

/**
 * Result of swipe action execution with actual parameters used
 */
export interface ActionSwipeResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the swipe action
   */
  actual: ActionSwipeResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionSwipeResponse.Screenshot;
}

export namespace ActionSwipeResponse {
  /**
   * Actual parameters used when executing the swipe action
   */
  export interface Actual {
    /**
     * Duration of the swipe
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration: string;

    /**
     * Swipe path
     */
    end: Actual.End;

    /**
     * Swipe path
     */
    start: Actual.Start;
  }

  export namespace Actual {
    /**
     * Swipe path
     */
    export interface End {
      /**
       * Start/end x coordinate of the swipe path
       */
      x: number;

      /**
       * Start/end y coordinate of the swipe path
       */
      y: number;
    }

    /**
     * Swipe path
     */
    export interface Start {
      /**
       * Start/end x coordinate of the swipe path
       */
      x: number;

      /**
       * Start/end y coordinate of the swipe path
       */
      y: number;
    }
  }

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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
 * Result of tap action execution with actual parameters used
 */
export interface ActionTapResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the tap action
   */
  actual: ActionTapResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionTapResponse.Screenshot;
}

export namespace ActionTapResponse {
  /**
   * Actual parameters used when executing the tap action
   */
  export interface Actual {
    /**
     * X coordinate where the tap was executed
     */
    x: number;

    /**
     * Y coordinate where the tap was executed
     */
    y: number;
  }

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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
 * Result of touch action execution with actual parameters used
 */
export interface ActionTouchResponse {
  /**
   * Unique identifier for each action. Use this ID to locate the action and report
   * issues.
   */
  actionId: string;

  /**
   * Actual parameters used when executing the touch action
   */
  actual: ActionTouchResponse.Actual;

  /**
   * message
   */
  message: string;

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  screenshot?: ActionTouchResponse.Screenshot;
}

export namespace ActionTouchResponse {
  /**
   * Actual parameters used when executing the touch action
   */
  export interface Actual {
    /**
     * Array of touch points with their normalized coordinates and actions
     */
    points: Array<Actual.Point>;
  }

  export namespace Actual {
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
      actions?: Array<Point.TouchPointMoveAction | Point.TouchPointWaitAction>;
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

      /**
       * Touch point movement action configuration
       */
      export interface TouchPointMoveAction {
        /**
         * Duration of the movement (e.g. "200ms")
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 200ms
         */
        duration: string;

        /**
         * Type of the action
         */
        type: string;

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
       * Touch point wait action configuration
       */
      export interface TouchPointWaitAction {
        /**
         * Duration to wait (e.g. "500ms")
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration: string;

        /**
         * Type of the action
         */
        type: string;
      }
    }
  }

  /**
   * Complete screenshot result with operation trace, before and after images
   */
  export interface Screenshot {
    /**
     * Screenshot taken after action execution
     */
    after?: Screenshot.After;

    /**
     * Screenshot taken before action execution
     */
    before?: Screenshot.Before;

    /**
     * Screenshot with action operation trace
     */
    trace?: Screenshot.Trace;
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

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
    }

    /**
     * Screenshot taken before action execution
     */
    export interface Before {
      /**
       * URI of the screenshot before the action
       */
      uri: string;

      /**
       * Presigned url of the screenshot before the action
       */
      presignedUrl?: string;
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

export type ActionClickParams =
  | ActionClickParams.Click
  | ActionClickParams.ClickByNaturalLanguage
  | ActionClickParams.ClickByElement;

export declare namespace ActionClickParams {
  export interface Click {
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
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Modifier keys to hold while performing the click (e.g., control, shift, alt).
     * Supports the same key values as the pressKey action.
     */
    modifierKeys?: Array<
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
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface ClickByNaturalLanguage {
    /**
     * Describe the target to operate using natural language, e.g., 'login button' or
     * 'Chrome'.
     */
    target: string;

    /**
     * Mouse button to click
     */
    button?: 'left' | 'right' | 'middle';

    /**
     * Whether to perform a double click
     */
    double?: boolean;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Modifier keys to hold while performing the click (e.g., control, shift, alt).
     * Supports the same key values as the pressKey action.
     */
    modifierKeys?: Array<
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
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface ClickByElement {
    /**
     * Detected UI element
     */
    target: DetectedElement;

    /**
     * Mouse button to click
     */
    button?: 'left' | 'right' | 'middle';

    /**
     * Whether to perform a double click
     */
    double?: boolean;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Modifier keys to hold while performing the click (e.g., control, shift, alt).
     * Supports the same key values as the pressKey action.
     */
    modifierKeys?: Array<
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
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }
}

export interface ActionClipboardSetParams {
  /**
   * The content to set the clipboard content
   */
  content: string;
}

export type ActionDragParams = ActionDragParams.DragSimple | ActionDragParams.DragAdvanced;

export declare namespace ActionDragParams {
  export interface DragSimple {
    /**
     * End point of the drag path (coordinates or natural language)
     */
    end: DragSimple.DragPathPoint | string;

    /**
     * Start point of the drag path (coordinates or natural language)
     */
    start: DragSimple.DragPathPoint | string;

    /**
     * Duration to complete the movement from start to end coordinates
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export namespace DragSimple {
    /**
     * Single point in a drag path
     */
    export interface DragPathPoint {
      /**
       * X coordinate of a point in the drag path
       */
      x: number;

      /**
       * Y coordinate of a point in the drag path
       */
      y: number;
    }

    /**
     * Single point in a drag path
     */
    export interface DragPathPoint {
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

  export interface DragAdvanced {
    /**
     * Path of the drag action as a series of coordinates
     */
    path: Array<DragAdvanced.Path>;

    /**
     * Time interval between points (e.g. "50ms")
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 50ms
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export namespace DragAdvanced {
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
}

export interface ActionElementsDetectParams {
  /**
   * Detect elements screenshot options
   */
  screenshot?: ActionElementsDetectParams.Screenshot;
}

export namespace ActionElementsDetectParams {
  /**
   * Detect elements screenshot options
   */
  export interface Screenshot {
    /**
     * Type of the URI. default is base64.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;
  }
}

export interface ActionExtractParams {
  /**
   * The instruction of the action to extract data from the UI interface
   */
  instruction: string;

  /**
   * JSON Schema defining the structure of data to extract. Supports object, array,
   * string, number, boolean types with validation rules.
   *
   * Common use cases:
   *
   * - Extract text content: { "type": "string" }
   * - Extract structured data: { "type": "object", "properties": {...} }
   * - Extract lists: { "type": "array", "items": {...} }
   * - Extract with validation: Add constraints like "required", "enum", "pattern",
   *   etc.
   */
  schema?: unknown;
}

export type ActionLongPressParams =
  | ActionLongPressParams.LongPress
  | ActionLongPressParams.LongPressByNaturalLanguage
  | ActionLongPressParams.LongPressByElement;

export declare namespace ActionLongPressParams {
  export interface LongPress {
    /**
     * X coordinate of the long press
     */
    x: number;

    /**
     * Y coordinate of the long press
     */
    y: number;

    /**
     * Duration to hold the press (e.g. '1s', '500ms')
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 1s
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface LongPressByNaturalLanguage {
    /**
     * Describe the target to operate using natural language, e.g., 'Chrome icon',
     * 'login button'
     */
    target: string;

    /**
     * Duration to hold the press (e.g. '1s', '500ms')
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 1s
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface LongPressByElement {
    /**
     * Detected UI element
     */
    target: DetectedElement;

    /**
     * Duration to hold the press (e.g. '1s', '500ms')
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 1s
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
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
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
   * will be ignored when `options.screenshot` is provided. Whether to include
   * screenshots in the action response. If false, the screenshot object will still
   * be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

  /**
   * Action common options
   */
  options?: ActionCommonOptions;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
   * of the URI. default is base64. This field will be ignored when
   * `options.screenshot` is provided.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   * This field will be ignored when `options.screenshot` is provided.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
   * will be ignored when `options.screenshot` is provided.
   *
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
}

export interface ActionPressButtonParams {
  /**
   * Button to press
   */
  buttons: Array<'power' | 'volumeUp' | 'volumeDown' | 'volumeMute' | 'home' | 'back' | 'menu' | 'appSwitch'>;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
   * will be ignored when `options.screenshot` is provided. Whether to include
   * screenshots in the action response. If false, the screenshot object will still
   * be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

  /**
   * Action common options
   */
  options?: ActionCommonOptions;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
   * of the URI. default is base64. This field will be ignored when
   * `options.screenshot` is provided.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   * This field will be ignored when `options.screenshot` is provided.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
   * will be ignored when `options.screenshot` is provided.
   *
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
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
   * Whether to press keys as combination (simultaneously) or sequentially. When
   * true, all keys are pressed together as a shortcut (e.g., Ctrl+C). When false,
   * keys are pressed one by one in sequence.
   */
  combination?: boolean;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
   * will be ignored when `options.screenshot` is provided. Whether to include
   * screenshots in the action response. If false, the screenshot object will still
   * be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

  /**
   * Action common options
   */
  options?: ActionCommonOptions;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
   * of the URI. default is base64. This field will be ignored when
   * `options.screenshot` is provided.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   * This field will be ignored when `options.screenshot` is provided.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
   * will be ignored when `options.screenshot` is provided.
   *
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
}

export interface ActionRewindExtractParams {
  /**
   * How far back in time to rewind for extracting recorded video. This specifies the
   * duration to go back from the current moment (e.g., '30s' rewinds 30 seconds to
   * get recent recorded activity). Default is 30s, max is 5m.
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Maximum allowed: 5m
   */
  duration?: string;
}

export interface ActionScreenRotationParams {
  /**
   * Target screen orientation
   */
  orientation: 'portrait' | 'landscapeLeft' | 'portraitUpsideDown' | 'landscapeRight';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
   * will be ignored when `options.screenshot` is provided. Whether to include
   * screenshots in the action response. If false, the screenshot object will still
   * be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

  /**
   * Action common options
   */
  options?: ActionCommonOptions;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
   * of the URI. default is base64. This field will be ignored when
   * `options.screenshot` is provided.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   * This field will be ignored when `options.screenshot` is provided.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
   * will be ignored when `options.screenshot` is provided.
   *
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
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

  /**
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * Whether to save the screenshot to the device screenshot album
   */
  saveToAlbum?: boolean;

  /**
   * Scroll capture parameters
   */
  scrollCapture?: ActionScreenshotParams.ScrollCapture;
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

  /**
   * Scroll capture parameters
   */
  export interface ScrollCapture {
    /**
     * Maximum height of the screenshot in pixels. Limits the maximum height of the
     * automatically scrolled content. Useful for managing memory usage when capturing
     * tall content like long web pages. Default: 4000px
     */
    maxHeight?: number;

    /**
     * Whether to scroll back to the original position after capturing the screenshot
     */
    scrollBack?: boolean;
  }
}

export type ActionScrollParams = ActionScrollParams.ScrollAdvanced | ActionScrollParams.ScrollSimple;

export declare namespace ActionScrollParams {
  export interface ScrollAdvanced {
    /**
     * Horizontal scroll amount. Positive values scroll content rightward (reveals
     * content on the right), negative values scroll content leftward (reveals content
     * on the left).
     */
    scrollX: number;

    /**
     * Vertical scroll amount. Positive values scroll content downward (reveals content
     * below), negative values scroll content upward (reveals content above).
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
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface ScrollSimple {
    /**
     * Direction to scroll. The scroll will be performed from the center of the screen
     * towards this direction. 'up' scrolls content upward (reveals content below),
     * 'down' scrolls content downward (reveals content above), 'left' scrolls content
     * leftward (reveals content on the right), 'right' scrolls content rightward
     * (reveals content on the left).
     */
    direction: 'up' | 'down' | 'left' | 'right';

    /**
     * Distance of the scroll. Can be either a number (in pixels) or a predefined enum
     * value (tiny, short, medium, long). If not provided, the scroll will be performed
     * from the center of the screen to the screen edge
     */
    distance?: number | 'tiny' | 'short' | 'medium' | 'long';

    /**
     * Duration of the scroll
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Natural language description of the location where the scroll should originate.
     * If not provided, the scroll will be performed from the center of the screen.
     */
    location?: string;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }
}

export interface ActionSettingsUpdateParams {
  /**
   * The scale of the action to be performed. Must be greater than 0.1 and less than
   * or equal to 1.
   *
   * Notes:
   *
   * - Scale does not change the box's actual screen resolution.
   * - It affects the size of the output screenshot and the coordinates/distances of
   *   actions. Coordinates and distances are scaled by this factor. Example: when
   *   scale = 1, Click({x:100, y:100}); when scale = 0.5, the equivalent position is
   *   Click({x:50, y:50}).
   */
  scale: number;
}

export type ActionSwipeParams = ActionSwipeParams.SwipeSimple | ActionSwipeParams.SwipeAdvanced;

export declare namespace ActionSwipeParams {
  export interface SwipeSimple {
    /**
     * Direction to swipe. The gesture will be performed from the center of the screen
     * towards this direction.
     */
    direction: 'up' | 'down' | 'left' | 'right' | 'upLeft' | 'upRight' | 'downLeft' | 'downRight';

    /**
     * Distance of the swipe. Can be either a number (in pixels) or a predefined enum
     * value (tiny, short, medium, long). If not provided, the swipe will be performed
     * from the center of the screen to the screen edge
     */
    distance?: number | 'tiny' | 'short' | 'medium' | 'long';

    /**
     * Duration of the swipe
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Natural language description of the location where the swipe should originate.
     * If not provided, the swipe will be performed from the center of the screen.
     */
    location?: string;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface SwipeAdvanced {
    /**
     * End point of the swipe path (coordinates or natural language)
     */
    end: SwipeAdvanced.SwipePath | string;

    /**
     * Start point of the swipe path (coordinates or natural language)
     */
    start: SwipeAdvanced.SwipePath | string;

    /**
     * Duration of the swipe
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export namespace SwipeAdvanced {
    /**
     * Swipe path
     */
    export interface SwipePath {
      /**
       * Start/end x coordinate of the swipe path
       */
      x: number;

      /**
       * Start/end y coordinate of the swipe path
       */
      y: number;
    }

    /**
     * Swipe path
     */
    export interface SwipePath {
      /**
       * Start/end x coordinate of the swipe path
       */
      x: number;

      /**
       * Start/end y coordinate of the swipe path
       */
      y: number;
    }
  }
}

export type ActionTapParams =
  | ActionTapParams.Tap
  | ActionTapParams.TapByNaturalLanguage
  | ActionTapParams.TapByElement;

export declare namespace ActionTapParams {
  export interface Tap {
    /**
     * X coordinate of the tap
     */
    x: number;

    /**
     * Y coordinate of the tap
     */
    y: number;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface TapByNaturalLanguage {
    /**
     * Describe the target to operate using natural language, e.g., 'login button' or
     * 'Chrome'.
     */
    target: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface TapByElement {
    /**
     * Detected UI element
     */
    target: DetectedElement;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
     * will be ignored when `options.screenshot` is provided. Whether to include
     * screenshots in the action response. If false, the screenshot object will still
     * be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

    /**
     * Action common options
     */
    options?: ActionCommonOptions;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
     * of the URI. default is base64. This field will be ignored when
     * `options.screenshot` is provided.
     */
    outputFormat?: 'base64' | 'storageKey';

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
     * Presigned url expires in. Only takes effect when outputFormat is storageKey.
     * This field will be ignored when `options.screenshot` is provided.
     *
     * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
     * (never expires).
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
     */
    presignedExpiresIn?: string;

    /**
     * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
     * will be ignored when `options.screenshot` is provided.
     *
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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
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
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
   * will be ignored when `options.screenshot` is provided. Whether to include
   * screenshots in the action response. If false, the screenshot object will still
   * be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

  /**
   * Action common options
   */
  options?: ActionCommonOptions;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
   * of the URI. default is base64. This field will be ignored when
   * `options.screenshot` is provided.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   * This field will be ignored when `options.screenshot` is provided.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
   * will be ignored when `options.screenshot` is provided.
   *
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
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
    actions?: Array<Point.TouchPointMoveAction | Point.TouchPointWaitAction>;
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

    /**
     * Touch point movement action configuration
     */
    export interface TouchPointMoveAction {
      /**
       * Duration of the movement (e.g. "200ms")
       *
       * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
       * Example formats: "500ms", "30s", "5m", "1h" Default: 200ms
       */
      duration: string;

      /**
       * Type of the action
       */
      type: string;

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
     * Touch point wait action configuration
     */
    export interface TouchPointWaitAction {
      /**
       * Duration to wait (e.g. "500ms")
       *
       * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
       * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
       */
      duration: string;

      /**
       * Type of the action
       */
      type: string;
    }
  }
}

export interface ActionTypeParams {
  /**
   * Text to type
   */
  text: string;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.phases` instead. This field
   * will be ignored when `options.screenshot` is provided. Whether to include
   * screenshots in the action response. If false, the screenshot object will still
   * be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

  /**
   * Text input mode: 'append' to add text to existing content, 'replace' to replace
   * all existing text
   */
  mode?: 'append' | 'replace';

  /**
   * Action common options
   */
  options?: ActionCommonOptions;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.outputFormat` instead. Type
   * of the URI. default is base64. This field will be ignored when
   * `options.screenshot` is provided.
   */
  outputFormat?: 'base64' | 'storageKey';

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.presignedExpiresIn` instead.
   * Presigned url expires in. Only takes effect when outputFormat is storageKey.
   * This field will be ignored when `options.screenshot` is provided.
   *
   * When presignedExpiresIn = 0 (e.g., "0ms"), the returned URL will be permanent
   * (never expires).
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;

  /**
   * Whether to press Enter after typing the text
   */
  pressEnter?: boolean;

  /**
   * @deprecated ⚠️ DEPRECATED: Use `options.screenshot.delay` instead. This field
   * will be ignored when `options.screenshot` is provided.
   *
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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
}

export declare namespace Actions {
  export {
    type ActionCommonOptions as ActionCommonOptions,
    type ActionResult as ActionResult,
    type ActionScreenshotOptions as ActionScreenshotOptions,
    type DetectedElement as DetectedElement,
    type ActionClickResponse as ActionClickResponse,
    type ActionClipboardGetResponse as ActionClipboardGetResponse,
    type ActionDragResponse as ActionDragResponse,
    type ActionElementsDetectResponse as ActionElementsDetectResponse,
    type ActionExtractResponse as ActionExtractResponse,
    type ActionLongPressResponse as ActionLongPressResponse,
    type ActionRecordingStopResponse as ActionRecordingStopResponse,
    type ActionRewindExtractResponse as ActionRewindExtractResponse,
    type ActionScreenLayoutResponse as ActionScreenLayoutResponse,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionScrollResponse as ActionScrollResponse,
    type ActionSettingsResponse as ActionSettingsResponse,
    type ActionSettingsResetResponse as ActionSettingsResetResponse,
    type ActionSettingsUpdateResponse as ActionSettingsUpdateResponse,
    type ActionSwipeResponse as ActionSwipeResponse,
    type ActionTapResponse as ActionTapResponse,
    type ActionTouchResponse as ActionTouchResponse,
    type ActionClickParams as ActionClickParams,
    type ActionClipboardSetParams as ActionClipboardSetParams,
    type ActionDragParams as ActionDragParams,
    type ActionElementsDetectParams as ActionElementsDetectParams,
    type ActionExtractParams as ActionExtractParams,
    type ActionLongPressParams as ActionLongPressParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionPressButtonParams as ActionPressButtonParams,
    type ActionPressKeyParams as ActionPressKeyParams,
    type ActionRewindExtractParams as ActionRewindExtractParams,
    type ActionScreenRotationParams as ActionScreenRotationParams,
    type ActionScreenshotParams as ActionScreenshotParams,
    type ActionScrollParams as ActionScrollParams,
    type ActionSettingsUpdateParams as ActionSettingsUpdateParams,
    type ActionSwipeParams as ActionSwipeParams,
    type ActionTapParams as ActionTapParams,
    type ActionTouchParams as ActionTouchParams,
    type ActionTypeParams as ActionTypeParams,
  };
}
