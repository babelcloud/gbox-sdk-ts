// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Android extends APIResource {
  /**
   * 创建 android 容器
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.create({
   *   architecture: 'arm',
   * });
   * ```
   */
  create(body: AndroidCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/create', {
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
   * await client.api.v1.gbox.android.click({
   *   uid: 'uid-1',
   *   x: 100,
   *   y: 100,
   * });
   * ```
   */
  click(body: AndroidClickParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/click', {
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
   * await client.api.v1.gbox.android.deviceScreenSize({
   *   uid: 'uid-1',
   * });
   * ```
   */
  deviceScreenSize(body: AndroidDeviceScreenSizeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/deviceScreenSize', {
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
   * await client.api.v1.gbox.android.drag({
   *   endX: 100,
   *   endY: 100,
   *   ms: 1000,
   *   startX: 100,
   *   startY: 100,
   *   uid: 'uid-1',
   * });
   * ```
   */
  drag(body: AndroidDragParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/drag', {
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
   * await client.api.v1.gbox.android.keyPress({
   *   key: 'enter',
   *   uid: 'uid-1',
   * });
   * ```
   */
  keyPress(body: AndroidKeyPressParams, options?: RequestOptions): APIPromise<void> {
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
   * await client.api.v1.gbox.android.run({
   *   command: 'ls -l',
   *   uid: 'uid-1',
   * });
   * ```
   */
  run(body: AndroidRunParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/run', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 获取 android 截图
   *
   * @example
   * ```ts
   * await client.api.v1.gbox.android.screenshot({
   *   uid: 'uid-1',
   * });
   * ```
   */
  screenshot(body: AndroidScreenshotParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/screenshot', {
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
   * await client.api.v1.gbox.android.scroll({
   *   endX: 100,
   *   endY: 100,
   *   startX: 100,
   *   startY: 100,
   *   uid: 'uid-1',
   * });
   * ```
   */
  scroll(body: AndroidScrollParams, options?: RequestOptions): APIPromise<void> {
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
   * await client.api.v1.gbox.android.type({
   *   text: 'Hello, World!',
   *   uid: 'uid-1',
   * });
   * ```
   */
  type(body: AndroidTypeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/gbox/android/type', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AndroidCreateParams {
  /**
   * architecture
   */
  architecture: string;
}

export interface AndroidClickParams {
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

export interface AndroidDeviceScreenSizeParams {
  /**
   * uid
   */
  uid: string;
}

export interface AndroidDragParams {
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

export interface AndroidKeyPressParams {
  /**
   * key
   */
  key: unknown;

  /**
   * uid
   */
  uid: string;
}

export interface AndroidRunParams {
  /**
   * command
   */
  command: string;

  /**
   * uid
   */
  uid: string;
}

export interface AndroidScreenshotParams {
  /**
   * uid
   */
  uid: string;
}

export interface AndroidScrollParams {
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

export interface AndroidTypeParams {
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
