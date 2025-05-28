// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Invite extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.invite.createLink();
   * ```
   */
  createLink(body: InviteCreateLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/invite/create_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.invite.deleteLink();
   * ```
   */
  deleteLink(body: InviteDeleteLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/invite/delete_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.invite.getLink();
   * ```
   */
  getLink(body: InviteGetLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/invite/get_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InviteCreateLinkParams {}

export interface InviteDeleteLinkParams {}

export interface InviteGetLinkParams {}

export declare namespace Invite {
  export {
    type InviteCreateLinkParams as InviteCreateLinkParams,
    type InviteDeleteLinkParams as InviteDeleteLinkParams,
    type InviteGetLinkParams as InviteGetLinkParams,
  };
}
