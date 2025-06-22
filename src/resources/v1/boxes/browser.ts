// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Browser extends APIResource {
  /**
   * Generate pre-signed CDP url
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.cdpURL(
   *   'boxId',
   * );
   * ```
   */
  cdpURL(
    boxID: string,
    body: BrowserCdpURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.post(path`/boxes/${boxID}/browser/connect-url/cdp`, { body, ...options });
  }
}

export type BrowserCdpURLResponse = string;

export interface BrowserCdpURLParams {
  /**
   * The CDP url will be alive for the given duration (e.g. '120m')
   */
  expiresIn?: string;
}

export declare namespace Browser {
  export {
    type BrowserCdpURLResponse as BrowserCdpURLResponse,
    type BrowserCdpURLParams as BrowserCdpURLParams,
  };
}
