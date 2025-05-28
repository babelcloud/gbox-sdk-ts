// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeyAPI from './api-key';
import { APIKey, APIKeyCreateParams, APIKeyDeleteParams, APIKeyGetAllParams } from './api-key';
import * as InviteAPI from './invite';
import { Invite, InviteCreateLinkParams, InviteDeleteLinkParams, InviteGetLinkParams } from './invite';
import * as OrganizationAPI from './organization';
import {
  Organization,
  OrganizationCreateOrganizationParams,
  OrganizationDeleteOrganizationParams,
  OrganizationGetMemberListParams,
  OrganizationJoinOrganizationByInviteParams,
  OrganizationQuitOrganizationParams,
  OrganizationRemoveMemberParams,
  OrganizationTransferOwnershipParams,
  OrganizationUpdateMemberRoleParams,
} from './organization';
import * as ProxyAPI from './proxy';
import {
  Proxy,
  ProxyDeleteParams,
  ProxyGetParams,
  ProxyPatchParams,
  ProxyPostParams,
  ProxyUpdateParams,
} from './proxy';
import * as SandboxAPI from './sandbox';
import { Sandbox, SandboxDeleteParams, SandboxGetListParams } from './sandbox';
import * as TemplateAPI from './template';
import { Template } from './template';
import * as UserAPI from './user';
import { User, UserUpdateUserInfoParams, UserUseInviteCodeParams } from './user';
import * as VmAPI from './vm';
import { Vm, VmRunCodeParams } from './vm';
import * as AuthAPI from './auth/auth';
import { Auth } from './auth/auth';
import * as GboxAPI from './gbox/gbox';
import { Gbox, GboxStopParams } from './gbox/gbox';

export class V1 extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);
  organization: OrganizationAPI.Organization = new OrganizationAPI.Organization(this._client);
  apiKey: APIKeyAPI.APIKey = new APIKeyAPI.APIKey(this._client);
  invite: InviteAPI.Invite = new InviteAPI.Invite(this._client);
  gbox: GboxAPI.Gbox = new GboxAPI.Gbox(this._client);
  template: TemplateAPI.Template = new TemplateAPI.Template(this._client);
  sandbox: SandboxAPI.Sandbox = new SandboxAPI.Sandbox(this._client);
  proxy: ProxyAPI.Proxy = new ProxyAPI.Proxy(this._client);
  vm: VmAPI.Vm = new VmAPI.Vm(this._client);
}

V1.Auth = Auth;
V1.User = User;
V1.Organization = Organization;
V1.APIKey = APIKey;
V1.Invite = Invite;
V1.Gbox = Gbox;
V1.Template = Template;
V1.Sandbox = Sandbox;
V1.Proxy = Proxy;
V1.Vm = Vm;

export declare namespace V1 {
  export { Auth as Auth };

  export {
    User as User,
    type UserUpdateUserInfoParams as UserUpdateUserInfoParams,
    type UserUseInviteCodeParams as UserUseInviteCodeParams,
  };

  export {
    Organization as Organization,
    type OrganizationCreateOrganizationParams as OrganizationCreateOrganizationParams,
    type OrganizationDeleteOrganizationParams as OrganizationDeleteOrganizationParams,
    type OrganizationGetMemberListParams as OrganizationGetMemberListParams,
    type OrganizationJoinOrganizationByInviteParams as OrganizationJoinOrganizationByInviteParams,
    type OrganizationQuitOrganizationParams as OrganizationQuitOrganizationParams,
    type OrganizationRemoveMemberParams as OrganizationRemoveMemberParams,
    type OrganizationTransferOwnershipParams as OrganizationTransferOwnershipParams,
    type OrganizationUpdateMemberRoleParams as OrganizationUpdateMemberRoleParams,
  };

  export {
    APIKey as APIKey,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
    type APIKeyGetAllParams as APIKeyGetAllParams,
  };

  export {
    Invite as Invite,
    type InviteCreateLinkParams as InviteCreateLinkParams,
    type InviteDeleteLinkParams as InviteDeleteLinkParams,
    type InviteGetLinkParams as InviteGetLinkParams,
  };

  export { Gbox as Gbox, type GboxStopParams as GboxStopParams };

  export { Template as Template };

  export {
    Sandbox as Sandbox,
    type SandboxDeleteParams as SandboxDeleteParams,
    type SandboxGetListParams as SandboxGetListParams,
  };

  export {
    Proxy as Proxy,
    type ProxyUpdateParams as ProxyUpdateParams,
    type ProxyDeleteParams as ProxyDeleteParams,
    type ProxyGetParams as ProxyGetParams,
    type ProxyPatchParams as ProxyPatchParams,
    type ProxyPostParams as ProxyPostParams,
  };

  export { Vm as Vm, type VmRunCodeParams as VmRunCodeParams };
}
