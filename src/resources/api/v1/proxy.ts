// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Proxy extends APIResource {
  /**
   * 转发请求到 Android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.proxy.update('path', { uid: 'uid' });
   * ```
   */
  update(path_: string, params: ProxyUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { uid } = params;
    return this._client.put(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 转发请求到 Android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.proxy.delete('path', { uid: 'uid' });
   * ```
   */
  delete(path_: string, params: ProxyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { uid } = params;
    return this._client.delete(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 转发请求到 Android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.proxy.get('path', { uid: 'uid' });
   * ```
   */
  get(path_: string, params: ProxyGetParams, options?: RequestOptions): APIPromise<void> {
    const { uid } = params;
    return this._client.get(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 转发请求到 Android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.proxy.patch('path', { uid: 'uid' });
   * ```
   */
  patch(path_: string, params: ProxyPatchParams, options?: RequestOptions): APIPromise<void> {
    const { uid } = params;
    return this._client.patch(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 转发请求到 Android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.proxy.post('path', { uid: 'uid' });
   * ```
   */
  post(path_: string, params: ProxyPostParams, options?: RequestOptions): APIPromise<void> {
    const { uid } = params;
    return this._client.post(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProxyUpdateParams {
  uid: string;
}

export interface ProxyDeleteParams {
  uid: string;
}

export interface ProxyGetParams {
  uid: string;
}

export interface ProxyPatchParams {
  uid: string;
}

export interface ProxyPostParams {
  uid: string;
}

export declare namespace Proxy {
  export {
    type ProxyUpdateParams as ProxyUpdateParams,
    type ProxyDeleteParams as ProxyDeleteParams,
    type ProxyGetParams as ProxyGetParams,
    type ProxyPatchParams as ProxyPatchParams,
    type ProxyPostParams as ProxyPostParams,
  };
}
