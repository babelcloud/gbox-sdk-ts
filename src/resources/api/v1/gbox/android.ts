// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Android extends APIResource {
  /**
   * 获取 android 截图
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.captureScreenshot({
   *   uid: 'uid-1',
   * });
   * ```
   */
  captureScreenshot(body: AndroidCaptureScreenshotParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/screenshot', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 点击 android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.clickDevice({
   *   uid: 'uid-1',
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  clickDevice(body: AndroidClickDeviceParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/click', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 创建 android 容器
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.createContainer({
   *   architecture: 'arm',
   * });
   * ```
   */
  createContainer(body: AndroidCreateContainerParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/create', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * android 拖拽
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.dragDevice({
   *   endX: 100,
   *   endY: 100,
   *   ms: 1000,
   *   startX: 100,
   *   startY: 100,
   *   uid: 'uid-1',
   * });
   * ```
   */
  dragDevice(body: AndroidDragDeviceParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/drag', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 获取 android 设备屏幕尺寸
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.getDeviceScreenSize({
   *   uid: 'uid-1',
   * });
   * ```
   */
  getDeviceScreenSize(body: AndroidGetDeviceScreenSizeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/deviceScreenSize', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 按下 android 设备按键
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.pressKey({
   *   key: 'enter',
   *   uid: 'uid-1',
   * });
   * ```
   */
  pressKey(body: AndroidPressKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/keyPress', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 在 docker-android 容器上执行命令
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.runCommand({
   *   command: 'ls -l',
   *   uid: 'uid-1',
   * });
   * ```
   */
  runCommand(body: AndroidRunCommandParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/run', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 滚动 android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.scrollDevice({
   *   endX: 100,
   *   endY: 100,
   *   startX: 100,
   *   startY: 100,
   *   uid: 'uid-1',
   * });
   * ```
   */
  scrollDevice(body: AndroidScrollDeviceParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/scroll', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 输入文本
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.typeText({
   *   text: 'Hello, World!',
   *   uid: 'uid-1',
   * });
   * ```
   */
  typeText(body: AndroidTypeTextParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/type', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AndroidCaptureScreenshotParams {
  /**
   * uid
   */
  uid: string;
}

export interface AndroidClickDeviceParams {
  /**
   * uid
   */
  uid: string;

  /**
   * x
   */
  x: number;

  /**
   * y
   */
  y: number;
}

export interface AndroidCreateContainerParams {
  /**
   * architecture
   */
  architecture: string;
}

export interface AndroidDragDeviceParams {
  /**
   * endX
   */
  endX: number;

  /**
   * endY
   */
  endY: number;

  /**
   * 毫秒数 ms
   */
  ms: number;

  /**
   * startX
   */
  startX: number;

  /**
   * startY
   */
  startY: number;

  /**
   * uid
   */
  uid: string;
}

export interface AndroidGetDeviceScreenSizeParams {
  /**
   * uid
   */
  uid: string;
}

export interface AndroidPressKeyParams {
  /**
   * key
   */
  key: unknown;

  /**
   * uid
   */
  uid: string;
}

export interface AndroidRunCommandParams {
  /**
   * command
   */
  command: string;

  /**
   * uid
   */
  uid: string;
}

export interface AndroidScrollDeviceParams {
  /**
   * endX
   */
  endX: number;

  /**
   * endY
   */
  endY: number;

  /**
   * startX
   */
  startX: number;

  /**
   * startY
   */
  startY: number;

  /**
   * uid
   */
  uid: string;
}

export interface AndroidTypeTextParams {
  /**
   * text
   */
  text: string;

  /**
   * uid
   */
  uid: string;
}

export declare namespace Android {
  export {
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
