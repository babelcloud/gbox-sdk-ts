import {
  ActionClickParams,
  ActionDragParams,
  ActionKeypressParams,
  ActionMoveParams,
  ActionScrollParams,
  ActionTouchParams,
  ActionTypeParams,
  BoxCreateResponse,
} from '../../resources/index';
import { GboxSDK as GboxSDKBase } from '../../client';

export class BaseBox<T extends BoxCreateResponse> {
  private client: GboxSDKBase;
  public data: T;
  public actions: BoxInterfaceAction<T>;

  public id: T['id'];
  public type: T['type'];
  public status: T['status'];
  public createdAt: T['createdAt'];
  public updatedAt: T['updatedAt'];
  public expiresAt: T['expiresAt'];
  public config: T['config'];

  constructor(data: T, client: GboxSDKBase) {
    this.client = client;
    this.data = data;
    this.actions = new BoxInterfaceAction(data.id, client);

    this.id = data.id;
    this.type = data.type;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.expiresAt = data.expiresAt;
    this.config = data.config;
  }

  async start() {
    await this.client.boxes.start(this.id);
  }

  async stop() {
    await this.client.boxes.stop(this.id);
  }
}

export class BoxInterfaceAction<T extends BoxCreateResponse> {
  private client: GboxSDKBase;
  public id: T['id'];

  constructor(id: T['id'], client: GboxSDKBase) {
    this.id = id;
    this.client = client;
  }

  click(body: ActionClickParams) {
    return this.client.actions.click(this.id, body);
  }

  drag(body: ActionDragParams) {
    return this.client.actions.drag(this.id, body);
  }

  keypress(body: ActionKeypressParams) {
    return this.client.actions.keypress(this.id, body);
  }

  move(body: ActionMoveParams) {
    return this.client.actions.move(this.id, body);
  }

  scroll(body: ActionScrollParams) {
    return this.client.actions.scroll(this.id, body);
  }

  touch(body: ActionTouchParams) {
    return this.client.actions.touch(this.id, body);
  }

  type(body: ActionTypeParams) {
    return this.client.actions.type(this.id, body);
  }
}
