// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Organization extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.organization.createAnOrganization({
   *   name: 'name',
   * });
   * ```
   */
  createAnOrganization(
    body: OrganizationCreateAnOrganizationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/create_an_organization', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.deleteAnOrganization({
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  deleteAnOrganization(
    body: OrganizationDeleteAnOrganizationParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/delete_an_organization', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.getOrganizationMemberList();
   * ```
   */
  getOrganizationMemberList(
    body: OrganizationGetOrganizationMemberListParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/get_organization_member_list', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.joinOrganizationByInviteLink();
   * ```
   */
  joinOrganizationByInviteLink(
    body: OrganizationJoinOrganizationByInviteLinkParams,
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
   * await client.api.v1.organization.removeOrganizationMember();
   * ```
   */
  removeOrganizationMember(
    body: OrganizationRemoveOrganizationMemberParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/remove_organization_member', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.retrieveGetMyOrganizationList();
   * ```
   */
  retrieveGetMyOrganizationList(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v1/organization/get_my_organization_list', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.transferOrganizationOwnership();
   * ```
   */
  transferOrganizationOwnership(
    body: OrganizationTransferOrganizationOwnershipParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/transfer_organization_ownership', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.organization.updateOrganizationMemberRole();
   * ```
   */
  updateOrganizationMemberRole(
    body: OrganizationUpdateOrganizationMemberRoleParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v1/organization/update_organization_member_role', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrganizationCreateAnOrganizationParams {
  /**
   * organization name
   */
  name: string;
}

export interface OrganizationDeleteAnOrganizationParams {
  /**
   * organization id
   */
  organizationId: string;
}

export interface OrganizationGetOrganizationMemberListParams {}

export interface OrganizationJoinOrganizationByInviteLinkParams {}

export interface OrganizationQuitOrganizationParams {}

export interface OrganizationRemoveOrganizationMemberParams {}

export interface OrganizationTransferOrganizationOwnershipParams {}

export interface OrganizationUpdateOrganizationMemberRoleParams {}

export declare namespace Organization {
  export {
    type OrganizationCreateAnOrganizationParams as OrganizationCreateAnOrganizationParams,
    type OrganizationDeleteAnOrganizationParams as OrganizationDeleteAnOrganizationParams,
    type OrganizationGetOrganizationMemberListParams as OrganizationGetOrganizationMemberListParams,
    type OrganizationJoinOrganizationByInviteLinkParams as OrganizationJoinOrganizationByInviteLinkParams,
    type OrganizationQuitOrganizationParams as OrganizationQuitOrganizationParams,
    type OrganizationRemoveOrganizationMemberParams as OrganizationRemoveOrganizationMemberParams,
    type OrganizationTransferOrganizationOwnershipParams as OrganizationTransferOrganizationOwnershipParams,
    type OrganizationUpdateOrganizationMemberRoleParams as OrganizationUpdateOrganizationMemberRoleParams,
  };
}
