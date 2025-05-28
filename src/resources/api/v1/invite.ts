// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Invite extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.invite.createInviteLink();
   * ```
   */
  createInviteLink(body: InviteCreateInviteLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/invite/create_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.invite.deleteInviteLink();
   * ```
   */
  deleteInviteLink(body: InviteDeleteInviteLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/invite/delete_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.invite.retrieveInviteLink();
   * ```
   */
  retrieveInviteLink(body: InviteRetrieveInviteLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/invite/get_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InviteCreateInviteLinkParams {}

export interface InviteDeleteInviteLinkParams {}

export interface InviteRetrieveInviteLinkParams {}

export declare namespace Invite {
  export {
    type InviteCreateInviteLinkParams as InviteCreateInviteLinkParams,
    type InviteDeleteInviteLinkParams as InviteDeleteInviteLinkParams,
    type InviteRetrieveInviteLinkParams as InviteRetrieveInviteLinkParams,
  };
}
