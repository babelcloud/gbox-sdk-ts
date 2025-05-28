// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Terminal extends APIResource {
  /**
   * 创建终端
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.terminal.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/terminal/create', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 执行命令
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.terminal.run({
   *   command: 'ls -l',
   *   uid: 'uid-1',
   * });
   * ```
   */
  run(body: TerminalRunParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/terminal/run', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 执行代码
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.terminal.runCode({
   *   code: 'print("Hello, World!")',
   *   language: 'python',
   *   uid: 'uid-1',
   * });
   * ```
   */
  runCode(body: TerminalRunCodeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/terminal/runCode', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TerminalRunParams {
  /**
   * command
   */
  command: string;

  /**
   * uid
   */
  uid: string;
}

export interface TerminalRunCodeParams {
  /**
   * code
   */
  code: string;

  /**
   * language
   */
  language: string;

  /**
   * uid
   */
  uid: string;
}

export declare namespace Terminal {
  export { type TerminalRunParams as TerminalRunParams, type TerminalRunCodeParams as TerminalRunCodeParams };
}
