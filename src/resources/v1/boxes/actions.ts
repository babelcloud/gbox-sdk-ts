// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Use natural language instructions to perform UI operations on the box. You can
   * describe what you want to do in plain language (e.g., 'click the login button',
   * 'scroll down to find settings', 'input my email address'), and the AI will
   * automatically convert your instruction into the appropriate UI action and
   * execute it on the box.
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
   * Drag
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.drag(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { end: { x: 200, y: 200 }, start: { x: 100, y: 100 } },
   * );
   * ```
   */
  drag(boxID: string, body: ActionDragParams, options?: RequestOptions): APIPromise<ActionDragResponse> {
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
   * Move to position
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.move(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { x: 200, y: 300 },
   * );
   * ```
   */
  move(boxID: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<ActionMoveResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/move`, { body, ...options });
  }

  /**
   * Press button on the device. like power button, volume up button, volume down
   * button, etc.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.pressButton(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { buttons: ['power'] },
   * );
   * ```
   */
  pressButton(
    boxID: string,
    body: ActionPressButtonParams,
    options?: RequestOptions,
  ): APIPromise<ActionPressButtonResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/press-button`, { body, ...options });
  }

  /**
   * Simulates pressing a specific key by triggering the complete keyboard key event
   * chain (keydown, keypress, keyup). Use this to activate keyboard key event
   * listeners such as shortcuts or form submissions.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.pressKey(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { keys: ['enter'] },
   * );
   * ```
   */
  pressKey(
    boxID: string,
    body: ActionPressKeyParams,
    options?: RequestOptions,
  ): APIPromise<ActionPressKeyResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/press-key`, { body, ...options });
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
   * Rotate screen
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.boxes.actions.screenRotation(
   *     'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     { angle: 90, direction: 'clockwise' },
   *   );
   * ```
   */
  screenRotation(
    boxID: string,
    body: ActionScreenRotationParams,
    options?: RequestOptions,
  ): APIPromise<ActionScreenRotationResponse> {
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
   * Scroll
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.actions.scroll(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { scrollX: 0, scrollY: 100, x: 100, y: 100 },
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
   * Touch
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
   * const response = await client.v1.boxes.actions.type(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { text: 'Hello World' },
   * );
   * ```
   */
  type(boxID: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<ActionTypeResponse> {
    return this._client.post(path`/boxes/${boxID}/actions/type`, { body, ...options });
  }
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
     * Response of AI action execution
     */
    aiResponse: AIActionScreenshotResult.AIResponse;

    /**
     * output
     */
    output: string;

    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: AIActionScreenshotResult.Screenshot;
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
        | AIResponse.TypedSwipeSimpleAction
        | AIResponse.TypedSwipeAdvancedAction
        | AIResponse.TypedPressKeyAction
        | AIResponse.TypedPressButtonAction
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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Single point in a drag path
         */
        end: TypedDragSimpleAction.End;

        /**
         * Single point in a drag path
         */
        start: TypedDragSimpleAction.Start;

        /**
         * Duration to complete the movement from start to end coordinates
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
       * Typed scroll action
       */
      export interface TypedScrollAction {
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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Distance of the swipe in pixels. If not provided, the swipe will be performed
         * from the center of the screen to the screen edge
         */
        distance?: number;

        /**
         * Duration of the swipe
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Swipe path
         */
        end: TypedSwipeAdvancedAction.End;

        /**
         * Swipe path
         */
        start: TypedSwipeAdvancedAction.Start;

        /**
         * Duration of the swipe
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Rotation angle in degrees
         */
        angle: 90 | 180 | 270;

        /**
         * Rotation direction
         */
        direction: 'clockwise' | 'counter-clockwise';
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
      }

      /**
       * Typed drag simple action
       */
      export interface TypedDragSimpleAction {
        /**
         * Single point in a drag path
         */
        end: TypedDragSimpleAction.End;

        /**
         * Single point in a drag path
         */
        start: TypedDragSimpleAction.Start;

        /**
         * Duration to complete the movement from start to end coordinates
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
        | AIResponse.TypedSwipeSimpleAction
        | AIResponse.TypedSwipeAdvancedAction
        | AIResponse.TypedPressKeyAction
        | AIResponse.TypedPressButtonAction
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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Single point in a drag path
         */
        end: TypedDragSimpleAction.End;

        /**
         * Single point in a drag path
         */
        start: TypedDragSimpleAction.Start;

        /**
         * Duration to complete the movement from start to end coordinates
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
       * Typed scroll action
       */
      export interface TypedScrollAction {
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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Distance of the swipe in pixels. If not provided, the swipe will be performed
         * from the center of the screen to the screen edge
         */
        distance?: number;

        /**
         * Duration of the swipe
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Swipe path
         */
        end: TypedSwipeAdvancedAction.End;

        /**
         * Swipe path
         */
        start: TypedSwipeAdvancedAction.Start;

        /**
         * Duration of the swipe
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Rotation angle in degrees
         */
        angle: 90 | 180 | 270;

        /**
         * Rotation direction
         */
        direction: 'clockwise' | 'counter-clockwise';
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
      }

      /**
       * Typed drag simple action
       */
      export interface TypedDragSimpleAction {
        /**
         * Single point in a drag path
         */
        end: TypedDragSimpleAction.End;

        /**
         * Single point in a drag path
         */
        start: TypedDragSimpleAction.Start;

        /**
         * Duration to complete the movement from start to end coordinates
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
         */
        duration?: string;

        /**
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         * Whether to include screenshots in the action response. If false, the screenshot
         * object will still be returned but with empty URIs. Default is false.
         */
        includeScreenshot?: boolean;

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
         *
         * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
         * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
         */
        screenshotDelay?: string;
      }
    }
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionClickResponse =
  | ActionClickResponse.ActionIncludeScreenshotResult
  | ActionClickResponse.ActionCommonResult;

export namespace ActionClickResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionDragResponse =
  | ActionDragResponse.ActionIncludeScreenshotResult
  | ActionDragResponse.ActionCommonResult;

export namespace ActionDragResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
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
 * Result of an UI action execution with screenshots
 */
export type ActionMoveResponse =
  | ActionMoveResponse.ActionIncludeScreenshotResult
  | ActionMoveResponse.ActionCommonResult;

export namespace ActionMoveResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionPressButtonResponse =
  | ActionPressButtonResponse.ActionIncludeScreenshotResult
  | ActionPressButtonResponse.ActionCommonResult;

export namespace ActionPressButtonResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionPressKeyResponse =
  | ActionPressKeyResponse.ActionIncludeScreenshotResult
  | ActionPressKeyResponse.ActionCommonResult;

export namespace ActionPressKeyResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

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
 * Result of an UI action execution with screenshots
 */
export type ActionScreenRotationResponse =
  | ActionScreenRotationResponse.ActionIncludeScreenshotResult
  | ActionScreenRotationResponse.ActionCommonResult;

export namespace ActionScreenRotationResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
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

/**
 * Result of an UI action execution with screenshots
 */
export type ActionScrollResponse =
  | ActionScrollResponse.ActionIncludeScreenshotResult
  | ActionScrollResponse.ActionCommonResult;

export namespace ActionScrollResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionSwipeResponse =
  | ActionSwipeResponse.ActionIncludeScreenshotResult
  | ActionSwipeResponse.ActionCommonResult;

export namespace ActionSwipeResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionTouchResponse =
  | ActionTouchResponse.ActionIncludeScreenshotResult
  | ActionTouchResponse.ActionCommonResult;

export namespace ActionTouchResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
}

/**
 * Result of an UI action execution with screenshots
 */
export type ActionTypeResponse =
  | ActionTypeResponse.ActionIncludeScreenshotResult
  | ActionTypeResponse.ActionCommonResult;

export namespace ActionTypeResponse {
  /**
   * Result of an UI action execution with screenshots
   */
  export interface ActionIncludeScreenshotResult {
    /**
     * Complete screenshot result with operation trace, before and after images
     */
    screenshot: ActionIncludeScreenshotResult.Screenshot;
  }

  export namespace ActionIncludeScreenshotResult {
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
   * Result of an UI action execution
   */
  export interface ActionCommonResult {
    /**
     * message
     */
    message: string;
  }
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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;

  /**
   * AI action settings
   */
  settings?: ActionAIParams.Settings;
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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
}

export type ActionDragParams = ActionDragParams.DragSimple | ActionDragParams.DragAdvanced;

export declare namespace ActionDragParams {
  export interface DragSimple {
    /**
     * Single point in a drag path
     */
    end: DragSimple.End;

    /**
     * Single point in a drag path
     */
    start: DragSimple.Start;

    /**
     * Duration to complete the movement from start to end coordinates
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * Whether to include screenshots in the action response. If false, the screenshot
     * object will still be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

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
     * Whether to include screenshots in the action response. If false, the screenshot
     * object will still be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
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
     * Distance of the swipe in pixels. If not provided, the swipe will be performed
     * from the center of the screen to the screen edge
     */
    distance?: number;

    /**
     * Duration of the swipe
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * Whether to include screenshots in the action response. If false, the screenshot
     * object will still be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

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
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
     */
    screenshotDelay?: string;
  }

  export interface SwipeAdvanced {
    /**
     * Swipe path
     */
    end: SwipeAdvanced.End;

    /**
     * Swipe path
     */
    start: SwipeAdvanced.Start;

    /**
     * Duration of the swipe
     *
     * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
     * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms
     */
    duration?: string;

    /**
     * Whether to include screenshots in the action response. If false, the screenshot
     * object will still be returned but with empty URIs. Default is false.
     */
    includeScreenshot?: boolean;

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
}

export interface ActionTouchParams {
  /**
   * Array of touch points and their actions
   */
  points: Array<ActionTouchParams.Point>;

  /**
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   * Whether to include screenshots in the action response. If false, the screenshot
   * object will still be returned but with empty URIs. Default is false.
   */
  includeScreenshot?: boolean;

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
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 500ms Maximum allowed: 30s
   */
  screenshotDelay?: string;
}

export declare namespace Actions {
  export {
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
}
