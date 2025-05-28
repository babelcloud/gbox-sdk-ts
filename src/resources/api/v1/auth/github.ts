// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class GitHub extends APIResource {
  /**
   * 创建一个新的测试记录
   *
   * @example
   * ```ts
   * await client.api.v1.auth.github.callback({
   *   code: '123456',
   * });
   * ```
   */
  callback(body: GitHubCallbackParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/auth/github/callback', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GitHubCallbackParams {
  /**
   * code
   */
  code: string;
}

export declare namespace GitHub {
  export { type GitHubCallbackParams as GitHubCallbackParams };
}
