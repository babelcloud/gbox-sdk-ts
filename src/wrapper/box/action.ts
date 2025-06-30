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
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { TimeString } from '../types';
import path from 'path';
import fs from 'fs';

export interface ActionClick extends ActionClickParams {
  screenshotDelay?: TimeString;
}

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

export interface ActionScroll extends ActionScrollParams {
  screenshotDelay?: TimeString;
}

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

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.action.ai("Click on the login button");
   */
  async ai(body: string | ActionAI) {
    if (typeof body === 'string') {
      return this.client.v1.boxes.actions.ai(this.boxId, { instruction: body });
    }

    return this.client.v1.boxes.actions.ai(this.boxId, body);
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
   * const response = await myBox.action.screenRotation({ angle: 90, direction: 'clockwise' });
   */
  async screenRotation(body: ActionScreenRotationParams) {
    return this.client.v1.boxes.actions.screenRotation(this.boxId, body);
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
