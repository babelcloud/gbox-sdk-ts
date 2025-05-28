// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AndroidAPI from './android';
import {
  Android,
  AndroidClickParams,
  AndroidCreateParams,
  AndroidDeviceScreenSizeParams,
  AndroidDragParams,
  AndroidKeyPressParams,
  AndroidRunParams,
  AndroidScreenshotParams,
  AndroidScrollParams,
  AndroidTypeParams,
} from './android';
import * as TerminalAPI from './terminal';
import { Terminal, TerminalRunCodeParams, TerminalRunParams } from './terminal';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Gbox extends APIResource {
  terminal: TerminalAPI.Terminal = new TerminalAPI.Terminal(this._client);
  android: AndroidAPI.Android = new AndroidAPI.Android(this._client);

  /**
   * 停止容器
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.stop({ uid: 'uid-1' });
   * ```
   */
  stop(body: GboxStopParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/stop', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GboxStopParams {
  /**
   * uid
   */
  uid: string;
}

Gbox.Terminal = Terminal;
Gbox.Android = Android;

export declare namespace Gbox {
  export { type GboxStopParams as GboxStopParams };

  export {
    Terminal as Terminal,
    type TerminalRunParams as TerminalRunParams,
    type TerminalRunCodeParams as TerminalRunCodeParams,
  };

  export {
    Android as Android,
    type AndroidCreateParams as AndroidCreateParams,
    type AndroidClickParams as AndroidClickParams,
    type AndroidDeviceScreenSizeParams as AndroidDeviceScreenSizeParams,
    type AndroidDragParams as AndroidDragParams,
    type AndroidKeyPressParams as AndroidKeyPressParams,
    type AndroidRunParams as AndroidRunParams,
    type AndroidScreenshotParams as AndroidScreenshotParams,
    type AndroidScrollParams as AndroidScrollParams,
    type AndroidTypeParams as AndroidTypeParams,
  };
}
