// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Template extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.template.listAllTemplates();
   * ```
   */
  listAllTemplates(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/template/get_all_templates', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
