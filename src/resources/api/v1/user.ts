// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class User extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.user.deleteUser();
   * ```
   */
  deleteUser(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/user/delete_user', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.user.retrieveCurrentUserInfo();
   * ```
   */
  retrieveCurrentUserInfo(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/user/get_current_user_info', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.user.updateUserInfo({
   *   username: '张三',
   * });
   * ```
   */
  updateUserInfo(body: UserUpdateUserInfoParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/user/update_user_info', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.user.useInviteCode({
   *   inviteCode: '123456',
   * });
   * ```
   */
  useInviteCode(body: UserUseInviteCodeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/user/use_invite_code', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserUpdateUserInfoParams {
  /**
   * 用户名
   */
  username: string;
}

export interface UserUseInviteCodeParams {
  /**
   * 邀请码
   */
  inviteCode: string;
}

export declare namespace User {
  export {
    type UserUpdateUserInfoParams as UserUpdateUserInfoParams,
    type UserUseInviteCodeParams as UserUseInviteCodeParams,
  };
}
