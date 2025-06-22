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
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxWebTerminalURLResponse</a></code>

Methods:

- <code title="get /boxes/{boxId}">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">retrieve</a>(boxID) -> BoxRetrieveResponse</code>
- <code title="get /boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">list</a>({ ...params }) -> BoxListResponse</code>
- <code title="post /boxes/android">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createAndroid</a>({ ...params }) -> AndroidBox</code>
- <code title="post /boxes/linux">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createLinux</a>({ ...params }) -> LinuxBox</code>
- <code title="post /boxes/{boxId}/commands">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">executeCommands</a>(boxID, { ...params }) -> BoxExecuteCommandsResponse</code>
- <code title="post /boxes/{boxId}/live-view-url">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">liveViewURL</a>(boxID, { ...params }) -> BoxLiveViewURLResponse</code>
- <code title="post /boxes/{boxId}/run-code">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">runCode</a>(boxID, { ...params }) -> BoxRunCodeResponse</code>
- <code title="post /boxes/{boxId}/start">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">start</a>(boxID, { ...params }) -> BoxStartResponse</code>
- <code title="post /boxes/{boxId}/stop">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">stop</a>(boxID, { ...params }) -> BoxStopResponse</code>
- <code title="post /boxes/{boxId}/terminate">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">terminate</a>(boxID, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/web-terminal-url">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">webTerminalURL</a>(boxID, { ...params }) -> BoxWebTerminalURLResponse</code>

### Actions

Types:

- <code><a href="./src/resources/v1/boxes/actions.ts">ActionResult</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenshotResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/actions/click">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">click</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/drag">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">drag</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/move">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">move</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/press-button">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">pressButton</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/press-key">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">pressKey</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/screen-rotation">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenRotation</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/screenshot">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenshot</a>(boxID, { ...params }) -> ActionScreenshotResponse</code>
- <code title="post /boxes/{boxId}/actions/scroll">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">scroll</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/swipe">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">swipe</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/touch">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">touch</a>(boxID, { ...params }) -> ActionResult</code>
- <code title="post /boxes/{boxId}/actions/type">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">type</a>(boxID, { ...params }) -> ActionResult</code>

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

- <code title="get /boxes/{boxId}/fs/list">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">list</a>(boxID, { ...params }) -> FListResponse</code>
- <code title="post /boxes/{boxId}/fs/exists">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">exists</a>(boxID, { ...params }) -> FExistsResponse</code>
- <code title="get /boxes/{boxId}/fs/info">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">info</a>(boxID, { ...params }) -> FInfoResponse</code>
- <code title="get /boxes/{boxId}/fs/read">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">read</a>(boxID, { ...params }) -> FReadResponse</code>
- <code title="delete /boxes/{boxId}/fs">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">remove</a>(boxID, { ...params }) -> FRemoveResponse</code>
- <code title="post /boxes/{boxId}/fs/rename">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">rename</a>(boxID, { ...params }) -> FRenameResponse</code>
- <code title="post /boxes/{boxId}/fs/write">client.v1.boxes.fs.<a href="./src/resources/v1/boxes/fs.ts">write</a>(boxID, { ...params }) -> FWriteResponse</code>

### Browser

Types:

- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserCdpURLResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/browser/connect-url/cdp">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">cdpURL</a>(boxID, { ...params }) -> string</code>

### Android

Types:

- <code><a href="./src/resources/v1/boxes/android.ts">AndroidApp</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidGetConnectAddressResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListActivitiesResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListSimpleResponse</a></code>

Methods:

- <code title="get /boxes/{boxId}/android/apps">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">list</a>(boxID, { ...params }) -> AndroidListResponse</code>
- <code title="post /boxes/{boxId}/android/apps/{packageName}/backup">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">backup</a>(packageName, { ...params }) -> Response</code>
- <code title="post /boxes/{boxId}/android/apps/backup-all">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">backupAll</a>(boxID) -> Response</code>
- <code title="post /boxes/{boxId}/android/apps/{packageName}/close">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">close</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/android/apps/close-all">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">closeAll</a>(boxID) -> void</code>
- <code title="get /boxes/{boxId}/android/apps/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">get</a>(packageName, { ...params }) -> AndroidApp</code>
- <code title="get /boxes/{boxId}/android/connect-address">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">getConnectAddress</a>(boxID) -> AndroidGetConnectAddressResponse</code>
- <code title="post /boxes/{boxId}/android/apps">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">install</a>(boxID, { ...params }) -> void</code>
- <code title="get /boxes/{boxId}/android/apps/{packageName}/activities">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listActivities</a>(packageName, { ...params }) -> AndroidListActivitiesResponse</code>
- <code title="get /boxes/{boxId}/android/apps/simple">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listSimple</a>(boxID, { ...params }) -> AndroidListSimpleResponse</code>
- <code title="post /boxes/{boxId}/android/apps/{packageName}/open">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">open</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/android/apps/{packageName}/restart">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">restart</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/android/apps/restore">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">restore</a>(boxID, { ...params }) -> void</code>
- <code title="delete /boxes/{boxId}/android/apps/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">uninstall</a>(packageName, { ...params }) -> void</code>
