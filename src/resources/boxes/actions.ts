// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * @example
   * ```ts
   * await client.boxes.actions.click('id', {
   *   type: 'click',
   *   x: 100,
   *   y: 200,
   *   button: 'left',
   * });
   * ```
   */
  click(id: string, body: ActionClickParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/click`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionClickParams {
  /**
   * Action type for mouse click
   */
  type: 'click';

  /**
   * X coordinate of the click
   */
  x: number;

  /**
   * Y coordinate of the click
   */
  y: number;

  /**
   * Mouse button to click
   */
  button?: 'left' | 'right' | 'middle';

  /**
   * Whether to perform a double click
   */
  double?: boolean;
}

export declare namespace Actions {
  export { type ActionClickParams as ActionClickParams };
}
