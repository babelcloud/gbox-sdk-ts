// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Browser extends APIResource {
  /**
   * Get CDP url
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.cdpURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  cdpURL(id: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/boxes/${id}/browser/connect-url/cdp`, options);
  }
}

export type BrowserCdpURLResponse = string;

export declare namespace Browser {
  export { type BrowserCdpURLResponse as BrowserCdpURLResponse };
}
