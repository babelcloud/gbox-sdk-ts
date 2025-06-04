// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Browser extends APIResource {
  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.cdpURL('id');
   * ```
   */
  cdpURL(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/boxes/${id}/browser/connect-url/cdp`, options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.connectURL(
   *   'id',
   * );
   * ```
   */
  connectURL(id: string, options?: RequestOptions): APIPromise<BrowserConnectURLResponse> {
    return this._client.get(path`/boxes/${id}/browser/connect-url`, options);
  }
}

export type BrowserCdpURLResponse = string;

export interface BrowserConnectURLResponse {
  /**
   * CDP URL
   */
  cdpUrl: string;
}

export declare namespace Browser {
  export {
    type BrowserCdpURLResponse as BrowserCdpURLResponse,
    type BrowserConnectURLResponse as BrowserConnectURLResponse,
  };
}
