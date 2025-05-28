// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Vm extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.vm.runCode();
   * ```
   */
  runCode(body: VmRunCodeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/vm/run_code', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VmRunCodeParams {}

export declare namespace Vm {
  export { type VmRunCodeParams as VmRunCodeParams };
}
