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
  BoxDisplayResponse,
  BoxWebsocketURLResponse,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { ActionOperator } from './action';
import { FileSystemOperator } from './file-system';
import { BrowserOperator } from './browser';
import { TimeString } from '../types';
import { BoxTerminate } from '../sdk';
import WebSocket from 'ws';
import { StorageOperator } from './storage';
import { MediaOperator } from './media';
import { ProxyOperator } from './proxy';

export interface BoxStop extends BoxStopParams {}

export interface BoxStart extends BoxStartParams {}

export interface BoxExecuteCommands extends BoxExecuteCommandsParams {
  timeout?: TimeString;
  onStdout?: (data: string) => void;
  onStderr?: (data: string) => void;
}

export interface BoxRunCode extends BoxRunCodeParams {
  timeout?: TimeString;
  onStdout?: (data: string) => void;
  onStderr?: (data: string) => void;
}

export class BaseBox<T extends LinuxBox | AndroidBox> {
  protected client: GboxClient;
  public data: T;
  public action: ActionOperator;
  public fs: FileSystemOperator;
  public browser: BrowserOperator;
  public storage: StorageOperator;
  public media: MediaOperator;
  public proxy: ProxyOperator;

  constructor(client: GboxClient, data: T) {
    this.client = client;
    this.data = data;

    this.action = new ActionOperator(this.client, this.data.id);
    this.fs = new FileSystemOperator(this.client, this.data.id);
    this.browser = new BrowserOperator(this.client, this.data.id);
    this.storage = new StorageOperator(this.client, this.data.id);
    this.media = new MediaOperator(this.client, this.data.id);
    this.proxy = new ProxyOperator(this.client, this.data.id);
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
   * const response = await myBox.display();
   */
  async display(): Promise<BoxDisplayResponse> {
    return this.client.v1.boxes.display(this.data.id);
  }

  private async createWebSocketConnection(path: keyof BoxWebsocketURLResponse): Promise<WebSocket> {
    const websocketURL = await this.client.v1.boxes.websocketURL(this.data.id);
    const ws = new WebSocket(websocketURL[path], {
      headers: {
        Authorization: `Bearer ${this.client.apiKey}`,
      },
    });
    return ws;
  }

  /**
   * Generic WebSocket execution method to handle both command and runCode operations
   */
  private async executeViaWebSocket<T>(
    payload: Record<string, any>,
    onStdout?: (data: string) => void,
    onStderr?: (data: string) => void,
    path: keyof BoxWebsocketURLResponse = 'command',
  ): Promise<{ exitCode: number; stdout: string; stderr: string }> {
    return new Promise(async (resolve, reject) => {
      const ws = await this.createWebSocketConnection(path);

      let stdout = '';
      let stderr = '';
      let exitCode = 0;

      ws.onmessage = (e) => {
        try {
          const data = JSON.parse(e.data.toString());
          if (data.event === 'stdout') {
            const output = data.data || '';
            stdout += output;
            onStdout?.(output);
          } else if (data.event === 'stderr') {
            const output = data.data || '';
            stderr += output;
            onStderr?.(output);
          } else if (data.event === 'end') {
            exitCode = data.exitCode || 0;
            ws.close();
          }
        } catch (error) {
          reject(new Error(`Failed to parse WebSocket message: ${error}`));
          ws.close();
        }
      };

      ws.onopen = () => {
        try {
          ws.send(JSON.stringify(payload));
        } catch (error) {
          reject(new Error(`Failed to send payload: ${error}`));
          ws.close();
        }
      };

      ws.onerror = (error) => {
        reject(new Error(`WebSocket error: ${error}`));
      };

      ws.onclose = () => {
        resolve({
          exitCode,
          stdout,
          stderr,
        });
      };
    });
  }

  /**
   * @example
   * const response = await myBox.command('ls -l');
   * or
   * const response = await myBox.command({ commands: ['ls -l'] } );
   */
  command(body: BoxExecuteCommands | string | string[]): Promise<BoxExecuteCommandsResponse> {
    if (typeof body === 'object' && ('onStdout' in body || 'onStderr' in body)) {
      const { onStdout, onStderr, ...rest } = body;
      return this.executeViaWebSocket({ command: rest }, onStdout, onStderr, 'command');
    } else if (typeof body === 'string' || Array.isArray(body)) {
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
    if (typeof body === 'object' && ('onStdout' in body || 'onStderr' in body)) {
      const { onStdout, onStderr, ...rest } = body;
      return this.executeViaWebSocket({ runCode: rest }, onStdout, onStderr, 'runCode');
    } else if (typeof body === 'string') {
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
