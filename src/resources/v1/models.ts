// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Models extends APIResource {
  /**
   * Generate coordinates for a model
   *
   * @example
   * ```ts
   * const response = await client.v1.models.call({
   *   action: {
   *     type: 'click',
   *     target: 'the VSCode app icon on the bottom dock',
   *   },
   *   screenshot:
   *     'https://gru-activate2-public-assets.s3.us-west-2.amazonaws.com/jessica/screenshot-1759332945616-pu0ovj.png',
   * });
   * ```
   */
  call(body: ModelCallParams, options?: RequestOptions): APIPromise<ModelCallResponse> {
    return this._client.post('/model', { body, ...options });
  }
}

/**
 * Model response data structure
 */
export interface ModelCallResponse {
  /**
   * Unique ID of this request, can be used for issue reporting and feedback
   */
  id: string;

  /**
   * Model response data
   */
  response: unknown;
}

export interface ModelCallParams {
  /**
   * Structured action object (click or drag)
   */
  action: unknown;

  /**
   * HTTP(S) URL to screenshot image
   */
  screenshot: string;

  /**
   * Model to use
   */
  model?: 'gbox-handy-1';
}

export declare namespace Models {
  export { type ModelCallResponse as ModelCallResponse, type ModelCallParams as ModelCallParams };
}
