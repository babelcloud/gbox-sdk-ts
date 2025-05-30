# V1

## Boxes

Types:

- <code><a href="./src/resources/v1/boxes/boxes.ts">AndroidBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateAndroidBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateBoxConfig</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateLinuxBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">LinuxBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxExecuteCommandsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRunCodeResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStartResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStopResponse</a></code>

Methods:

- <code title="post /api/v1/boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /api/v1/boxes/{id}">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /api/v1/boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">list</a>({ ...params }) -> BoxListResponse</code>
- <code title="post /api/v1/boxes/android">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createAndroid</a>({ ...params }) -> AndroidBox</code>
- <code title="post /api/v1/boxes/linux">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createLinux</a>({ ...params }) -> LinuxBox</code>
- <code title="post /api/v1/boxes/{id}/commands">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">executeCommands</a>(id, { ...params }) -> BoxExecuteCommandsResponse</code>
- <code title="post /api/v1/boxes/{id}/run-code">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">runCode</a>(id, { ...params }) -> BoxRunCodeResponse</code>
- <code title="post /api/v1/boxes/{id}/start">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">start</a>(id) -> BoxStartResponse</code>
- <code title="post /api/v1/boxes/{id}/stop">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">stop</a>(id) -> BoxStopResponse</code>

### Actions

Types:

- <code><a href="./src/resources/v1/boxes/actions.ts">ActionResult</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenshotResponse</a></code>

Methods:

- <code title="post /api/v1/boxes/{id}/actions/click">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">click</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/boxes/{id}/actions/drag">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">drag</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/boxes/{id}/actions/move">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">move</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/boxes/{id}/actions/press">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">press</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/boxes/{id}/actions/screenshot">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenshot</a>(id, { ...params }) -> ActionScreenshotResponse</code>
- <code title="post /api/v1/boxes/{id}/actions/scroll">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">scroll</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/boxes/{id}/actions/touch">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">touch</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/boxes/{id}/actions/type">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">type</a>(id, { ...params }) -> ActionResult</code>

### Fs

Types:

- <code><a href="./src/resources/v1/boxes/fs.ts">FListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FReadResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FWriteResponse</a></code>

Methods:

- <code title="get /api/v1/boxes/{id}/fs/list">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">list</a>(id, { ...params }) -> FListResponse</code>
- <code title="get /api/v1/boxes/{id}/fs/read">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">read</a>(id, { ...params }) -> FReadResponse</code>
- <code title="post /api/v1/boxes/{id}/fs/write">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">write</a>(id, { ...params }) -> FWriteResponse</code>
