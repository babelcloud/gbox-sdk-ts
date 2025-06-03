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
import { GboxClient } from '../../client';

export class BaseBox<T extends LinuxBox | AndroidBox> {
  private client: GboxClient;
  public data: T;
  public action: InterfaceActions;
  public fs: InterfaceFs;
  public browser: InterfaceBrowser;

  public id: T['id'];
  public type: T['type'];
  public status: T['status'];
  public createdAt: T['createdAt'];
  public updatedAt: T['updatedAt'];
  public expiresAt: T['expiresAt'];
  public config: T['config'];

  constructor(data: T, client: GboxClient) {
    this.client = client;
    this.data = data;

    this.id = data.id;
    this.type = data.type;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.expiresAt = data.expiresAt;
    this.config = data.config;

    this.action = new InterfaceActions(this.client, this.id);
    this.fs = new InterfaceFs(this.client, this.id);
    this.browser = new InterfaceBrowser(this.client, this.id);
  }

  /**
   * @example
   * const response = await gbox.start();
   */
  start(): Promise<BoxStartResponse> {
    return this.client.v1.boxes.start(this.id);
  }

  /**
   * @example
   * const response = await gbox.stop();
   */
  stop(): Promise<BoxStopResponse> {
    return this.client.v1.boxes.stop(this.id);
  }

  /**
   * @example
   * const response = await gbox.command('ls -l');
   * or
   * const response = await gbox.command({ commands: ['ls', '-l'] } );
   */
  command(body: BoxExecuteCommandsParams | string): Promise<BoxExecuteCommandsResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.executeCommands(this.id, { commands: body.split(' ') });
    } else {
      return this.client.v1.boxes.executeCommands(this.id, body);
    }
  }

  /**
   * @example
   * const response = await gbox.runCode('print("Hello, World!")');
   * or
   * const response = await gbox.runCode({ code: 'print("Hello, World!")', type: 'bash' });
   */
  runCode(body: BoxRunCodeParams | string): Promise<BoxRunCodeResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.runCode(this.id, { code: body, type: 'python3' });
    } else {
      return this.client.v1.boxes.runCode(this.id, body);
    }
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

class InterfaceFs {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await gbox.fs.list('/tmp');
   * or
   * const response = await gbox.fs.list({ path: '/tmp', depth: 1 });
   */
  list(body: FListParams | string): Promise<FListResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.fs.list(this.boxId, { path: body });
    } else {
      return this.client.v1.boxes.fs.list(this.boxId, body);
    }
  }

  /**
   * @example
   * const response = await gbox.fs.read('/tmp/file.txt');
   * or
   * const response = await gbox.fs.read({ path: '/tmp/file.txt' });
   */
  read(body: FReadParams | string): Promise<FReadResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.fs.read(this.boxId, { path: body });
    } else {
      return this.client.v1.boxes.fs.read(this.boxId, body);
    }
  }

  /**
   * @example
   * const response = await gbox.fs.write({ path: '/tmp/file.txt', content: 'Hello, World!' });
   */
  write(body: FWriteParams): Promise<FWriteResponse> {
    return this.client.v1.boxes.fs.write(this.boxId, body);
  }
}

class InterfaceBrowser {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await gbox.browser.connectUrl();
   */
  async connectUrl() {
    await this.client.v1.boxes.browser.connectURL(this.boxId);
  }

  /**
   * @example
   * const response = await gbox.browser.cdpUrl();
   */
  async cdpUrl() {
    await this.client.v1.boxes.browser.cdpURL(this.boxId);
  }
}
