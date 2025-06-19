# V1

## Boxes

Types:

- <code><a href="./src/resources/v1/boxes/boxes.ts">AndroidBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateAndroidBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateBoxConfig</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateLinuxBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">LinuxBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxExecuteCommandsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxLiveViewURLResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRunCodeResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStartResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStopResponse</a></code>

Methods:

- <code title="get /boxes/{id}">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">list</a>({ ...params }) -> BoxListResponse</code>
- <code title="post /boxes/android">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createAndroid</a>({ ...params }) -> AndroidBox</code>
- <code title="post /boxes/linux">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createLinux</a>({ ...params }) -> LinuxBox</code>
- <code title="post /boxes/{id}/commands">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">executeCommands</a>(id, { ...params }) -> BoxExecuteCommandsResponse</code>
- <code title="get /boxes/{id}/live-view-url">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">liveViewURL</a>(id) -> BoxLiveViewURLResponse</code>
- <code title="post /boxes/{id}/run-code">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">runCode</a>(id, { ...params }) -> BoxRunCodeResponse</code>
- <code title="post /boxes/{id}/start">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">start</a>(id, { ...params }) -> BoxStartResponse</code>
- <code title="post /boxes/{id}/stop">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">stop</a>(id, { ...params }) -> BoxStopResponse</code>
- <code title="post /boxes/{id}/terminate">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">terminate</a>(id, { ...params }) -> void</code>

### Actions

Types:

- <code><a href="./src/resources/v1/boxes/actions.ts">ActionResult</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenshotResponse</a></code>

Methods:

- <code title="post /boxes/{id}/actions/click">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">click</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/drag">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">drag</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/move">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">move</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/press-button">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">pressButton</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/press-key">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">pressKey</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/screenshot">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenshot</a>(id, { ...params }) -> ActionScreenshotResponse</code>
- <code title="post /boxes/{id}/actions/scroll">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">scroll</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/swipe">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">swipe</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/touch">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">touch</a>(id, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{id}/actions/type">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">type</a>(id, { ...params }) -> ActionResult</code>

### Fs

Types:

- <code><a href="./src/resources/v1/boxes/fs.ts">FListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FExistsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FInfoResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FReadResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FRemoveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FRenameResponse</a></code>
- <code><a href="./src/resources/v1/boxes/fs.ts">FWriteResponse</a></code>

Methods:

- <code title="get /boxes/{id}/fs/list">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">list</a>(id, { ...params }) -> FListResponse</code>
- <code title="post /boxes/{id}/fs/exists">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">exists</a>(id, { ...params }) -> FExistsResponse</code>
- <code title="get /boxes/{id}/fs/info">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">info</a>(id, { ...params }) -> FInfoResponse</code>
- <code title="get /boxes/{id}/fs/read">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">read</a>(id, { ...params }) -> FReadResponse</code>
- <code title="delete /boxes/{id}/fs">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">remove</a>(id, { ...params }) -> FRemoveResponse</code>
- <code title="post /boxes/{id}/fs/rename">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">rename</a>(id, { ...params }) -> FRenameResponse</code>
- <code title="post /boxes/{id}/fs/write">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">write</a>(id, { ...params }) -> FWriteResponse</code>

### Browser

Types:

- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserCdpURLResponse</a></code>

Methods:

- <code title="get /boxes/{id}/browser/connect-url/cdp">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">cdpURL</a>(id) -> string</code>

### Android

Types:

- <code><a href="./src/resources/v1/boxes/android.ts">AndroidApp</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidGetConnectAddressResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListActivitiesResponse</a></code>

Methods:

- <code title="get /boxes/{id}/android/apps">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">list</a>(id, { ...params }) -> AndroidListResponse</code>
- <code title="post /boxes/{id}/android/apps/{packageName}/close">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">close</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{id}/android/apps/close-all">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">closeAll</a>(id) -> void</code>
- <code title="get /boxes/{id}/android/apps/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">get</a>(packageName, { ...params }) -> AndroidApp</code>
- <code title="get /boxes/{id}/android/connect-address">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">getConnectAddress</a>(id) -> AndroidGetConnectAddressResponse</code>
- <code title="post /boxes/{id}/android/apps">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">install</a>(id, { ...params }) -> void</code>
- <code title="get /boxes/{id}/android/apps/{packageName}/activities">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listActivities</a>(packageName, { ...params }) -> AndroidListActivitiesResponse</code>
- <code title="post /boxes/{id}/android/apps/{packageName}/open">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">open</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{id}/android/apps/{packageName}/restart">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">restart</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{id}/android/screen/rotate">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">rotateScreen</a>(id, { ...params }) -> void</code>
- <code title="delete /boxes/{id}/android/apps/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">uninstall</a>(packageName, { ...params }) -> void</code>
