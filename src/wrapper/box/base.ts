import type {
  AndroidBox,
  LinuxBox,
  BoxExecuteCommandsResponse,
  BoxExecuteCommandsParams,
  BoxRunCodeParams,
  BoxRunCodeResponse,
  BoxStartParams,
  BoxStopParams,
  BoxWebTerminalURLParams,
  BoxLiveViewURLParams,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { ActionOperator } from './action';
import { FileSystemOperator } from './file-system';
import { BrowserOperator } from './browser';
import { TimeString } from '../types';
import { BoxTerminate } from '../sdk';

export interface BoxStop extends BoxStopParams {}

export interface BoxStart extends BoxStartParams {}

export interface BoxExecuteCommands extends BoxExecuteCommandsParams {
  timeout?: TimeString;
}

export interface BoxRunCode extends BoxRunCodeParams {
  timeout?: TimeString;
}

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
  async start(body?: BoxStart): Promise<this> {
    await this.client.v1.boxes.start(this.data.id, body);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.stop();
   */
  async stop(body?: BoxStop): Promise<this> {
    await this.client.v1.boxes.stop(this.data.id, body);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.terminate();
   */
  async terminate(body?: BoxTerminate): Promise<this> {
    await this.client.v1.boxes.terminate(this.data.id, body);
    await this.syncData();
    return this;
  }

  /**
   * @example
   * const response = await myBox.command('ls -l');
   * or
   * const response = await myBox.command({ commands: ['ls -l'] } );
   */
  command(body: BoxExecuteCommands | string | string[]): Promise<BoxExecuteCommandsResponse> {
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
  runCode(body: BoxRunCode | string): Promise<BoxRunCodeResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.runCode(this.data.id, { code: body });
    } else {
      return this.client.v1.boxes.runCode(this.data.id, body);
    }
  }

  /**
   * @example
   * const response = await myBox.liveView();
   */
  async liveView(body?: BoxLiveViewURLParams) {
    return this.client.v1.boxes.liveViewURL(this.data.id, body);
  }

  /**
   * @example
   * const response = await myBox.webTerminal();
   */
  async webTerminal(body?: BoxWebTerminalURLParams) {
    return this.client.v1.boxes.webTerminalURL(this.data.id, body);
  }
}
