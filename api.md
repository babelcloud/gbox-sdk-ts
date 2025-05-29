# API

## V1

### Auth

#### GitHub

#### Google

### User

### Organization

### APIKey

### Invite

### Gbox

#### Terminal

#### Android

### Template

### Sandbox

### Proxy

### Vm

## V1_1

### Box

# Health

# V1

## Boxes

Types:

- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxCreateAndroidResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxCreateLinuxResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxExecuteCommandsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRunCodeResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStartResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStopResponse</a></code>

Methods:

- <code title="post /api/v1/boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /api/v1/boxes/{id}">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /api/v1/boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">list</a>({ ...params }) -> BoxListResponse</code>
- <code title="post /api/v1/boxes/android">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createAndroid</a>({ ...params }) -> BoxCreateAndroidResponse</code>
- <code title="post /api/v1/boxes/linux">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createLinux</a>({ ...params }) -> BoxCreateLinuxResponse</code>
- <code title="post /api/v1/boxes/{id}/commands">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">executeCommands</a>(id, { ...params }) -> BoxExecuteCommandsResponse</code>
- <code title="post /api/v1/boxes/{id}/run-code">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">runCode</a>(id, { ...params }) -> BoxRunCodeResponse</code>
- <code title="post /api/v1/boxes/{id}/start">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">start</a>(id) -> BoxStartResponse</code>
- <code title="post /api/v1/boxes/{id}/stop">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">stop</a>(id) -> BoxStopResponse</code>

### Actions

Types:

- <code><a href="./src/resources/v1/boxes/actions.ts">ActionClickResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionDragResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionKeypressResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionMoveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenshotResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScrollResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionTouchResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionTypeResponse</a></code>

Methods:

- <code title="post /api/v1/boxes/{id}/actions/click">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">click</a>(id, { ...params }) -> ActionClickResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/drag">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">drag</a>(id, { ...params }) -> ActionDragResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/keypress">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">keypress</a>(id, { ...params }) -> ActionKeypressResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/move">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">move</a>(id, { ...params }) -> ActionMoveResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/screenshot">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenshot</a>(id, { ...params }) -> ActionScreenshotResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/scroll">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">scroll</a>(id, { ...params }) -> ActionScrollResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/touch">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">touch</a>(id, { ...params }) -> ActionTouchResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/type">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">type</a>(id, { ...params }) -> ActionTypeResponse</code>
