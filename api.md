# Boxes

# Actions

# API

## V1

### Auth

Methods:

- <code title="get /api/v1/auth/get_login_client_id">client.api.v1.auth.<a href="./src/resources/api/v1/auth/auth.ts">retrieveGetLoginClientID</a>() -> void</code>

#### GitHub

Methods:

- <code title="post /api/v1/auth/github/callback">client.api.v1.auth.github.<a href="./src/resources/api/v1/auth/github.ts">callback</a>({ ...params }) -> void</code>

#### Google

Methods:

- <code title="post /api/v1/auth/google/callback">client.api.v1.auth.google.<a href="./src/resources/api/v1/auth/google.ts">callback</a>({ ...params }) -> void</code>

### User

Methods:

- <code title="post /api/v1/user/delete_user">client.api.v1.user.<a href="./src/resources/api/v1/user.ts">deleteUser</a>() -> void</code>
- <code title="get /api/v1/user/get_current_user_info">client.api.v1.user.<a href="./src/resources/api/v1/user.ts">retrieveGetCurrentUserInfo</a>() -> void</code>
- <code title="post /api/v1/user/update_user_info">client.api.v1.user.<a href="./src/resources/api/v1/user.ts">updateUserInfo</a>({ ...params }) -> void</code>
- <code title="post /api/v1/user/use_invite_code">client.api.v1.user.<a href="./src/resources/api/v1/user.ts">useInviteCode</a>({ ...params }) -> void</code>

### Organization

Methods:

- <code title="post /api/v1/organization/create_an_organization">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">createAnOrganization</a>({ ...params }) -> void</code>
- <code title="post /api/v1/organization/delete_an_organization">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">deleteAnOrganization</a>({ ...params }) -> void</code>
- <code title="post /api/v1/organization/get_organization_member_list">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">getOrganizationMemberList</a>() -> void</code>
- <code title="post /api/v1/organization/join_organization_by_invite_link">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">joinOrganizationByInviteLink</a>() -> void</code>
- <code title="post /api/v1/organization/quit_organization">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">quitOrganization</a>() -> void</code>
- <code title="post /api/v1/organization/remove_organization_member">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">removeOrganizationMember</a>() -> void</code>
- <code title="get /api/v1/organization/get_my_organization_list">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">retrieveGetMyOrganizationList</a>() -> void</code>
- <code title="post /api/v1/organization/transfer_organization_ownership">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">transferOrganizationOwnership</a>() -> void</code>
- <code title="post /api/v1/organization/update_organization_member_role">client.api.v1.organization.<a href="./src/resources/api/v1/organization.ts">updateOrganizationMemberRole</a>() -> void</code>

### APIKey

Methods:

- <code title="post /api/v1/api_key/create_an_api_key">client.api.v1.apiKey.<a href="./src/resources/api/v1/api-key.ts">createAnAPIKey</a>({ ...params }) -> void</code>
- <code title="post /api/v1/api_key/delete_an_api_key">client.api.v1.apiKey.<a href="./src/resources/api/v1/api-key.ts">deleteAnAPIKey</a>({ ...params }) -> void</code>
- <code title="post /api/v1/api_key/get_all_api_key">client.api.v1.apiKey.<a href="./src/resources/api/v1/api-key.ts">getAllAPIKey</a>({ ...params }) -> void</code>

### Invite

Methods:

- <code title="post /api/v1/invite/create_invite_link">client.api.v1.invite.<a href="./src/resources/api/v1/invite.ts">createInviteLink</a>() -> void</code>
- <code title="post /api/v1/invite/delete_invite_link">client.api.v1.invite.<a href="./src/resources/api/v1/invite.ts">deleteInviteLink</a>() -> void</code>
- <code title="post /api/v1/invite/get_invite_link">client.api.v1.invite.<a href="./src/resources/api/v1/invite.ts">getInviteLink</a>() -> void</code>

### Gbox

Methods:

- <code title="post /api/v1/gbox/stop">client.api.v1.gbox.<a href="./src/resources/api/v1/gbox/gbox.ts">stop</a>({ ...params }) -> void</code>

#### Terminal

Methods:

- <code title="post /api/v1/gbox/terminal/create">client.api.v1.gbox.terminal.<a href="./src/resources/api/v1/gbox/terminal.ts">create</a>() -> void</code>
- <code title="post /api/v1/gbox/terminal/run">client.api.v1.gbox.terminal.<a href="./src/resources/api/v1/gbox/terminal.ts">run</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/terminal/runCode">client.api.v1.gbox.terminal.<a href="./src/resources/api/v1/gbox/terminal.ts">runCode</a>({ ...params }) -> void</code>

#### Android

Methods:

- <code title="post /api/v1/gbox/android/create">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">create</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/click">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">click</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/deviceScreenSize">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">deviceScreenSize</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/drag">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">drag</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/keyPress">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">keyPress</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/run">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">run</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/screenshot">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">screenshot</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/scroll">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">scroll</a>({ ...params }) -> void</code>
- <code title="post /api/v1/gbox/android/type">client.api.v1.gbox.android.<a href="./src/resources/api/v1/gbox/android.ts">type</a>({ ...params }) -> void</code>

### Template

Methods:

- <code title="get /api/v1/template/get_all_templates">client.api.v1.template.<a href="./src/resources/api/v1/template.ts">retrieveGetAllTemplates</a>() -> void</code>

### Sandbox

Methods:

- <code title="post /api/v1/sandbox/delete_sandbox">client.api.v1.sandbox.<a href="./src/resources/api/v1/sandbox.ts">deleteSandbox</a>({ ...params }) -> void</code>
- <code title="post /api/v1/sandbox/get_sandbox_list">client.api.v1.sandbox.<a href="./src/resources/api/v1/sandbox.ts">getSandboxList</a>({ ...params }) -> void</code>

### Proxy

Methods:

- <code title="get /api/v1/proxy/{uid}/{path}">client.api.v1.proxy.<a href="./src/resources/api/v1/proxy.ts">retrieve</a>(path\_, { ...params }) -> void</code>
- <code title="patch /api/v1/proxy/{uid}/{path}">client.api.v1.proxy.<a href="./src/resources/api/v1/proxy.ts">update</a>(path\_, { ...params }) -> void</code>
- <code title="delete /api/v1/proxy/{uid}/{path}">client.api.v1.proxy.<a href="./src/resources/api/v1/proxy.ts">delete</a>(path\_, { ...params }) -> void</code>

### Vm

Methods:

- <code title="post /api/v1/vm/run_code">client.api.v1.vm.<a href="./src/resources/api/v1/vm.ts">runCode</a>() -> void</code>

## V1_1

### Box

Types:

- <code><a href="./src/resources/api/v1-1/box.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxClickResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxDragResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxKeypressResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxMoveResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxScreenshotResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxScrollResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxTouchResponse</a></code>
- <code><a href="./src/resources/api/v1-1/box.ts">BoxTypeResponse</a></code>

Methods:

- <code title="post /api/v1.1/box">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /api/v1.1/box/{id}">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /api/v1.1/box">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">list</a>() -> BoxListResponse</code>
- <code title="post /api/v1.1/box/{id}/click">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">click</a>(id, { ...params }) -> BoxClickResponse</code>
- <code title="post /api/v1.1/box/android">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">createAndroid</a>({ ...params }) -> void</code>
- <code title="post /api/v1.1/box/linux">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">createLinux</a>({ ...params }) -> void</code>
- <code title="post /api/v1.1/box/{id}/drag">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">drag</a>(id, { ...params }) -> BoxDragResponse</code>
- <code title="post /api/v1.1/box/{id}/keypress">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">keypress</a>(id, { ...params }) -> BoxKeypressResponse</code>
- <code title="post /api/v1.1/box/{id}/move">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">move</a>(id, { ...params }) -> BoxMoveResponse</code>
- <code title="post /api/v1.1/box/{id}/screenshot">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">screenshot</a>(id, { ...params }) -> BoxScreenshotResponse</code>
- <code title="post /api/v1.1/box/{id}/scroll">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">scroll</a>(id, { ...params }) -> BoxScrollResponse</code>
- <code title="post /api/v1.1/box/{id}/touch">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">touch</a>(id, { ...params }) -> BoxTouchResponse</code>
- <code title="post /api/v1.1/box/{id}/type">client.api.v1_1.box.<a href="./src/resources/api/v1-1/box.ts">type</a>(id, { ...params }) -> BoxTypeResponse</code>

# Health

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> void</code>
