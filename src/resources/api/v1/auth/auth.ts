// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GitHubAPI from './github';
import { GitHub, GitHubCreateTestParams } from './github';
import * as GoogleAPI from './google';
import { Google, GoogleCreateTestParams } from './google';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Auth extends APIResource {
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  google: GoogleAPI.Google = new GoogleAPI.Google(this._client);

  /**
   * 获取登录客户端 ID
   *
   * @example
   * ```ts
   * await client.api.v1.auth.getLoginClientID();
   * ```
   */
  getLoginClientID(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/auth/get_login_client_id', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Auth.GitHub = GitHub;
Auth.Google = Google;

export declare namespace Auth {
  export { GitHub as GitHub, type GitHubCreateTestParams as GitHubCreateTestParams };

  export { Google as Google, type GoogleCreateTestParams as GoogleCreateTestParams };
}
