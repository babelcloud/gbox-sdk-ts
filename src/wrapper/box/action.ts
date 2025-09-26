import type {
  ActionClickParams,
  ActionDragParams,
  ActionMoveParams,
  ActionScreenshotParams,
  ActionScrollParams,
  ActionTouchParams,
  ActionTypeParams,
  ActionPressKeyParams,
  ActionPressButtonParams,
  ActionSwipeParams,
  ActionScreenRotationParams,
  ActionAIParams,
  ActionTapParams,
  ActionLongPressParams,
  ActionSettingsUpdateParams,
  ActionRewindExtractParams,
  ActionRewindExtractResponse,
  ActionResult,
  ActionScreenshotOptions,
  ActionAIResponse,
  ActionClipboardSetParams,
  ActionElementsDetectParams,
  DetectedElement,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { TimeString } from '../types';
import path from 'path';
import fs from 'fs';

// Helper types for precise overload return types
type ClickScreenshotShape = NonNullable<ActionResult['screenshot']>;

// Generic helpers for other action responses
type ScreenshotShapeOf<R extends { screenshot?: any }> = NonNullable<R['screenshot']>;
type ScreenshotAllRequiredOf<R extends { screenshot?: any }> = {
  before: NonNullable<ScreenshotShapeOf<R>['before']>;
  after: NonNullable<ScreenshotShapeOf<R>['after']>;
  trace: NonNullable<ScreenshotShapeOf<R>['trace']>;
};
type ScreenshotPickOf<R extends { screenshot?: any }, K extends 'before' | 'after' | 'trace'> = {
  [P in K]: NonNullable<ScreenshotShapeOf<R>[P]>;
};

// Override ActionScreenshotOption to use TimeString for delay and presignedExpiresIn
type ActionScreenshotOptionOverride = Omit<ActionScreenshotOptions, 'delay' | 'presignedExpiresIn'> & {
  delay?: TimeString;
  presignedExpiresIn?: TimeString;
};

// Override options.screenshot in all action types
export type ActionCommonOptions = {
  screenshot?: boolean | ActionScreenshotOptionOverride;
};

// Helper to ensure options is an object type and not a primitive
// This prevents {} from accepting primitives like strings
type EnsureObject<T> = T & Record<string, unknown>;

// Common overload patterns to reduce repetition
type ActionBodyWithOptions<T> = T & { options?: undefined };
type ActionBodyWithScreenshotUndefined<T> = T & { options: { screenshot?: undefined } };
type ActionBodyWithScreenshotFalse<T> = T & { options: { screenshot: false } };
type ActionBodyWithScreenshotTrue<T> = T & { options: { screenshot: true } };
type ActionBodyWithScreenshotObject<T> = T & { options: { screenshot: ActionScreenshotOptionOverride } };
type ActionBodyWithScreenshotBoolean<T> = T & { options: { screenshot: boolean } };
type ActionBodyWithScreenshotPhases<T, K extends ReadonlyArray<'before' | 'after' | 'trace'>> = T & {
  options: { screenshot: { phases: K } & Partial<ActionScreenshotOptionOverride> };
};
type ActionBodyGeneric<T> = T & {
  options: {
    screenshot?:
      | boolean
      | ActionScreenshotOptionOverride
      | { phases: ReadonlyArray<'before' | 'after' | 'trace'> }
      | undefined;
  };
};

// Common return types
type ActionResultWithScreenshot = {
  message: string;
  actionId: string;
  screenshot: ScreenshotAllRequiredOf<ActionResult>;
};

// Helper type to omit deprecated parameters from action params
type OmitDeprecatedParams<T> = Omit<
  T,
  'includeScreenshot' | 'outputFormat' | 'presignedExpiresIn' | 'screenshotDelay' | 'options'
>;

export interface ActionClickByPoint extends OmitDeprecatedParams<ActionClickParams.Click> {
  options?: EnsureObject<
    ActionCommonOptions & Omit<NonNullable<ActionClickParams.Click['options']>, 'screenshot'>
  >;
}

export interface ActionClickByNaturalLanguage
  extends OmitDeprecatedParams<ActionClickParams.ClickByNaturalLanguage> {
  options?: EnsureObject<
    ActionCommonOptions & Omit<NonNullable<ActionClickParams.ClickByNaturalLanguage['options']>, 'screenshot'>
  >;
}

export interface ActionClickByElement extends OmitDeprecatedParams<ActionClickParams.ClickByElement> {
  options?: EnsureObject<
    ActionCommonOptions & Omit<NonNullable<ActionClickParams.ClickByElement['options']>, 'screenshot'>
  >;
}
export type ActionClick = ActionClickByPoint | ActionClickByNaturalLanguage | ActionClickByElement;

export interface ActionDragSimple extends OmitDeprecatedParams<ActionDragParams.DragSimple> {
  screenshotDelay?: TimeString;

  options?: ActionCommonOptions & Omit<NonNullable<ActionDragParams.DragSimple['options']>, 'screenshot'>;
}

export interface ActionDragAdvanced extends OmitDeprecatedParams<ActionDragParams.DragAdvanced> {
  screenshotDelay?: TimeString;

  options?: ActionCommonOptions & Omit<NonNullable<ActionDragParams.DragAdvanced['options']>, 'screenshot'>;
}

export type ActionDrag = ActionDragSimple | ActionDragAdvanced;

export interface ActionMove extends OmitDeprecatedParams<ActionMoveParams> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionMoveParams['options']>, 'screenshot'>;
}

export interface ActionScrollAdvanced extends OmitDeprecatedParams<ActionScrollParams.ScrollAdvanced> {
  options?: ActionCommonOptions &
    Omit<NonNullable<ActionScrollParams.ScrollAdvanced['options']>, 'screenshot'>;
}

export interface ActionScrollSimple extends OmitDeprecatedParams<ActionScrollParams.ScrollSimple> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionScrollParams.ScrollSimple['options']>, 'screenshot'>;
}

export type ActionScroll = ActionScrollSimple | ActionScrollAdvanced;

export interface ActionTapByPoint extends OmitDeprecatedParams<ActionTapParams.Tap> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionTapParams.Tap['options']>, 'screenshot'>;
}

export interface ActionTapByNaturalLanguage
  extends OmitDeprecatedParams<ActionTapParams.TapByNaturalLanguage> {
  options?: ActionCommonOptions &
    Omit<NonNullable<ActionTapParams.TapByNaturalLanguage['options']>, 'screenshot'>;
}

export interface ActionTapByElement extends OmitDeprecatedParams<ActionTapParams.TapByElement> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionTapParams.TapByElement['options']>, 'screenshot'>;
}

export type ActionTap = ActionTapByPoint | ActionTapByNaturalLanguage | ActionTapByElement;

export interface ActionLongPressByPoint extends OmitDeprecatedParams<ActionLongPressParams.LongPress> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionLongPressParams.LongPress['options']>, 'screenshot'>;
}

export interface ActionLongPressByNaturalLanguage
  extends OmitDeprecatedParams<ActionLongPressParams.LongPressByNaturalLanguage> {
  screenshotDelay?: TimeString;

  options?: ActionCommonOptions &
    Omit<NonNullable<ActionLongPressParams.LongPressByNaturalLanguage['options']>, 'screenshot'>;
}

export interface ActionLongPressByElement
  extends OmitDeprecatedParams<ActionLongPressParams.LongPressByElement> {
  options?: ActionCommonOptions &
    Omit<NonNullable<ActionLongPressParams.LongPressByElement['options']>, 'screenshot'>;
}

export type ActionLongPress =
  | ActionLongPressByPoint
  | ActionLongPressByNaturalLanguage
  | ActionLongPressByElement;

export interface ActionTouch extends OmitDeprecatedParams<ActionTouchParams> {
  screenshotDelay?: TimeString;

  options?: ActionCommonOptions & Omit<NonNullable<ActionTouchParams['options']>, 'screenshot'>;
}

export interface ActionType extends OmitDeprecatedParams<ActionTypeParams> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionTypeParams['options']>, 'screenshot'>;
}

export interface ActionPressButton extends OmitDeprecatedParams<ActionPressButtonParams> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionPressButtonParams['options']>, 'screenshot'>;
}

export interface ActionPressKey extends OmitDeprecatedParams<ActionPressKeyParams> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionPressKeyParams['options']>, 'screenshot'>;
}

export interface ActionSwipeSimple extends OmitDeprecatedParams<ActionSwipeParams.SwipeSimple> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionSwipeParams.SwipeSimple['options']>, 'screenshot'>;
}

export interface ActionSwipeAdvanced extends OmitDeprecatedParams<ActionSwipeParams.SwipeAdvanced> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionSwipeParams.SwipeAdvanced['options']>, 'screenshot'>;
}

export type ActionSwipe = ActionSwipeSimple | ActionSwipeAdvanced;

export interface ActionScreenshot extends ActionScreenshotParams {
  /**
   * The path to save the screenshot to.
   * If not provided, the screenshot will not be saved to the local file system.
   */
  path?: string;
}

export interface ActionAI extends OmitDeprecatedParams<ActionAIParams> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionAIParams['options']>, 'screenshot'>;
}

export interface ActionScreenRotation extends OmitDeprecatedParams<ActionScreenRotationParams> {
  options?: ActionCommonOptions & Omit<NonNullable<ActionScreenRotationParams['options']>, 'screenshot'>;
}

export class ActionOperator {
  private client: GboxClient;
  private boxId: string;
  public recording: RecordingOperator;
  public clipboard: ClipboardOperator;
  public elements: ElementsOperator;
  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
    this.recording = new RecordingOperator(client, boxId);
    this.clipboard = new ClipboardOperator(client, boxId);
    this.elements = new ElementsOperator(client, boxId);
  }

  /**
   * @example
   * const response = await myBox.action.ai("Click on the login button");
   */
  async ai(
    body: string | ActionAI,
    { onActionStart, onActionEnd }: { onActionStart?: () => void; onActionEnd?: () => void } = {},
  ): Promise<ActionAIResponse> {
    const params: ActionAIParams = typeof body === 'string' ? { instruction: body } : body;

    if (onActionStart || onActionEnd) {
      const hooks: { onActionStart?: () => void; onActionEnd?: () => void } = {};
      if (onActionStart) hooks.onActionStart = onActionStart;
      if (onActionEnd) hooks.onActionEnd = onActionEnd;
      return this.aiStream(params, hooks);
    }

    return this.client.post<ActionAIResponse>(`/boxes/${encodeURIComponent(this.boxId)}/actions/ai`, {
      body: params,
      headers: { Accept: '*/*' },
    });
  }

  private async aiStream(
    params: ActionAIParams,
    { onActionStart, onActionEnd }: { onActionStart?: () => void; onActionEnd?: () => void },
  ): Promise<ActionAIResponse> {
    const apiPromise = this.client.post(`/boxes/${encodeURIComponent(this.boxId)}/actions/ai`, {
      body: { ...params, stream: true },
      headers: { Accept: 'text/event-stream' },
      stream: true,
    });

    const response = await apiPromise.asResponse();

    if (!response.body) {
      throw new Error('Unable to obtain response body stream');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let result: ActionAIResponse | null = null;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let separatorIndex: number;
      while ((separatorIndex = buffer.indexOf('\n\n')) !== -1) {
        const rawEvent = buffer.slice(0, separatorIndex).trim();
        buffer = buffer.slice(separatorIndex + 2);

        if (!rawEvent) continue;

        let eventName = '';
        const dataLines: string[] = [];

        for (const line of rawEvent.split('\n')) {
          if (line.startsWith('event:')) {
            eventName = line.slice('event:'.length).trim();
          } else if (line.startsWith('data:')) {
            dataLines.push(line.slice('data:'.length).trim());
          }
        }

        const dataStr = dataLines.join('\n');

        switch (eventName) {
          case 'before':
            onActionStart?.();
            break;
          case 'after':
            onActionEnd?.();
            break;
          case 'result':
            result = JSON.parse(dataStr) as ActionAIResponse;
            break;
          case 'error':
            const errorData = JSON.parse(dataStr);
            throw new Error(`AI action error: ${errorData.message || 'Unknown error'}`);
        }
      }
    }

    if (result === null) {
      throw new Error('No result event received from stream');
    }

    return result;
  }
  /**
   * @example
   * const response = await myBox.action.click({ x: 100, y: 100 });
   */
  async click(body: ActionBodyWithScreenshotFalse<ActionClick>): Promise<{ message: string }>;
  async click(body: ActionBodyWithScreenshotUndefined<ActionClick>): Promise<ActionResult>;
  async click(body: ActionBodyWithScreenshotTrue<ActionClick>): Promise<ActionResultWithScreenshot>;
  async click(
    body: ActionBodyWithScreenshotBoolean<ActionClick>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async click<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionClick, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: { [P in K[number]]: NonNullable<ClickScreenshotShape[P]> };
  }>;
  async click(body: ActionBodyWithScreenshotObject<ActionClick>): Promise<ActionResultWithScreenshot>;
  async click(body: ActionBodyWithOptions<ActionClick>): Promise<ActionResult>;
  async click(body: ActionBodyGeneric<ActionClick>): Promise<ActionResult>;
  async click(body: ActionClick) {
    return this.client.v1.boxes.actions.click(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.drag(
   *   {
   *     path: [
   *       { x: 100, y: 100 },
   *       { x: 200, y: 200 },
   *     ],
   *   }
   * );
   */
  async drag(body: ActionBodyWithScreenshotFalse<ActionDrag>): Promise<{ message: string }>;
  async drag(body: ActionBodyWithScreenshotUndefined<ActionDrag>): Promise<ActionResult>;
  async drag(body: ActionBodyWithScreenshotTrue<ActionDrag>): Promise<ActionResultWithScreenshot>;
  async drag(
    body: ActionBodyWithScreenshotBoolean<ActionDrag>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async drag<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionDrag, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async drag(body: ActionBodyWithScreenshotObject<ActionDrag>): Promise<ActionResultWithScreenshot>;
  async drag(body: ActionBodyWithOptions<ActionDrag>): Promise<ActionResult>;
  async drag(body: ActionBodyGeneric<ActionDrag>): Promise<ActionResult>;
  async drag(body: ActionDrag) {
    return this.client.v1.boxes.actions.drag(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.swipe({ direction: 'up' });
   */
  async swipe(body: ActionBodyWithScreenshotFalse<ActionSwipe>): Promise<{ message: string }>;
  async swipe(body: ActionBodyWithScreenshotUndefined<ActionSwipe>): Promise<ActionResult>;
  async swipe(body: ActionBodyWithScreenshotTrue<ActionSwipe>): Promise<ActionResultWithScreenshot>;
  async swipe(
    body: ActionBodyWithScreenshotBoolean<ActionSwipe>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async swipe<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionSwipe, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async swipe(body: ActionBodyWithScreenshotObject<ActionSwipe>): Promise<ActionResultWithScreenshot>;
  async swipe(body: ActionBodyWithOptions<ActionSwipe>): Promise<ActionResult>;
  async swipe(body: ActionBodyGeneric<ActionSwipe>): Promise<ActionResult>;
  async swipe(body: ActionSwipe) {
    return this.client.v1.boxes.actions.swipe(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.pressKey({ keys: ['enter'] });
   */
  async pressKey(body: ActionBodyWithScreenshotFalse<ActionPressKey>): Promise<{ message: string }>;
  async pressKey(body: ActionBodyWithScreenshotUndefined<ActionPressKey>): Promise<ActionResult>;
  async pressKey(body: ActionBodyWithScreenshotTrue<ActionPressKey>): Promise<ActionResultWithScreenshot>;
  async pressKey(
    body: ActionBodyWithScreenshotBoolean<ActionPressKey>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async pressKey<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionPressKey, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async pressKey(body: ActionBodyWithScreenshotObject<ActionPressKey>): Promise<ActionResultWithScreenshot>;
  async pressKey(body: ActionBodyWithOptions<ActionPressKey>): Promise<ActionResult>;
  async pressKey(body: ActionBodyGeneric<ActionPressKey>): Promise<ActionResult>;
  async pressKey(body: ActionPressKey) {
    return this.client.v1.boxes.actions.pressKey(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.pressButton({ buttons: ['power']});
   */
  async pressButton(body: ActionBodyWithScreenshotFalse<ActionPressButton>): Promise<{ message: string }>;
  async pressButton(body: ActionBodyWithScreenshotUndefined<ActionPressButton>): Promise<ActionResult>;
  async pressButton(
    body: ActionBodyWithScreenshotTrue<ActionPressButton>,
  ): Promise<ActionResultWithScreenshot>;
  async pressButton(
    body: ActionBodyWithScreenshotBoolean<ActionPressButton>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async pressButton<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionPressButton, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async pressButton(
    body: ActionBodyWithScreenshotObject<ActionPressButton>,
  ): Promise<ActionResultWithScreenshot>;
  async pressButton(body: ActionBodyWithOptions<ActionPressButton>): Promise<ActionResult>;
  async pressButton(body: ActionBodyGeneric<ActionPressButton>): Promise<ActionResult>;
  async pressButton(body: ActionPressButton) {
    return this.client.v1.boxes.actions.pressButton(this.boxId, body);
  }
  /**
   * @example
   * const response = await myBox.action.move({ x: 200, y: 300 });
   */
  async move(body: ActionBodyWithScreenshotFalse<ActionMove>): Promise<{ message: string }>;
  async move(body: ActionBodyWithScreenshotUndefined<ActionMove>): Promise<ActionResult>;
  async move(body: ActionBodyWithScreenshotTrue<ActionMove>): Promise<ActionResultWithScreenshot>;
  async move(
    body: ActionBodyWithScreenshotBoolean<ActionMove>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async move<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionMove, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async move(body: ActionBodyWithScreenshotObject<ActionMove>): Promise<ActionResultWithScreenshot>;
  async move(body: ActionBodyWithOptions<ActionMove>): Promise<ActionResult>;
  async move(body: ActionBodyGeneric<ActionMove>): Promise<ActionResult>;
  async move(body: ActionMove) {
    return this.client.v1.boxes.actions.move(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.tap({ x: 100, y: 100 });
   */
  async tap(body: ActionBodyWithScreenshotFalse<ActionTap>): Promise<{ message: string }>;
  async tap(body: ActionBodyWithScreenshotUndefined<ActionTap>): Promise<ActionResult>;
  async tap(body: ActionBodyWithScreenshotTrue<ActionTap>): Promise<ActionResultWithScreenshot>;
  async tap(
    body: ActionBodyWithScreenshotBoolean<ActionTap>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async tap<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionTap, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async tap(body: ActionBodyWithScreenshotObject<ActionTap>): Promise<ActionResultWithScreenshot>;
  async tap(body: ActionBodyWithOptions<ActionTap>): Promise<ActionResult>;
  async tap(body: ActionBodyGeneric<ActionTap>): Promise<ActionResult>;
  async tap(body: ActionTap) {
    return this.client.v1.boxes.actions.tap(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.longPress({ x: 100, y: 100 });
   */
  async longPress(body: ActionBodyWithScreenshotFalse<ActionLongPress>): Promise<{ message: string }>;
  async longPress(body: ActionBodyWithScreenshotUndefined<ActionLongPress>): Promise<ActionResult>;
  async longPress(body: ActionBodyWithScreenshotTrue<ActionLongPress>): Promise<ActionResultWithScreenshot>;
  async longPress(
    body: ActionBodyWithScreenshotBoolean<ActionLongPress>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async longPress<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionLongPress, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async longPress(body: ActionBodyWithScreenshotObject<ActionLongPress>): Promise<ActionResultWithScreenshot>;
  async longPress(body: ActionBodyWithOptions<ActionLongPress>): Promise<ActionResult>;
  async longPress(body: ActionBodyGeneric<ActionLongPress>): Promise<ActionResult>;
  async longPress(body: ActionLongPress) {
    return this.client.v1.boxes.actions.longPress(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.scroll({ direction: 'up' });
   * const response = await myBox.action.scroll({ scrollX: 0, scrollY: 100, x: 100, y: 100 });
   */
  async scroll(body: ActionBodyWithScreenshotFalse<ActionScroll>): Promise<{ message: string }>;
  async scroll(body: ActionBodyWithScreenshotUndefined<ActionScroll>): Promise<ActionResult>;
  async scroll(body: ActionBodyWithScreenshotTrue<ActionScroll>): Promise<ActionResultWithScreenshot>;
  async scroll(
    body: ActionBodyWithScreenshotBoolean<ActionScroll>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async scroll<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionScroll, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async scroll(body: ActionBodyWithScreenshotObject<ActionScroll>): Promise<ActionResultWithScreenshot>;
  async scroll(body: ActionBodyWithOptions<ActionScroll>): Promise<ActionResult>;
  async scroll(body: ActionBodyGeneric<ActionScroll>): Promise<ActionResult>;
  async scroll(body: ActionScroll) {
    return this.client.v1.boxes.actions.scroll(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.touch({ points: [{ start: { x: 0, y: 0 } }] });
   */
  async touch(body: ActionBodyWithScreenshotFalse<ActionTouch>): Promise<{ message: string }>;
  async touch(body: ActionBodyWithScreenshotUndefined<ActionTouch>): Promise<ActionResult>;
  async touch(body: ActionBodyWithScreenshotTrue<ActionTouch>): Promise<ActionResultWithScreenshot>;
  async touch(
    body: ActionBodyWithScreenshotBoolean<ActionTouch>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async touch<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionTouch, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async touch(body: ActionBodyWithScreenshotObject<ActionTouch>): Promise<ActionResultWithScreenshot>;
  async touch(body: ActionBodyWithOptions<ActionTouch>): Promise<ActionResult>;
  async touch(body: ActionBodyGeneric<ActionTouch>): Promise<ActionResult>;
  async touch(body: ActionTouch) {
    return this.client.v1.boxes.actions.touch(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.type({ text: 'Hello, World!' });
   */
  async type(body: ActionBodyWithScreenshotFalse<ActionType>): Promise<{ message: string }>;
  async type(body: ActionBodyWithScreenshotUndefined<ActionType>): Promise<ActionResult>;
  async type(body: ActionBodyWithScreenshotTrue<ActionType>): Promise<ActionResultWithScreenshot>;
  async type(
    body: ActionBodyWithScreenshotBoolean<ActionType>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async type<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionType, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async type(body: ActionBodyWithScreenshotObject<ActionType>): Promise<ActionResultWithScreenshot>;
  async type(body: ActionBodyWithOptions<ActionType>): Promise<ActionResult>;
  async type(body: ActionBodyGeneric<ActionType>): Promise<ActionResult>;
  async type(body: ActionType) {
    return this.client.v1.boxes.actions.type(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.screenRotation({ orientation: 'landscapeLeft' });
   */
  async screenRotation(
    body: ActionBodyWithScreenshotFalse<ActionScreenRotation>,
  ): Promise<{ message: string }>;
  async screenRotation(body: ActionBodyWithScreenshotUndefined<ActionScreenRotation>): Promise<ActionResult>;
  async screenRotation(
    body: ActionBodyWithScreenshotTrue<ActionScreenRotation>,
  ): Promise<ActionResultWithScreenshot>;
  async screenRotation(
    body: ActionBodyWithScreenshotBoolean<ActionScreenRotation>,
  ): Promise<{ message: string } | ActionResultWithScreenshot>;
  async screenRotation<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotPhases<ActionScreenRotation, K>,
  ): Promise<{
    message: string;
    actionId: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async screenRotation(
    body: ActionBodyWithScreenshotObject<ActionScreenRotation>,
  ): Promise<ActionResultWithScreenshot>;
  async screenRotation(body: ActionBodyWithOptions<ActionScreenRotation>): Promise<ActionResult>;
  async screenRotation(body: ActionBodyGeneric<ActionScreenRotation>): Promise<ActionResult>;
  async screenRotation(body: ActionScreenRotation) {
    return this.client.v1.boxes.actions.screenRotation(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.screenshot();
   * or
   * const response = await myBox.action.screenshot({ outputFormat: 'base64' });
   */
  async screenshot(body?: ActionScreenshot) {
    const res = await this.client.v1.boxes.actions.screenshot(this.boxId, body || { outputFormat: 'base64' });

    // Save screenshot to file if path is provided
    if (body?.path) {
      this.saveDataUrlToFile(res.uri, body.path);
    }

    return res;
  }

  /**
   * @example
   * const response = await myBox.action.screenLayout();
   */
  async screenLayout() {
    return this.client.v1.boxes.actions.screenLayout(this.boxId);
  }

  /**
   * @deprecated please use {@link ActionOperator.screenRecordingStart} instead.
   * @example
   * const response = await myBox.action.screenRecordingStart();
   */
  async screenRecordingStart() {
    return this.client.v1.boxes.actions.recordingStart(this.boxId);
  }

  /**
   * @deprecated please use {@link ActionOperator.screenRecordingStart} instead.
   * @example
   * const response = await myBox.action.screenRecordingStop();
   */
  async screenRecordingStop() {
    return this.client.v1.boxes.actions.recordingStop(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.action.getSetting();
   */
  async getSettings() {
    return this.client.v1.boxes.actions.settings(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.action.updateSetting({ scale: 0.5 });
   */
  async updateSettings(body: ActionSettingsUpdateParams) {
    return this.client.v1.boxes.actions.settingsUpdate(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.resetSetting();
   */
  async resetSettings() {
    return this.client.v1.boxes.actions.settingsReset(this.boxId);
  }

  /**
   * Save base64 data in data URL format to a file
   * @param dataUrl - data URL string, format like "data:image/png;base64,iVBORw0KGgoAAAA..."
   * @param filePath - the file path to save to
   */
  private saveDataUrlToFile(dataUrl: string, filePath: string): void {
    // Check if it's a valid data URL format
    if (!dataUrl.startsWith('data:')) {
      throw new Error('Invalid data URL format');
    }

    const base64Data = dataUrl.split(',')[1];

    if (!base64Data) {
      throw new Error('Invalid data URL format');
    }

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write to file
    fs.writeFileSync(filePath, base64Data, 'base64');
  }
}

export class RecordingOperator {
  private client: GboxClient;
  private boxId: string;
  public rewind: RecordingRewindOperator;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
    this.rewind = new RecordingRewindOperator(client, boxId);
  }

  /**
   * @example
   * const response = await myBox.recording.start();
   */
  async start() {
    return this.client.v1.boxes.actions.recordingStart(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.recording.stop();
   */
  async stop() {
    return this.client.v1.boxes.actions.recordingStop(this.boxId);
  }
}

export class RecordingRewindOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.recording.rewind.enable();
   */
  async enable() {
    return this.client.v1.boxes.actions.rewindEnable(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.recording.rewind.disable();
   */
  async disable() {
    return this.client.v1.boxes.actions.rewindDisable(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.recording.rewind.extract();
   */
  async extract(body?: ActionRewindExtractParams): Promise<ActionRewindExtractResponse> {
    return this.client.v1.boxes.actions.rewindExtract(this.boxId, body || {});
  }
}

export class ClipboardOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.clipboard.get();
   */
  async get() {
    return this.client.v1.boxes.actions.clipboardGet(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.clipboard.set({ content: 'Hello, world!' });
   */
  async set(body: string | ActionClipboardSetParams) {
    return this.client.v1.boxes.actions.clipboardSet(
      this.boxId,
      typeof body === 'string' ? { content: body } : body,
    );
  }
}

export class ElementsOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.elements.detect();
   */
  async detect(params?: ActionElementsDetectParams) {
    const result = await this.client.v1.boxes.actions.elementsDetect(this.boxId, params || {});
    const elementManager = new ElementManager(this.client, this.boxId, result.elements);
    return {
      elements: elementManager,
      screenshot: result.screenshot,
    };
  }
}

export class ElementManager {
  private client: GboxClient;
  private boxId: string;
  public elements: DetectedElement[];

  constructor(client: GboxClient, boxId: string, elements: DetectedElement[]) {
    this.client = client;
    this.boxId = boxId;
    this.elements = elements;
  }

  get(id: string): DetectedElement {
    const element = this.elements.find((element) => element.id === id);
    if (!element) {
      throw new Error(`Element with id ${id} not found`);
    }
    return element;
  }

  list(): DetectedElement[] {
    return this.elements;
  }
}
