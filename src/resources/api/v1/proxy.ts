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
   * await client.api.v1.proxy.deleteProxy('path', {
   *   uid: 'uid',
   * });
   * ```
   */
  deleteProxy(path_: string, params: ProxyDeleteProxyParams, options?: RequestOptions): APIPromise<void> {
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
   * await client.api.v1.proxy.forwardRequest('path', {
   *   uid: 'uid',
   * });
   * ```
   */
  forwardRequest(
    path_: string,
    params: ProxyForwardRequestParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { uid } = params;
    return this._client.post(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * 转发请求到 Android 设备
   *
   * @example
   * ```ts
   * await client.api.v1.proxy.patchProxy('path', {
   *   uid: 'uid',
   * });
   * ```
   */
  patchProxy(path_: string, params: ProxyPatchProxyParams, options?: RequestOptions): APIPromise<void> {
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
   * await client.api.v1.proxy.retrieveProxy('path', {
   *   uid: 'uid',
   * });
   * ```
   */
  retrieveProxy(path_: string, params: ProxyRetrieveProxyParams, options?: RequestOptions): APIPromise<void> {
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
   * await client.api.v1.proxy.updateProxy('path', {
   *   uid: 'uid',
   * });
   * ```
   */
  updateProxy(path_: string, params: ProxyUpdateProxyParams, options?: RequestOptions): APIPromise<void> {
    const { uid } = params;
    return this._client.put(path`/api/v1/proxy/${uid}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProxyDeleteProxyParams {
  uid: string;
}

export interface ProxyForwardRequestParams {
  uid: string;
}

export interface ProxyPatchProxyParams {
  uid: string;
}

export interface ProxyRetrieveProxyParams {
  uid: string;
}

export interface ProxyUpdateProxyParams {
  uid: string;
}

export declare namespace Proxy {
  export {
    type ProxyDeleteProxyParams as ProxyDeleteProxyParams,
    type ProxyForwardRequestParams as ProxyForwardRequestParams,
    type ProxyPatchProxyParams as ProxyPatchProxyParams,
    type ProxyRetrieveProxyParams as ProxyRetrieveProxyParams,
    type ProxyUpdateProxyParams as ProxyUpdateProxyParams,
  };
}
