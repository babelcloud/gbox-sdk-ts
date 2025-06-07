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
  protected client: GboxClient;
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

  private async syncData() {
    const res = await this.client.v1.boxes.retrieve(this.id);

    this.data = res as T;

    this.id = res.id;
    this.type = res.type;
    this.status = res.status;
    this.createdAt = res.createdAt;
    this.updatedAt = res.updatedAt;
    this.expiresAt = res.expiresAt;
    this.config = res.config;
  }

  /**
   * @example
   * const response = await myBox.start();
   */
  async start(): Promise<this> {
    await this.client.v1.boxes.start(this.id);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.stop();
   */
  async stop(): Promise<this> {
    await this.client.v1.boxes.stop(this.id);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.command('ls -l');
   * or
   * const response = await myBox.command({ commands: ['ls', '-l'] } );
   */
  command(body: BoxExecuteCommandsParams | string | string[]): Promise<BoxExecuteCommandsResponse> {
    if (typeof body === 'string' || Array.isArray(body)) {
      return this.client.v1.boxes.executeCommands(this.id, { commands: body });
    } else {
      return this.client.v1.boxes.executeCommands(this.id, body);
    }
  }

  /**
   * @example
   * const response = await myBox.runCode('print("Hello, World!")');
   * or
   * const response = await myBox.runCode({ code: 'print("Hello, World!")', type: 'bash' });
   */
  runCode(body: BoxRunCodeParams | string): Promise<BoxRunCodeResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.runCode(this.id, { code: body });
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
   * const response = await myBox.action.click({ x: 100, y: 100, type: {} });
   */
  async click(body: ActionClickParams) {
    await this.client.v1.boxes.actions.click(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.drag(
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
    return this.client.v1.boxes.actions.drag(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.press({ keys: ['Enter'], type: {} });
   */
  async press(body: ActionPressParams) {
    return this.client.v1.boxes.actions.press(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.move({ type: {}, x: 200, y: 300 });
   */
  async move(body: ActionMoveParams) {
    return this.client.v1.boxes.actions.move(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.scroll({ scrollX: 0, scrollY: 100, type: {}, x: 100, y: 100 });
   */
  async scroll(body: ActionScrollParams) {
    return this.client.v1.boxes.actions.scroll(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.touch({ points: [{ start: { x: 0, y: 0 } }], type: {} });
   */
  async touch(body: ActionTouchParams) {
    return this.client.v1.boxes.actions.touch(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.type({ text: 'Hello, World!' });
   */
  async type(body: ActionTypeParams) {
    return this.client.v1.boxes.actions.type(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.action.screenshot({ type: 'png' });
   */
  async screenshot(body: ActionScreenshotParams) {
    return this.client.v1.boxes.actions.screenshot(this.boxId, body);
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
   * const response = await myBox.fs.list('/tmp');
   * or
   * const response = await myBox.fs.list({ path: '/tmp', depth: 1 });
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
   * const response = await myBox.fs.read('/tmp/file.txt');
   * or
   * const response = await myBox.fs.read({ path: '/tmp/file.txt' });
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
   * const response = await myBox.fs.write({ path: '/tmp/file.txt', content: 'Hello, World!' });
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
   * const response = await myBox.browser.connectUrl();
   */
  async connectUrl() {
    return this.client.v1.boxes.browser.connectURL(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.browser.cdpUrl();
   */
  async cdpUrl() {
    return this.client.v1.boxes.browser.cdpURL(this.boxId);
  }
}
