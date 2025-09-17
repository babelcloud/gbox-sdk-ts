// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Use natural language instructions to perform UI operations on the box. The
   * endpoint will stream progress events before and after the action is executed. If
   * you don't need intermediate events, set stream to false.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.ai(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { instruction: 'click the login button' },
   * );
   * ```
   */
  ai(boxID: string, body: ActionAIParams, options?: RequestOptions): APIPromise<ActionAIResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/ai`, { body, ...options });
  }

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
  click(boxID: string, body: ActionClickParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/click`, { body, ...options });
  }

  /**
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
   * Drag
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.drag(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { end: { x: 200, y: 200 }, start: { x: 100, y: 100 } },
   * );
   * ```
   */
  drag(boxID: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/drag`, { body, ...options });
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
   * const actionResult =
   *   await client.v1.boxes.actions.longPress(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     { x: 350, y: 250, duration: '1s' },
   *   );
   * ```
   */
  longPress(boxID: string, body: ActionLongPressParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/long-press`, { body, ...options });
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
   * Rotate the screen orientation. Note that even after rotating the screen,
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
   * const actionResult = await client.v1.boxes.actions.scroll(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { scrollX: 0, scrollY: 100, x: 100, y: 100 },
   * );
   * ```
   */
  scroll(boxID: string, body: ActionScrollParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/scroll`, { body, ...options });
  }

  /**
   * Get the box action settings
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
   * Reset the box settings to default
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
   * Update the box action settings
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
   * const actionResult = await client.v1.boxes.actions.swipe(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { direction: 'up' },
   * );
   * ```
   */
  swipe(boxID: string, body: ActionSwipeParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/swipe`, { body, ...options });
  }

  /**
   * Tap action for Android devices using ADB input tap command
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.tap(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 100, y: 100 },
   * );
   * ```
   */
  tap(boxID: string, body: ActionTapParams, options?: RequestOptions): APIPromise<ActionResult> {
    return this._client.post(path`/boxes/${boxID}/actions/tap`, { body, ...options });
  }

  /**
   * Touch
   *
   * @example
   * ```ts
   * const actionResult = await client.v1.boxes.actions.touch(
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
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 30m
   */
  presignedExpiresIn?: string;
}

/**
 * Result of AI action execution with screenshot
 */
export type ActionAIResponse = ActionAIResponse.AIActionScreenshotResult | ActionAIResponse.AIActionResult;

export namespace ActionAIResponse {
  /**
   * Result of AI action execution with screenshot
   */
  export interface AIActionScreenshotResult {
    /**
     * Unique identifier for each action. Use this ID to locate the action and report
     * issues.
     */
    actionId: string;

    /**
     * Response of AI action execution
     */
    aiResponse: AIActionScreenshotResult.AIResponse;

    /**
     * message
     */
    message: string;

    /**
     * output
     */
    output: string;

    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot?: AIActionScreenshotResult.Screenshot;
  }

  export namespace AIActionScreenshotResult {
    /**
     * Response of AI action execution
     */
    export interface AIResponse {
      /**
       * Actions to be executed by the AI with type identifier
       */
      actions: Array<
        | AIResponse.TypedClickAction
        | AIResponse.TypedTouchAction
        | AIResponse.TypedDragAdvancedAction
        | AIResponse.TypedDragSimpleAction
        | AIResponse.TypedScrollAction
        | AIResponse.TypedScrollSimpleAction
        | AIResponse.TypedSwipeSimpleAction
        | AIResponse.TypedSwipeAdvancedAction
        | AIResponse.TypedPressKeyAction
        | AIResponse.TypedPressButtonAction
        | AIResponse.TypedLongPressAction
        | AIResponse.TypedTypeAction
        | AIResponse.TypedMoveAction
        | AIResponse.TypedScreenRotationAction
        | AIResponse.TypedScreenshotAction
        | AIResponse.TypedDragSimpleAction
        | AIResponse.TypedDragAdvancedAction
        | AIResponse.TypedWaitAction
      >;

      /**
       * messages returned by the model
       */
      messages: Array<string>;

      /**
       * The name of the model that processed this request
       */
      model: string;

      /**
       * reasoning
       */
      reasoning?: string;
    }

    export namespace AIResponse {
      /**
       * Typed click action
       */
      export interface TypedClickAction {
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
         * Action common options
         */
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed touch action
       */
      export interface TypedTouchAction {
        /**
         * Array of touch points and their actions
         */
        points: Array<TypedTouchAction.Point>;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedTouchAction {
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
       * Typed drag advanced action
       */
      export interface TypedDragAdvancedAction {
        /**
         * Path of the drag action as a series of coordinates
         */
        path: Array<TypedDragAdvancedAction.Path>;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragAdvancedAction {
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

      /**
       * Typed drag simple action
       */
      export interface TypedDragSimpleAction {
        /**
         * End point of the drag path (coordinates or natural language)
         */
        end: TypedDragSimpleAction.DragPathPoint | string;

        /**
         * Start point of the drag path (coordinates or natural language)
         */
        start: TypedDragSimpleAction.DragPathPoint | string;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragSimpleAction {
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

      /**
       * Typed scroll action
       */
      export interface TypedScrollAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed scroll simple action
       */
      export interface TypedScrollSimpleAction {
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
         * Action common options
         */
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed swipe simple action
       */
      export interface TypedSwipeSimpleAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed swipe advanced action
       */
      export interface TypedSwipeAdvancedAction {
        /**
         * End point of the swipe path (coordinates or natural language)
         */
        end: TypedSwipeAdvancedAction.SwipePath | string;

        /**
         * Start point of the swipe path (coordinates or natural language)
         */
        start: TypedSwipeAdvancedAction.SwipePath | string;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedSwipeAdvancedAction {
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

      /**
       * Typed press key action
       */
      export interface TypedPressKeyAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed press button action
       */
      export interface TypedPressButtonAction {
        /**
         * Button to press
         */
        buttons: Array<
          'power' | 'volumeUp' | 'volumeDown' | 'volumeMute' | 'home' | 'back' | 'menu' | 'appSwitch'
        >;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed long press action
       */
      export interface TypedLongPressAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed type action
       */
      export interface TypedTypeAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed move action
       */
      export interface TypedMoveAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed screen rotation action
       */
      export interface TypedScreenRotationAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed screenshot action
       */
      export interface TypedScreenshotAction {
        /**
         * Clipping region for screenshot capture
         */
        clip?: TypedScreenshotAction.Clip;

        /**
         * Type of the URI. default is base64.
         */
        outputFormat?: 'base64' | 'storageKey';

        /**
         * Presigned url expires in. Only takes effect when outputFormat is storageKey.
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
        scrollCapture?: TypedScreenshotAction.ScrollCapture;
      }

      export namespace TypedScreenshotAction {
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

      /**
       * Typed drag simple action
       */
      export interface TypedDragSimpleAction {
        /**
         * End point of the drag path (coordinates or natural language)
         */
        end: TypedDragSimpleAction.DragPathPoint | string;

        /**
         * Start point of the drag path (coordinates or natural language)
         */
        start: TypedDragSimpleAction.DragPathPoint | string;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragSimpleAction {
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

      /**
       * Typed drag advanced action
       */
      export interface TypedDragAdvancedAction {
        /**
         * Path of the drag action as a series of coordinates
         */
        path: Array<TypedDragAdvancedAction.Path>;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragAdvancedAction {
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

      /**
       * Typed wait action
       */
      export interface TypedWaitAction {
        /**
         * Duration of the wait (e.g. '3s')
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 3s
         */
        duration: string;

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
        options?: ActionsAPI.ActionCommonOptions;

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
   * Result of AI action execution
   */
  export interface AIActionResult {
    /**
     * Response of AI action execution
     */
    aiResponse: AIActionResult.AIResponse;

    /**
     * output
     */
    output: string;
  }

  export namespace AIActionResult {
    /**
     * Response of AI action execution
     */
    export interface AIResponse {
      /**
       * Actions to be executed by the AI with type identifier
       */
      actions: Array<
        | AIResponse.TypedClickAction
        | AIResponse.TypedTouchAction
        | AIResponse.TypedDragAdvancedAction
        | AIResponse.TypedDragSimpleAction
        | AIResponse.TypedScrollAction
        | AIResponse.TypedScrollSimpleAction
        | AIResponse.TypedSwipeSimpleAction
        | AIResponse.TypedSwipeAdvancedAction
        | AIResponse.TypedPressKeyAction
        | AIResponse.TypedPressButtonAction
        | AIResponse.TypedLongPressAction
        | AIResponse.TypedTypeAction
        | AIResponse.TypedMoveAction
        | AIResponse.TypedScreenRotationAction
        | AIResponse.TypedScreenshotAction
        | AIResponse.TypedDragSimpleAction
        | AIResponse.TypedDragAdvancedAction
        | AIResponse.TypedWaitAction
      >;

      /**
       * messages returned by the model
       */
      messages: Array<string>;

      /**
       * The name of the model that processed this request
       */
      model: string;

      /**
       * reasoning
       */
      reasoning?: string;
    }

    export namespace AIResponse {
      /**
       * Typed click action
       */
      export interface TypedClickAction {
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
         * Action common options
         */
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed touch action
       */
      export interface TypedTouchAction {
        /**
         * Array of touch points and their actions
         */
        points: Array<TypedTouchAction.Point>;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedTouchAction {
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
       * Typed drag advanced action
       */
      export interface TypedDragAdvancedAction {
        /**
         * Path of the drag action as a series of coordinates
         */
        path: Array<TypedDragAdvancedAction.Path>;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragAdvancedAction {
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

      /**
       * Typed drag simple action
       */
      export interface TypedDragSimpleAction {
        /**
         * End point of the drag path (coordinates or natural language)
         */
        end: TypedDragSimpleAction.DragPathPoint | string;

        /**
         * Start point of the drag path (coordinates or natural language)
         */
        start: TypedDragSimpleAction.DragPathPoint | string;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragSimpleAction {
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

      /**
       * Typed scroll action
       */
      export interface TypedScrollAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed scroll simple action
       */
      export interface TypedScrollSimpleAction {
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
         * Action common options
         */
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed swipe simple action
       */
      export interface TypedSwipeSimpleAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed swipe advanced action
       */
      export interface TypedSwipeAdvancedAction {
        /**
         * End point of the swipe path (coordinates or natural language)
         */
        end: TypedSwipeAdvancedAction.SwipePath | string;

        /**
         * Start point of the swipe path (coordinates or natural language)
         */
        start: TypedSwipeAdvancedAction.SwipePath | string;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedSwipeAdvancedAction {
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

      /**
       * Typed press key action
       */
      export interface TypedPressKeyAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed press button action
       */
      export interface TypedPressButtonAction {
        /**
         * Button to press
         */
        buttons: Array<
          'power' | 'volumeUp' | 'volumeDown' | 'volumeMute' | 'home' | 'back' | 'menu' | 'appSwitch'
        >;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed long press action
       */
      export interface TypedLongPressAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed type action
       */
      export interface TypedTypeAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed move action
       */
      export interface TypedMoveAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed screen rotation action
       */
      export interface TypedScreenRotationAction {
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
        options?: ActionsAPI.ActionCommonOptions;

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

      /**
       * Typed screenshot action
       */
      export interface TypedScreenshotAction {
        /**
         * Clipping region for screenshot capture
         */
        clip?: TypedScreenshotAction.Clip;

        /**
         * Type of the URI. default is base64.
         */
        outputFormat?: 'base64' | 'storageKey';

        /**
         * Presigned url expires in. Only takes effect when outputFormat is storageKey.
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
        scrollCapture?: TypedScreenshotAction.ScrollCapture;
      }

      export namespace TypedScreenshotAction {
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

      /**
       * Typed drag simple action
       */
      export interface TypedDragSimpleAction {
        /**
         * End point of the drag path (coordinates or natural language)
         */
        end: TypedDragSimpleAction.DragPathPoint | string;

        /**
         * Start point of the drag path (coordinates or natural language)
         */
        start: TypedDragSimpleAction.DragPathPoint | string;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragSimpleAction {
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

      /**
       * Typed drag advanced action
       */
      export interface TypedDragAdvancedAction {
        /**
         * Path of the drag action as a series of coordinates
         */
        path: Array<TypedDragAdvancedAction.Path>;

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
        options?: ActionsAPI.ActionCommonOptions;

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

      export namespace TypedDragAdvancedAction {
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

      /**
       * Typed wait action
       */
      export interface TypedWaitAction {
        /**
         * Duration of the wait (e.g. '3s')
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 3s
         */
        duration: string;

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
        options?: ActionsAPI.ActionCommonOptions;

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
  }
}

export type ActionClipboardGetResponse = string;

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

export interface ActionAIParams {
  /**
   * Direct instruction of the UI action to perform (e.g., 'click the login button',
   * 'input username in the email field', 'scroll down', 'swipe left')
   */
  instruction: string;

  /**
   * The background of the UI action to perform. The purpose of background is to let
   * the action executor to understand the context of why the instruction is given
   * including important previous actions and observations
   */
  background?: string;

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

  /**
   * AI action settings
   */
  settings?: ActionAIParams.Settings;

  /**
   * Whether to stream progress events using Server-Sent Events (SSE). When true, the
   * API returns an event stream. When false or omitted, the API returns a normal
   * JSON response.
   */
  stream?: boolean;
}

export namespace ActionAIParams {
  /**
   * AI action settings
   */
  export interface Settings {
    /**
     * Whether disable actions
     */
    disableActions?: Array<string>;

    /**
     * System prompt that defines the AI's behavior and capabilities when executing UI
     * actions. This prompt instructs the AI on how to interpret the screen, understand
     * user instructions, and determine the appropriate UI actions to take. A
     * well-crafted system prompt can significantly improve the accuracy and
     * reliability of AI-driven UI automation. If not provided, uses the default
     * computer use instruction template that includes basic screen interaction
     * guidelines.
     */
    systemPrompt?: string;
  }
}

export type ActionClickParams = ActionClickParams.Click | ActionClickParams.ClickByNaturalLanguage;

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
  | ActionLongPressParams.LongPressByNaturalLanguage;

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

export type ActionTapParams = ActionTapParams.Tap | ActionTapParams.TapByNaturalLanguage;

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
    type ActionAIResponse as ActionAIResponse,
    type ActionClipboardGetResponse as ActionClipboardGetResponse,
    type ActionExtractResponse as ActionExtractResponse,
    type ActionRecordingStopResponse as ActionRecordingStopResponse,
    type ActionRewindExtractResponse as ActionRewindExtractResponse,
    type ActionScreenLayoutResponse as ActionScreenLayoutResponse,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionSettingsResponse as ActionSettingsResponse,
    type ActionSettingsResetResponse as ActionSettingsResetResponse,
    type ActionSettingsUpdateResponse as ActionSettingsUpdateResponse,
    type ActionAIParams as ActionAIParams,
    type ActionClickParams as ActionClickParams,
    type ActionClipboardSetParams as ActionClipboardSetParams,
    type ActionDragParams as ActionDragParams,
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
