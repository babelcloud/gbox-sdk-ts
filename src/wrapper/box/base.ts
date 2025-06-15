import type {
  AndroidBox,
  LinuxBox,
  BoxExecuteCommandsResponse,
  BoxExecuteCommandsParams,
  BoxRunCodeParams,
  BoxRunCodeResponse,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { ActionOperator } from './action';
import { FileSystemOperator } from './file-system';
import { BrowserOperator } from './browser';

export class BaseBox<T extends LinuxBox | AndroidBox> {
  protected client: GboxClient;
  public data: T;
  public action: ActionOperator;
  public fs: FileSystemOperator;
  public browser: BrowserOperator;

  constructor(data: T, client: GboxClient) {
    this.client = client;
    this.data = data;

    this.action = new ActionOperator(this.client, this.data.id);
    this.fs = new FileSystemOperator(this.client, this.data.id);
    this.browser = new BrowserOperator(this.client, this.data.id);
  }

  private async syncData() {
    const res = await this.client.v1.boxes.retrieve(this.data.id);

    this.data = res as T;
  }

  /**
   * @example
   * const response = await myBox.start();
   */
  async start(): Promise<this> {
    await this.client.v1.boxes.start(this.data.id);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.stop();
   */
  async stop(): Promise<this> {
    await this.client.v1.boxes.stop(this.data.id);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.command('ls -l');
   * or
   * const response = await myBox.command({ commands: ['ls -l'] } );
   */
  command(body: BoxExecuteCommandsParams | string | string[]): Promise<BoxExecuteCommandsResponse> {
    if (typeof body === 'string' || Array.isArray(body)) {
      return this.client.v1.boxes.executeCommands(this.data.id, { commands: body });
    } else {
      return this.client.v1.boxes.executeCommands(this.data.id, body);
    }
  }

  /**
   * @example
   * const response = await myBox.runCode('print("Hello, World!")');
   * or
   * const response = await myBox.runCode({ code: 'print("Hello, World!")', language: 'bash' });
   */
  runCode(body: BoxRunCodeParams | string): Promise<BoxRunCodeResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.runCode(this.data.id, { code: body });
    } else {
      return this.client.v1.boxes.runCode(this.data.id, body);
    }
  }
}
