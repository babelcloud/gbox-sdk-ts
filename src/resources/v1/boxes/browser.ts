// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Browser extends APIResource {
  /**
   * This endpoint allows you to generate a pre-signed URL for accessing the Chrome
   * DevTools Protocol (CDP) of a running box. The URL is valid for a limited time
   * and can be used to interact with the box's browser environment
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.cdpURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
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
   * The CDP url will be alive for the given duration
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 120m
   */
  expiresIn?: string;
}

export declare namespace Browser {
  export {
    type BrowserCdpURLResponse as BrowserCdpURLResponse,
    type BrowserCdpURLParams as BrowserCdpURLParams,
  };
}
