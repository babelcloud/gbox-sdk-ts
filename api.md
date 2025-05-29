# V1

## Box

Types:

- <code><a href="./src/resources/v1/box.ts">ActionResult</a></code>
- <code><a href="./src/resources/v1/box.ts">AndroidBox</a></code>
- <code><a href="./src/resources/v1/box.ts">CreateAndroidBox</a></code>
- <code><a href="./src/resources/v1/box.ts">CreateBoxConfig</a></code>
- <code><a href="./src/resources/v1/box.ts">CreateLinuxBox</a></code>
- <code><a href="./src/resources/v1/box.ts">LinuxBox</a></code>
- <code><a href="./src/resources/v1/box.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/v1/box.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/box.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/v1/box.ts">BoxExecuteCommandsResponse</a></code>
- <code><a href="./src/resources/v1/box.ts">BoxRunCodeResponse</a></code>
- <code><a href="./src/resources/v1/box.ts">BoxScreenshotResponse</a></code>

Methods:

- <code title="post /api/v1/box">client.v1.box.<a href="./src/resources/v1/box.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /api/v1/box/{id}">client.v1.box.<a href="./src/resources/v1/box.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /api/v1/box">client.v1.box.<a href="./src/resources/v1/box.ts">list</a>({ ...params }) -> BoxListResponse</code>
- <code title="post /api/v1/box/{id}/click">client.v1.box.<a href="./src/resources/v1/box.ts">click</a>(id, { ...params }) -> LinuxBox</code>
- <code title="post /api/v1/box/android">client.v1.box.<a href="./src/resources/v1/box.ts">createAndroid</a>({ ...params }) -> AndroidBox</code>
- <code title="post /api/v1/box/linux">client.v1.box.<a href="./src/resources/v1/box.ts">createLinux</a>({ ...params }) -> LinuxBox</code>
- <code title="post /api/v1/box/{id}/drag">client.v1.box.<a href="./src/resources/v1/box.ts">drag</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/box/{id}/commands">client.v1.box.<a href="./src/resources/v1/box.ts">executeCommands</a>(id, { ...params }) -> BoxExecuteCommandsResponse</code>
- <code title="post /api/v1/box/{id}/keypress">client.v1.box.<a href="./src/resources/v1/box.ts">keypress</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/box/{id}/move">client.v1.box.<a href="./src/resources/v1/box.ts">move</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/box/{id}/run-code">client.v1.box.<a href="./src/resources/v1/box.ts">runCode</a>(id, { ...params }) -> BoxRunCodeResponse</code>
- <code title="post /api/v1/box/{id}/screenshot">client.v1.box.<a href="./src/resources/v1/box.ts">screenshot</a>(id, { ...params }) -> BoxScreenshotResponse</code>
- <code title="post /api/v1/box/{id}/scroll">client.v1.box.<a href="./src/resources/v1/box.ts">scroll</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/box/{id}/touch">client.v1.box.<a href="./src/resources/v1/box.ts">touch</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /api/v1/box/{id}/type">client.v1.box.<a href="./src/resources/v1/box.ts">type</a>(id, { ...params }) -> ActionResult</code>
