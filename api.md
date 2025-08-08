# V1

## Boxes

Types:

- <code><a href="./src/resources/v1/boxes/boxes.ts">AndroidBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateAndroidBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">CreateLinuxBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">LinuxBox</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxDisplayResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxExecuteCommandsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxLiveViewURLResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxRunCodeResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStartResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxStopResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxWebTerminalURLResponse</a></code>
- <code><a href="./src/resources/v1/boxes/boxes.ts">BoxWebsocketURLResponse</a></code>

Methods:

- <code title="get /boxes/{boxId}">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">retrieve</a>(boxID) -> BoxRetrieveResponse</code>
- <code title="get /boxes">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">list</a>({ ...params }) -> BoxListResponse</code>
- <code title="post /boxes/android">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createAndroid</a>({ ...params }) -> AndroidBox</code>
- <code title="post /boxes/linux">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">createLinux</a>({ ...params }) -> LinuxBox</code>
- <code title="get /boxes/{boxId}/display">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">display</a>(boxID) -> BoxDisplayResponse</code>
- <code title="post /boxes/{boxId}/commands">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">executeCommands</a>(boxID, { ...params }) -> BoxExecuteCommandsResponse</code>
- <code title="post /boxes/{boxId}/live-view-url">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">liveViewURL</a>(boxID, { ...params }) -> BoxLiveViewURLResponse</code>
- <code title="post /boxes/{boxId}/run-code">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">runCode</a>(boxID, { ...params }) -> BoxRunCodeResponse</code>
- <code title="post /boxes/{boxId}/start">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">start</a>(boxID, { ...params }) -> BoxStartResponse</code>
- <code title="post /boxes/{boxId}/stop">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">stop</a>(boxID, { ...params }) -> BoxStopResponse</code>
- <code title="post /boxes/{boxId}/terminate">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">terminate</a>(boxID, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/web-terminal-url">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">webTerminalURL</a>(boxID, { ...params }) -> BoxWebTerminalURLResponse</code>
- <code title="get /boxes/{boxId}/websocket-url">client.v1.boxes.<a href="./src/resources/v1/boxes/boxes.ts">websocketURL</a>(boxID) -> BoxWebsocketURLResponse</code>

### Storage

Types:

- <code><a href="./src/resources/v1/boxes/storage.ts">StoragePresignedURLResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/storage/presigned-url">client.v1.boxes.storage.<a href="./src/resources/v1/boxes/storage.ts">presignedURL</a>(boxID, { ...params }) -> string</code>

### Actions

Types:

- <code><a href="./src/resources/v1/boxes/actions.ts">ActionAIResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionClickResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionDragResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionExtractResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionMoveResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionPressButtonResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionPressKeyResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionRecordingStopResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenLayoutResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenRotationResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScreenshotResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionScrollResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionSwipeResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionTouchResponse</a></code>
- <code><a href="./src/resources/v1/boxes/actions.ts">ActionTypeResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/actions/ai">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">ai</a>(boxID, { ...params }) -> ActionAIResponse</code>
- <code title="post /boxes/{boxId}/actions/click">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">click</a>(boxID, { ...params }) -> ActionClickResponse</code>
- <code title="post /boxes/{boxId}/actions/drag">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">drag</a>(boxID, { ...params }) -> ActionDragResponse</code>
- <code title="post /boxes/{boxId}/actions/extract">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">extract</a>(boxID, { ...params }) -> ActionExtractResponse</code>
- <code title="post /boxes/{boxId}/actions/move">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">move</a>(boxID, { ...params }) -> ActionMoveResponse</code>
- <code title="post /boxes/{boxId}/actions/press-button">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">pressButton</a>(boxID, { ...params }) -> ActionPressButtonResponse</code>
- <code title="post /boxes/{boxId}/actions/press-key">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">pressKey</a>(boxID, { ...params }) -> ActionPressKeyResponse</code>
- <code title="post /boxes/{boxId}/actions/recording/start">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">recordingStart</a>(boxID, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/actions/recording/stop">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">recordingStop</a>(boxID) -> ActionRecordingStopResponse</code>
- <code title="get /boxes/{boxId}/actions/screen-layout">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenLayout</a>(boxID) -> ActionScreenLayoutResponse</code>
- <code title="post /boxes/{boxId}/actions/screen-rotation">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenRotation</a>(boxID, { ...params }) -> ActionScreenRotationResponse</code>
- <code title="post /boxes/{boxId}/actions/screenshot">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">screenshot</a>(boxID, { ...params }) -> ActionScreenshotResponse</code>
- <code title="post /boxes/{boxId}/actions/scroll">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">scroll</a>(boxID, { ...params }) -> ActionScrollResponse</code>
- <code title="post /boxes/{boxId}/actions/swipe">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">swipe</a>(boxID, { ...params }) -> ActionSwipeResponse</code>
- <code title="post /boxes/{boxId}/actions/touch">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">touch</a>(boxID, { ...params }) -> ActionTouchResponse</code>
- <code title="post /boxes/{boxId}/actions/type">client.v1.boxes.actions.<a href="./src/resources/v1/boxes/actions.ts">type</a>(boxID, { ...params }) -> ActionTypeResponse</code>

### Proxy

Methods:

- <code title="delete /boxes/{boxId}/proxy">client.v1.boxes.proxy.<a href="./src/resources/v1/boxes/proxy.ts">clear</a>(boxID) -> void</code>
- <code title="get /boxes/{boxId}/proxy">client.v1.boxes.proxy.<a href="./src/resources/v1/boxes/proxy.ts">get</a>(boxID) -> void</code>
- <code title="post /boxes/{boxId}/proxy">client.v1.boxes.proxy.<a href="./src/resources/v1/boxes/proxy.ts">set</a>(boxID, { ...params }) -> void</code>

### Media

Types:

- <code><a href="./src/resources/v1/boxes/media.ts">MediaCreateAlbumResponse</a></code>
- <code><a href="./src/resources/v1/boxes/media.ts">MediaGetAlbumDetailResponse</a></code>
- <code><a href="./src/resources/v1/boxes/media.ts">MediaGetMediaResponse</a></code>
- <code><a href="./src/resources/v1/boxes/media.ts">MediaGetMediaSupportResponse</a></code>
- <code><a href="./src/resources/v1/boxes/media.ts">MediaListAlbumsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/media.ts">MediaListMediaResponse</a></code>
- <code><a href="./src/resources/v1/boxes/media.ts">MediaUpdateAlbumResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/media/albums">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">createAlbum</a>(boxID, { ...params }) -> MediaCreateAlbumResponse</code>
- <code title="delete /boxes/{boxId}/media/albums/{albumName}">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">deleteAlbum</a>(albumName, { ...params }) -> void</code>
- <code title="delete /boxes/{boxId}/media/albums/{albumName}/media/{mediaName}">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">deleteMedia</a>(mediaName, { ...params }) -> void</code>
- <code title="get /boxes/{boxId}/media/albums/{albumName}/media/{mediaName}/download">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">downloadMedia</a>(mediaName, { ...params }) -> Response</code>
- <code title="get /boxes/{boxId}/media/albums/{albumName}">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">getAlbumDetail</a>(albumName, { ...params }) -> MediaGetAlbumDetailResponse</code>
- <code title="get /boxes/{boxId}/media/albums/{albumName}/media/{mediaName}">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">getMedia</a>(mediaName, { ...params }) -> MediaGetMediaResponse</code>
- <code title="get /boxes/{boxId}/media/support">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">getMediaSupport</a>(boxID) -> MediaGetMediaSupportResponse</code>
- <code title="get /boxes/{boxId}/media/albums">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">listAlbums</a>(boxID) -> MediaListAlbumsResponse</code>
- <code title="get /boxes/{boxId}/media/albums/{albumName}/media">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">listMedia</a>(albumName, { ...params }) -> MediaListMediaResponse</code>
- <code title="patch /boxes/{boxId}/media/albums/{albumName}">client.v1.boxes.media.<a href="./src/resources/v1/boxes/media.ts">updateAlbum</a>(albumName, { ...params }) -> MediaUpdateAlbumResponse</code>

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
- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserCloseTabResponse</a></code>
- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserGetTabsResponse</a></code>
- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserOpenTabResponse</a></code>
- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserSwitchTabResponse</a></code>
- <code><a href="./src/resources/v1/boxes/browser.ts">BrowserUpdateTabResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/browser/connect-url/cdp">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">cdpURL</a>(boxID, { ...params }) -> string</code>
- <code title="delete /boxes/{boxId}/browser/tabs/{tabId}">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">closeTab</a>(tabID, { ...params }) -> BrowserCloseTabResponse</code>
- <code title="get /boxes/{boxId}/browser/tabs">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">getTabs</a>(boxID) -> BrowserGetTabsResponse</code>
- <code title="post /boxes/{boxId}/browser/tabs">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">openTab</a>(boxID, { ...params }) -> BrowserOpenTabResponse</code>
- <code title="post /boxes/{boxId}/browser/tabs/{tabId}/switch">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">switchTab</a>(tabID, { ...params }) -> BrowserSwitchTabResponse</code>
- <code title="put /boxes/{boxId}/browser/tabs/{tabId}">client.v1.boxes.browser.<a href="./src/resources/v1/boxes/browser.ts">updateTab</a>(tabID, { ...params }) -> BrowserUpdateTabResponse</code>

### Android

Types:

- <code><a href="./src/resources/v1/boxes/android.ts">AndroidApp</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidGetResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidGetConnectAddressResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidInstallResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListActivitiesResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListAppResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListPkgResponse</a></code>
- <code><a href="./src/resources/v1/boxes/android.ts">AndroidListPkgSimpleResponse</a></code>

Methods:

- <code title="post /boxes/{boxId}/android/packages/{packageName}/backup">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">backup</a>(packageName, { ...params }) -> Response</code>
- <code title="post /boxes/{boxId}/android/packages/backup-all">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">backupAll</a>(boxID) -> Response</code>
- <code title="post /boxes/{boxId}/android/packages/{packageName}/close">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">close</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/android/packages/close-all">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">closeAll</a>(boxID) -> void</code>
- <code title="get /boxes/{boxId}/android/packages/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">get</a>(packageName, { ...params }) -> AndroidGetResponse</code>
- <code title="get /boxes/{boxId}/android/apps/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">getApp</a>(packageName, { ...params }) -> AndroidApp</code>
- <code title="get /boxes/{boxId}/android/connect-address">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">getConnectAddress</a>(boxID) -> AndroidGetConnectAddressResponse</code>
- <code title="post /boxes/{boxId}/android/packages">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">install</a>(boxID, { ...params }) -> AndroidInstallResponse</code>
- <code title="get /boxes/{boxId}/android/packages/{packageName}/activities">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listActivities</a>(packageName, { ...params }) -> AndroidListActivitiesResponse</code>
- <code title="get /boxes/{boxId}/android/apps">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listApp</a>(boxID) -> AndroidListAppResponse</code>
- <code title="get /boxes/{boxId}/android/packages">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listPkg</a>(boxID, { ...params }) -> AndroidListPkgResponse</code>
- <code title="get /boxes/{boxId}/android/packages/simple">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">listPkgSimple</a>(boxID, { ...params }) -> AndroidListPkgSimpleResponse</code>
- <code title="post /boxes/{boxId}/android/packages/{packageName}/open">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">open</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/android/packages/{packageName}/restart">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">restart</a>(packageName, { ...params }) -> void</code>
- <code title="post /boxes/{boxId}/android/packages/restore">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">restore</a>(boxID, { ...params }) -> void</code>
- <code title="delete /boxes/{boxId}/android/packages/{packageName}">client.v1.boxes.android.<a href="./src/resources/v1/boxes/android.ts">uninstall</a>(packageName, { ...params }) -> void</code>
