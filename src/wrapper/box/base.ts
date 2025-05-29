import type {
  AndroidBox,
  LinuxBox,
  ActionClickParams,
  ActionDragParams,
  ActionKeypressParams,
  ActionMoveParams,
  ActionScreenshotParams,
  ActionScrollParams,
  ActionTouchParams,
  ActionTypeParams,
  BoxStartResponse,
  BoxStopResponse,
  BoxExecuteCommandsResponse,
  BoxExecuteCommandsParams,
  BoxRunCodeParams,
  BoxRunCodeResponse,
} from '../../resources/v1/boxes';
import { GboxClient, type ClientOptions } from '../../client';

export class BaseBox<T extends LinuxBox | AndroidBox> {
  private client: GboxClient;
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
    this.client = new GboxClient(clientOptions);
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

  /**
   * @example
   * ```ts
   * const box = await client.v1.box.retrieve('id');
   * ```
   */
  start(id: string): Promise<BoxStartResponse> {
    return this.client.v1.boxes.start(id);
  }

  stop(id: string): Promise<BoxStopResponse> {
    return this.client.v1.boxes.stop(id);
  }

  command(id: string, body: BoxExecuteCommandsParams): Promise<BoxExecuteCommandsResponse> {
    return this.client.v1.boxes.executeCommands(id, body);
  }

  runCode(id: string, body: BoxRunCodeParams): Promise<BoxRunCodeResponse> {
    return this.client.v1.boxes.runCode(id, body);
  }
}

class InterfaceActions {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  async click(body: ActionClickParams) {
    await this.client.v1.boxes.actions.click(this.boxId, body);
  }

  async drag(body: ActionDragParams) {
    await this.client.v1.boxes.actions.drag(this.boxId, body);
  }

  async keypress(body: ActionKeypressParams) {
    await this.client.v1.boxes.actions.keypress(this.boxId, body);
  }

  async move(body: ActionMoveParams) {
    await this.client.v1.boxes.actions.move(this.boxId, body);
  }

  async scroll(body: ActionScrollParams) {
    await this.client.v1.boxes.actions.scroll(this.boxId, body);
  }

  async touch(body: ActionTouchParams) {
    await this.client.v1.boxes.actions.touch(this.boxId, body);
  }

  async type(body: ActionTypeParams) {
    await this.client.v1.boxes.actions.type(this.boxId, body);
  }

  async screenshot(body: ActionScreenshotParams) {
    await this.client.v1.boxes.actions.screenshot(this.boxId, body);
  }
}
