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
  ActionAIResponse,
  ActionRecordingStartParams,
  ActionTapParams,
  ActionLongPressParams,
  ActionSettingsUpdateParams,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { TimeString } from '../types';
import path from 'path';
import fs from 'fs';

export interface ActionClickByPoint extends ActionClickParams.Click {
  screenshotDelay?: TimeString;
}

export interface ActionClickByNaturalLanguage extends ActionClickParams.ClickByNaturalLanguage {
  screenshotDelay?: TimeString;
}

export type ActionClick = ActionClickByPoint | ActionClickByNaturalLanguage;

export interface ActionDragSimple extends ActionDragParams.DragSimple {
  screenshotDelay?: TimeString;
}

export interface ActionDragAdvanced extends ActionDragParams.DragAdvanced {
  screenshotDelay?: TimeString;
}

export type ActionDrag = ActionDragSimple | ActionDragAdvanced;

export interface ActionMove extends ActionMoveParams {
  screenshotDelay?: TimeString;
}

export interface ActionScrollAdvanced extends ActionScrollParams.ScrollAdvanced {
  screenshotDelay?: TimeString;
}

export interface ActionScrollSimple extends ActionScrollParams.ScrollSimple {
  screenshotDelay?: TimeString;
}

export type ActionScroll = ActionScrollSimple | ActionScrollAdvanced;

export interface ActionTapByPoint extends ActionTapParams.Tap {
  screenshotDelay?: TimeString;
}

export interface ActionTapByNaturalLanguage extends ActionTapParams.TapByNaturalLanguage {
  screenshotDelay?: TimeString;
}

export type ActionTap = ActionTapByPoint | ActionTapByNaturalLanguage;

export interface ActionLongPressByPoint extends ActionLongPressParams.LongPress {
  screenshotDelay?: TimeString;
}

export interface ActionLongPressByNaturalLanguage extends ActionLongPressParams.LongPressByNaturalLanguage {
  screenshotDelay?: TimeString;
}

export type ActionLongPress = ActionLongPressByPoint | ActionLongPressByNaturalLanguage;

export interface ActionTouch extends ActionTouchParams {
  screenshotDelay?: TimeString;
}

export interface ActionType extends ActionTypeParams {
  screenshotDelay?: TimeString;
}

export interface ActionPressButton extends ActionPressButtonParams {
  screenshotDelay?: TimeString;
}

export interface ActionPressKey extends ActionPressKeyParams {
  screenshotDelay?: TimeString;
}

export interface ActionSwipeSimple extends ActionSwipeParams.SwipeSimple {
  screenshotDelay?: TimeString;
}

export interface ActionSwipeAdvanced extends ActionSwipeParams.SwipeAdvanced {
  screenshotDelay?: TimeString;
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
  async drag(body: ActionDrag) {
    return this.client.v1.boxes.actions.drag(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.swipe({ direction: 'up' });
   */
  async swipe(body: ActionSwipe) {
    return this.client.v1.boxes.actions.swipe(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.pressKey({ keys: ['enter'] });
   */
  async pressKey(body: ActionPressKey) {
    return this.client.v1.boxes.actions.pressKey(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.pressButton({ buttons: ['power']});
   */
  async pressButton(body: ActionPressButton) {
    return this.client.v1.boxes.actions.pressButton(this.boxId, body);
  }
  /**
   * @example
   * const response = await myBox.action.move({ x: 200, y: 300 });
   */
  async move(body: ActionMove) {
    return this.client.v1.boxes.actions.move(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.tap({ x: 100, y: 100 });
   */
  async tap(body: ActionTap) {
    return this.client.v1.boxes.actions.tap(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.longPress({ x: 100, y: 100 });
   */
  async longPress(body: ActionLongPress) {
    return this.client.v1.boxes.actions.longPress(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.scroll({ direction: 'up' });
   * const response = await myBox.action.scroll({ scrollX: 0, scrollY: 100, x: 100, y: 100 });
   */
  async scroll(body: ActionScroll) {
    return this.client.v1.boxes.actions.scroll(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.touch({ points: [{ start: { x: 0, y: 0 } }] });
   */
  async touch(body: ActionTouch) {
    return this.client.v1.boxes.actions.touch(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.type({ text: 'Hello, World!' });
   */
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
  async screenRecordingStart(body: ActionRecordingStartParams) {
    return this.client.v1.boxes.actions.recordingStart(this.boxId, body);
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
  async start(body: ActionRecordingStartParams) {
    return this.client.v1.boxes.actions.recordingStart(this.boxId, body);
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
    return this.client.v1.boxes.actions.replayRecordingEnable(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.recording.rewind.disable();
   */
  async disable() {
    return this.client.v1.boxes.actions.replayRecordingDisable(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.recording.rewind.extract();
   */
  async extract() {
    return this.client.v1.boxes.actions.replayRecordingGet(this.boxId);
  }
}
