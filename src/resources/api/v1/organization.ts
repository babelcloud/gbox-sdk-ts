// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Organization extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.organization.createOrganization({
   *   name: 'name',
   * });
   * ```
   */
  createOrganization(body: OrganizationCreateOrganizationParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/create_an_organization', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.deleteOrganization({
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  deleteOrganization(body: OrganizationDeleteOrganizationParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/delete_an_organization', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.getMemberList();
   * ```
   */
  getMemberList(body: OrganizationGetMemberListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/get_organization_member_list', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.getMyOrganizationList();
   * ```
   */
  getMyOrganizationList(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/organization/get_my_organization_list', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.joinOrganizationByInvite();
   * ```
   */
  joinOrganizationByInvite(
    body: OrganizationJoinOrganizationByInviteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/join_organization_by_invite_link', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.quitOrganization();
   * ```
   */
  quitOrganization(body: OrganizationQuitOrganizationParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/quit_organization', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.removeMember();
   * ```
   */
  removeMember(body: OrganizationRemoveMemberParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/remove_organization_member', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.transferOwnership();
   * ```
   */
  transferOwnership(body: OrganizationTransferOwnershipParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/transfer_organization_ownership', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.updateMemberRole();
   * ```
   */
  updateMemberRole(body: OrganizationUpdateMemberRoleParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/organization/update_organization_member_role', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrganizationCreateOrganizationParams {
  /**
   * organization name
   */
  name: string;
}

export interface OrganizationDeleteOrganizationParams {
  /**
   * organization id
   */
  organizationId: string;
}

export interface OrganizationGetMemberListParams {}

export interface OrganizationJoinOrganizationByInviteParams {}

export interface OrganizationQuitOrganizationParams {}

export interface OrganizationRemoveMemberParams {}

export interface OrganizationTransferOwnershipParams {}

export interface OrganizationUpdateMemberRoleParams {}

export declare namespace Organization {
  export {
    type OrganizationCreateOrganizationParams as OrganizationCreateOrganizationParams,
    type OrganizationDeleteOrganizationParams as OrganizationDeleteOrganizationParams,
    type OrganizationGetMemberListParams as OrganizationGetMemberListParams,
    type OrganizationJoinOrganizationByInviteParams as OrganizationJoinOrganizationByInviteParams,
    type OrganizationQuitOrganizationParams as OrganizationQuitOrganizationParams,
    type OrganizationRemoveMemberParams as OrganizationRemoveMemberParams,
    type OrganizationTransferOwnershipParams as OrganizationTransferOwnershipParams,
    type OrganizationUpdateMemberRoleParams as OrganizationUpdateMemberRoleParams,
  };
}
