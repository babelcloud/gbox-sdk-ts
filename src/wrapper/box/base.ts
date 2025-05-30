import type {
  AndroidBox,
  LinuxBox,
  ActionClickParams,
  ActionDragParams,
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
  ActionPressParams,
  FListParams,
  FWriteParams,
  FReadParams,
  FListResponse,
  FWriteResponse,
  FReadResponse,
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
   * const response = await gbox.start();
   */
  start(id: string): Promise<BoxStartResponse> {
    return this.client.v1.boxes.start(id);
  }

  /**
   * @example
   * const response = await gbox.stop();
   */
  stop(id: string): Promise<BoxStopResponse> {
    return this.client.v1.boxes.stop(id);
  }

  /**
   * @example
   * const response = await gbox.command('id', { commands: ['ls', '-l'] } );
   */
  command(id: string, body: BoxExecuteCommandsParams): Promise<BoxExecuteCommandsResponse> {
    return this.client.v1.boxes.executeCommands(id, body);
  }

  /**
   * @example
   * const response = await gbox.runCode('id', { code: 'print("Hello, World!")', type: 'bash' });
   */
  runCode(id: string, body: BoxRunCodeParams): Promise<BoxRunCodeResponse> {
    return this.client.v1.boxes.runCode(id, body);
  }

  /**
   * @example
   * const response = await gbox.fs('id', { path: '/tmp' });
   */
  fs(id: string, body: FListParams): Promise<FListResponse> {
    return this.client.v1.boxes.fs.list(id, body);
  }

  /**
   * @example
   * const response = await gbox.read('id', { path: '/tmp/file.txt' });
   */
  read(id: string, body: FReadParams): Promise<FReadResponse> {
    return this.client.v1.boxes.fs.read(id, body);
  }

  /**
   * @example
   * const response = await gbox.write('id', { path: '/tmp/file.txt', content: 'Hello, World!' });
   */
  write(id: string, body: FWriteParams): Promise<FWriteResponse> {
    return this.client.v1.boxes.fs.write(id, body);
  }
}

class InterfaceActions {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await gbox.click({ x: 100, y: 100, type: {} });
   */
  async click(body: ActionClickParams) {
    await this.client.v1.boxes.actions.click(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.drag(
   *   {
   *     path: [
   *       { x: 100, y: 100 },
   *       { x: 200, y: 200 },
   *     ],
   *     type: {},
   *   }
   * );
   */
  async drag(body: ActionDragParams) {
    await this.client.v1.boxes.actions.drag(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.press({ keys: ['Enter'], type: {} });
   */
  async press(body: ActionPressParams) {
    await this.client.v1.boxes.actions.press(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.move({ type: {}, x: 200, y: 300 });
   */
  async move(body: ActionMoveParams) {
    await this.client.v1.boxes.actions.move(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.scroll({ scrollX: 0, scrollY: 100, type: {}, x: 100, y: 100 });
   */
  async scroll(body: ActionScrollParams) {
    await this.client.v1.boxes.actions.scroll(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.touch({ points: [{ start: { x: 0, y: 0 } }], type: {} });
   */
  async touch(body: ActionTouchParams) {
    await this.client.v1.boxes.actions.touch(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.type({ text: 'Hello, World!' });
   */
  async type(body: ActionTypeParams) {
    await this.client.v1.boxes.actions.type(this.boxId, body);
  }

  /**
   * @example
   * const response = await gbox.screenshot({ type: 'png' });
   */
  async screenshot(body: ActionScreenshotParams) {
    await this.client.v1.boxes.actions.screenshot(this.boxId, body);
  }
}
