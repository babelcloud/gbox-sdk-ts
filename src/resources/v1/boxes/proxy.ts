// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Proxy extends APIResource {
  /**
   * Clear the proxy for the box
   *
   * @example
   * ```ts
   * await client.v1.boxes.proxy.clear(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  clear(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/boxes/${boxID}/proxy`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the proxy for the box
   *
   * @example
   * ```ts
   * await client.v1.boxes.proxy.get(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  get(boxID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/boxes/${boxID}/proxy`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set the proxy for the box
   *
   * @example
   * ```ts
   * await client.v1.boxes.proxy.set(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   {
   *     auth: { password: 'password', username: 'admin' },
   *     excludes: ['127.0.0.1', 'localhost'],
   *     url: 'http://127.0.0.1:8080',
   *   },
   * );
   * ```
   */
  set(boxID: string, body: ProxySetParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${boxID}/proxy`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProxySetParams {
  /**
   * Box Proxy Auth
   */
  auth: ProxySetParams.Auth;

  /**
   * Exclude IPs and domains from the proxy. Default is ['127.0.0.1', 'localhost']
   */
  excludes: Array<string>;

  /**
   * The URL of the proxy server
   */
  url: string;
}

export namespace ProxySetParams {
  /**
   * Box Proxy Auth
   */
  export interface Auth {
    /**
     * Password for the proxy
     */
    password: string;

    /**
     * Username for the proxy
     */
    username: string;
  }
}

export declare namespace Proxy {
  export { type ProxySetParams as ProxySetParams };
}
