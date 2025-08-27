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
  ActionRecordingStartParams,
  ActionTapParams,
  ActionLongPressParams,
  ActionSettingsUpdateParams,
  ActionRewindExtractParams,
  ActionRewindExtractResponse,
  ActionResult,
  ActionScreenshotOptions,
  ActionAIResponse,
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
type ActionOptionsOverride = {
  screenshot?: boolean | ActionScreenshotOptionOverride;
};

// Common overload patterns to reduce repetition
type ActionBodyWithOptions<T> = T & { options?: undefined };
type ActionBodyWithScreenshotUndefined<T> = T & { options: { screenshot?: undefined } };
type ActionBodyWithScreenshotFalse<T> = T & { options: { screenshot?: false } };
type ActionBodyWithScreenshotTrue<T> = T & { options: { screenshot: true } };
type ActionBodyWithScreenshotRange<T, K extends ReadonlyArray<'before' | 'after' | 'trace'>> = T & {
  options: { screenshot: { range: K } };
};

// Common return types
type ActionResultWithScreenshot = {
  message: string;
  screenshot: ScreenshotAllRequiredOf<ActionResult>;
};
type ActionResultWithScreenshotRange<K extends 'before' | 'after' | 'trace'> = {
  message: string;
  screenshot: ScreenshotPickOf<ActionResult, K>;
};

export interface ActionClickByPoint extends ActionClickParams.Click {
  screenshotDelay?: TimeString;

  options?: Omit<ActionClickParams.Click['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionClickByNaturalLanguage extends ActionClickParams.ClickByNaturalLanguage {
  screenshotDelay?: TimeString;

  options?: Omit<ActionClickParams.ClickByNaturalLanguage['options'], 'screenshot'> & ActionOptionsOverride;
}

export type ActionClick = ActionClickByPoint | ActionClickByNaturalLanguage;

export interface ActionDragSimple extends ActionDragParams.DragSimple {
  screenshotDelay?: TimeString;

  options?: Omit<ActionDragParams.DragSimple['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionDragAdvanced extends ActionDragParams.DragAdvanced {
  screenshotDelay?: TimeString;

  options?: Omit<ActionDragParams.DragAdvanced['options'], 'screenshot'> & ActionOptionsOverride;
}

export type ActionDrag = ActionDragSimple | ActionDragAdvanced;

export interface ActionMove extends ActionMoveParams {
  screenshotDelay?: TimeString;

  options?: Omit<ActionMoveParams['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionScrollAdvanced extends ActionScrollParams.ScrollAdvanced {
  screenshotDelay?: TimeString;

  options?: Omit<ActionScrollParams.ScrollAdvanced['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionScrollSimple extends ActionScrollParams.ScrollSimple {
  screenshotDelay?: TimeString;

  options?: Omit<ActionScrollParams.ScrollSimple['options'], 'screenshot'> & ActionOptionsOverride;
}

export type ActionScroll = ActionScrollSimple | ActionScrollAdvanced;

export interface ActionTapByPoint extends ActionTapParams.Tap {
  screenshotDelay?: TimeString;

  options?: Omit<ActionTapParams.Tap['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionTapByNaturalLanguage extends ActionTapParams.TapByNaturalLanguage {
  screenshotDelay?: TimeString;

  options?: Omit<ActionTapParams.TapByNaturalLanguage['options'], 'screenshot'> & ActionOptionsOverride;
}

export type ActionTap = ActionTapByPoint | ActionTapByNaturalLanguage;

export interface ActionLongPressByPoint extends ActionLongPressParams.LongPress {
  screenshotDelay?: TimeString;

  options?: Omit<ActionLongPressParams.LongPress['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionLongPressByNaturalLanguage extends ActionLongPressParams.LongPressByNaturalLanguage {
  screenshotDelay?: TimeString;

  options?: Omit<ActionLongPressParams.LongPressByNaturalLanguage['options'], 'screenshot'> &
    ActionOptionsOverride;
}

export type ActionLongPress = ActionLongPressByPoint | ActionLongPressByNaturalLanguage;

export interface ActionTouch extends ActionTouchParams {
  screenshotDelay?: TimeString;

  options?: Omit<ActionTouchParams['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionType extends ActionTypeParams {
  screenshotDelay?: TimeString;

  options?: Omit<ActionTypeParams['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionPressButton extends ActionPressButtonParams {
  screenshotDelay?: TimeString;

  options?: Omit<ActionPressButtonParams['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionPressKey extends ActionPressKeyParams {
  screenshotDelay?: TimeString;

  options?: Omit<ActionPressKeyParams['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionSwipeSimple extends ActionSwipeParams.SwipeSimple {
  screenshotDelay?: TimeString;

  options?: Omit<ActionSwipeParams.SwipeSimple['options'], 'screenshot'> & ActionOptionsOverride;
}

export interface ActionSwipeAdvanced extends ActionSwipeParams.SwipeAdvanced {
  screenshotDelay?: TimeString;

  options?: Omit<ActionSwipeParams.SwipeAdvanced['options'], 'screenshot'> & ActionOptionsOverride;
}

export type ActionSwipe = ActionSwipeSimple | ActionSwipeAdvanced;

export interface ActionScreenshot extends ActionScreenshotParams {
  /**
   * The path to save the screenshot to.
   * If not provided, the screenshot will not be saved to the local file system.
   */
  path?: string;
}

export interface ActionAI extends ActionAIParams {
  screenshotDelay?: TimeString;

  options?: Omit<ActionAIParams['options'], 'screenshot'> & ActionOptionsOverride;
}

export class ActionOperator {
  private client: GboxClient;
  private boxId: string;
  public recording: RecordingOperator;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
    this.recording = new RecordingOperator(client, boxId);
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
  async click(body: ActionBodyWithOptions<ActionClick>): Promise<ActionResult>;
  async click(body: ActionBodyWithScreenshotUndefined<ActionClick>): Promise<{ message: string }>;
  async click(body: ActionBodyWithScreenshotFalse<ActionClick>): Promise<{ message: string }>;
  async click(body: ActionBodyWithScreenshotTrue<ActionClick>): Promise<ActionResultWithScreenshot>;
  async click<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionClick, K>,
  ): Promise<{
    message: string;
    screenshot: { [P in K[number]]: NonNullable<ClickScreenshotShape[P]> };
  }>;
  async click(body: ActionClick) {
    const response = await this.client.v1.boxes.actions.click(this.boxId, body);
    return response;
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
  async drag(body: ActionBodyWithOptions<ActionDrag>): Promise<ActionResult>;
  async drag(body: ActionBodyWithScreenshotUndefined<ActionDrag>): Promise<{ message: string }>;
  async drag(body: ActionBodyWithScreenshotFalse<ActionDrag>): Promise<{ message: string }>;
  async drag(body: ActionBodyWithScreenshotTrue<ActionDrag>): Promise<ActionResultWithScreenshot>;
  async drag<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionDrag, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async drag(body: ActionDrag) {
    const response = await this.client.v1.boxes.actions.drag(this.boxId, body);
    return response;
  }

  /**
   * @example
   * const response = await myBox.action.swipe({ direction: 'up' });
   */
  async swipe(body: ActionBodyWithOptions<ActionSwipe>): Promise<ActionResult>;
  async swipe(body: ActionBodyWithScreenshotUndefined<ActionSwipe>): Promise<{ message: string }>;
  async swipe(body: ActionBodyWithScreenshotFalse<ActionSwipe>): Promise<{ message: string }>;
  async swipe(body: ActionBodyWithScreenshotTrue<ActionSwipe>): Promise<ActionResultWithScreenshot>;
  async swipe<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionSwipe, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async swipe(body: ActionSwipe) {
    return this.client.v1.boxes.actions.swipe(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.pressKey({ keys: ['enter'] });
   */
  async pressKey(body: ActionBodyWithOptions<ActionPressKey>): Promise<ActionResult>;
  async pressKey(body: ActionBodyWithScreenshotUndefined<ActionPressKey>): Promise<{ message: string }>;
  async pressKey(body: ActionBodyWithScreenshotFalse<ActionPressKey>): Promise<{ message: string }>;
  async pressKey(body: ActionBodyWithScreenshotTrue<ActionPressKey>): Promise<ActionResultWithScreenshot>;
  async pressKey<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionPressKey, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async pressKey(body: ActionPressKey) {
    return this.client.v1.boxes.actions.pressKey(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.pressButton({ buttons: ['power']});
   */
  async pressButton(body: ActionBodyWithOptions<ActionPressButton>): Promise<ActionResult>;
  async pressButton(body: ActionBodyWithScreenshotUndefined<ActionPressButton>): Promise<{ message: string }>;
  async pressButton(body: ActionBodyWithScreenshotFalse<ActionPressButton>): Promise<{ message: string }>;
  async pressButton(
    body: ActionBodyWithScreenshotTrue<ActionPressButton>,
  ): Promise<ActionResultWithScreenshot>;
  async pressButton<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionPressButton, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async pressButton(body: ActionPressButton) {
    return this.client.v1.boxes.actions.pressButton(this.boxId, body);
  }
  /**
   * @example
   * const response = await myBox.action.move({ x: 200, y: 300 });
   */
  async move(body: ActionBodyWithOptions<ActionMove>): Promise<ActionResult>;
  async move(body: ActionBodyWithScreenshotUndefined<ActionMove>): Promise<{ message: string }>;
  async move(body: ActionBodyWithScreenshotFalse<ActionMove>): Promise<{ message: string }>;
  async move(body: ActionBodyWithScreenshotTrue<ActionMove>): Promise<ActionResultWithScreenshot>;
  async move<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionMove, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async move(body: ActionMove) {
    return this.client.v1.boxes.actions.move(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.tap({ x: 100, y: 100 });
   */
  async tap(body: ActionBodyWithOptions<ActionTap>): Promise<ActionResult>;
  async tap(body: ActionBodyWithScreenshotUndefined<ActionTap>): Promise<{ message: string }>;
  async tap(body: ActionBodyWithScreenshotFalse<ActionTap>): Promise<{ message: string }>;
  async tap(body: ActionBodyWithScreenshotTrue<ActionTap>): Promise<ActionResultWithScreenshot>;
  async tap<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionTap, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async tap(body: ActionTap) {
    return this.client.v1.boxes.actions.tap(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.longPress({ x: 100, y: 100 });
   */
  async longPress(body: ActionBodyWithOptions<ActionLongPress>): Promise<ActionResult>;
  async longPress(body: ActionBodyWithScreenshotUndefined<ActionLongPress>): Promise<{ message: string }>;
  async longPress(body: ActionBodyWithScreenshotFalse<ActionLongPress>): Promise<{ message: string }>;
  async longPress(body: ActionBodyWithScreenshotTrue<ActionLongPress>): Promise<ActionResultWithScreenshot>;
  async longPress<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionLongPress, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async longPress(body: ActionLongPress) {
    return this.client.v1.boxes.actions.longPress(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.scroll({ direction: 'up' });
   * const response = await myBox.action.scroll({ scrollX: 0, scrollY: 100, x: 100, y: 100 });
   */
  async scroll(body: ActionBodyWithOptions<ActionScroll>): Promise<ActionResult>;
  async scroll(body: ActionBodyWithScreenshotUndefined<ActionScroll>): Promise<{ message: string }>;
  async scroll(body: ActionBodyWithScreenshotFalse<ActionScroll>): Promise<{ message: string }>;
  async scroll(body: ActionBodyWithScreenshotTrue<ActionScroll>): Promise<ActionResultWithScreenshot>;
  async scroll<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionScroll, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async scroll(body: ActionScroll) {
    return this.client.v1.boxes.actions.scroll(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.touch({ points: [{ start: { x: 0, y: 0 } }] });
   */
  async touch(body: ActionBodyWithOptions<ActionTouch>): Promise<ActionResult>;
  async touch(body: ActionBodyWithScreenshotUndefined<ActionTouch>): Promise<{ message: string }>;
  async touch(body: ActionBodyWithScreenshotFalse<ActionTouch>): Promise<{ message: string }>;
  async touch(body: ActionBodyWithScreenshotTrue<ActionTouch>): Promise<ActionResultWithScreenshot>;
  async touch<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionTouch, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async touch(body: ActionTouch) {
    return this.client.v1.boxes.actions.touch(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.type({ text: 'Hello, World!' });
   */
  async type(body: ActionBodyWithOptions<ActionType>): Promise<ActionResult>;
  async type(body: ActionBodyWithScreenshotUndefined<ActionType>): Promise<{ message: string }>;
  async type(body: ActionBodyWithScreenshotFalse<ActionType>): Promise<{ message: string }>;
  async type(body: ActionBodyWithScreenshotTrue<ActionType>): Promise<ActionResultWithScreenshot>;
  async type<K extends ReadonlyArray<'before' | 'after' | 'trace'>>(
    body: ActionBodyWithScreenshotRange<ActionType, K>,
  ): Promise<{
    message: string;
    screenshot: ScreenshotPickOf<ActionResult, K[number]>;
  }>;
  async type(body: ActionType) {
    return this.client.v1.boxes.actions.type(this.boxId, body);
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
   * @example
   * const response = await myBox.action.screenRotation({ angle: 90, direction: 'clockwise' });
   */
  async screenRotation(body: ActionScreenRotationParams) {
    return this.client.v1.boxes.actions.screenRotation(this.boxId, body);
  }

  /**
   * @deprecated please use {@link ActionOperator.screenRecordingStart} instead.
   * @example
   * const response = await myBox.action.screenRecordingStart();
   */
  async screenRecordingStart(body?: ActionRecordingStartParams) {
    return this.client.v1.boxes.actions.recordingStart(this.boxId, body || {});
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
  async start(body?: ActionRecordingStartParams) {
    return this.client.v1.boxes.actions.recordingStart(this.boxId, body || {});
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
