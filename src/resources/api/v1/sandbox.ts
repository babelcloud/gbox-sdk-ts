// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Sandbox extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.sandbox.delete({
   *   organizationId: 'organizationId',
   *   sandboxId: 'sandboxId',
   * });
   * ```
   */
  delete(body: SandboxDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/sandbox/delete_sandbox', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.sandbox.getList({
   *   organizationId: 'organizationId',
   *   page: 0,
   *   pageSize: 0,
   * });
   * ```
   */
  getList(body: SandboxGetListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/sandbox/get_sandbox_list', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SandboxDeleteParams {
  /**
   * 组织 ID
   */
  organizationId: string;

  /**
   * 沙盒 ID
   */
  sandboxId: string;
}

export interface SandboxGetListParams {
  /**
   * 组织 ID
   */
  organizationId: string;

  /**
   * 页码
   */
  page: number;

  /**
   * 每页条数
   */
  pageSize: number;
}

export declare namespace Sandbox {
  export {
    type SandboxDeleteParams as SandboxDeleteParams,
    type SandboxGetListParams as SandboxGetListParams,
  };
}
