import type { BoxCreateResponse } from '../../resources/boxes';
import { GboxSDK, type ClientOptions } from '../../client';
import {
  ActionClickParams,
  ActionDragParams,
  ActionKeypressParams,
  ActionMoveParams,
  ActionScrollParams,
  ActionTouchParams,
} from '../../resources/actions';

export class BaseBox<T extends BoxCreateResponse> {
  private client: GboxSDK;
  public data: T;
  public action: InterfaceActions;

  public id: T['id'];
  public type: T['type'];
  public status: T['status'];
  public createdAt: T['createdAt'];
  public updatedAt: T['updatedAt'];
  public expiresAt: T['expiresAt'];
  public config: T['config'];

  constructor(data: T, clientOptions?: ClientOptions) {
    this.client = new GboxSDK(clientOptions);
    this.data = data;

    this.id = data.id;
    this.type = data.type;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.expiresAt = data.expiresAt;
    this.config = data.config;

    // 初始化 action 对象
    this.action = new InterfaceActions(this.client, this.id);
  }

  async start() {
    await this.client.boxes.start(this.id);
  }

  async stop() {
    await this.client.boxes.stop(this.id);
  }
}

class InterfaceActions {
  private client: GboxSDK;
  private boxId: string;

  constructor(client: GboxSDK, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  async click(body: ActionClickParams) {
    await this.client.actions.click(this.boxId, body);
  }

  async drag(body: ActionDragParams) {
    await this.client.actions.drag(this.boxId, body);
  }

  async keypress(body: ActionKeypressParams) {
    await this.client.actions.keypress(this.boxId, body);
  }

  async move(body: ActionMoveParams) {
    await this.client.actions.move(this.boxId, body);
  }

  async scroll(body: ActionScrollParams) {
    await this.client.actions.scroll(this.boxId, body);
  }

  async touch(body: ActionTouchParams) {
    await this.client.actions.touch(this.boxId, body);
  }
}
