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
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { TimeString } from '../types';

export interface ActionClick extends ActionClickParams {
  screenshotDelay?: TimeString;
}

export interface ActionDrag extends ActionDragParams {
  screenshotDelay?: TimeString;
}

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

export class ActionOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
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
  async screenshot(body?: ActionScreenshotParams) {
    return this.client.v1.boxes.actions.screenshot(this.boxId, body || { outputFormat: 'base64' });
  }
}
