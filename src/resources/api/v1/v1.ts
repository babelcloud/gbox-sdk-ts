// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeyAPI from './api-key';
import { APIKey } from './api-key';
import * as InviteAPI from './invite';
import { Invite } from './invite';
import * as OrganizationAPI from './organization';
import { Organization } from './organization';
import * as ProxyAPI from './proxy';
import { Proxy } from './proxy';
import * as SandboxAPI from './sandbox';
import { Sandbox } from './sandbox';
import * as TemplateAPI from './template';
import { Template } from './template';
import * as UserAPI from './user';
import { User } from './user';
import * as VmAPI from './vm';
import { Vm } from './vm';
import * as AuthAPI from './auth/auth';
import { Auth } from './auth/auth';
import * as GboxAPI from './gbox/gbox';
import { Gbox } from './gbox/gbox';

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

  export { User as User };

  export { Organization as Organization };

  export { APIKey as APIKey };

  export { Invite as Invite };

  export { Gbox as Gbox };

  export { Template as Template };

  export { Sandbox as Sandbox };

  export { Proxy as Proxy };

  export { Vm as Vm };
}
