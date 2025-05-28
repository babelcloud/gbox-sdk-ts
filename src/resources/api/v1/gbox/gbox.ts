// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AndroidAPI from './android';
import {
  Android,
  AndroidCaptureScreenshotParams,
  AndroidClickDeviceParams,
  AndroidCreateContainerParams,
  AndroidDragDeviceParams,
  AndroidGetDeviceScreenSizeParams,
  AndroidPressKeyParams,
  AndroidRunCommandParams,
  AndroidScrollDeviceParams,
  AndroidTypeTextParams,
} from './android';
import * as TerminalAPI from './terminal';
import { Terminal, TerminalRunCodeParams, TerminalRunCommandParams } from './terminal';
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
   * await client.api.v1.gbox.stopContainer({ uid: 'uid-1' });
   * ```
   */
  stopContainer(body: GboxStopContainerParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/stop', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GboxStopContainerParams {
  /**
   * uid
   */
  uid: string;
}

Gbox.Terminal = Terminal;
Gbox.Android = Android;

export declare namespace Gbox {
  export { type GboxStopContainerParams as GboxStopContainerParams };

  export {
    Terminal as Terminal,
    type TerminalRunCodeParams as TerminalRunCodeParams,
    type TerminalRunCommandParams as TerminalRunCommandParams,
  };

  export {
    Android as Android,
    type AndroidCaptureScreenshotParams as AndroidCaptureScreenshotParams,
    type AndroidClickDeviceParams as AndroidClickDeviceParams,
    type AndroidCreateContainerParams as AndroidCreateContainerParams,
    type AndroidDragDeviceParams as AndroidDragDeviceParams,
    type AndroidGetDeviceScreenSizeParams as AndroidGetDeviceScreenSizeParams,
    type AndroidPressKeyParams as AndroidPressKeyParams,
    type AndroidRunCommandParams as AndroidRunCommandParams,
    type AndroidScrollDeviceParams as AndroidScrollDeviceParams,
    type AndroidTypeTextParams as AndroidTypeTextParams,
  };
}
