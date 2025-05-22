# Boxes

Types:

- <code><a href="./src/resources/boxes.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxDeleteResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxCreateAndroidResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxCreateLinuxResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxStartResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxStopResponse</a></code>

Methods:

- <code title="post /boxes">client.boxes.<a href="./src/resources/boxes.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /boxes/{id}">client.boxes.<a href="./src/resources/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /boxes">client.boxes.<a href="./src/resources/boxes.ts">list</a>() -> BoxListResponse</code>
- <code title="delete /boxes/{id}">client.boxes.<a href="./src/resources/boxes.ts">delete</a>(id) -> BoxDeleteResponse</code>
- <code title="post /boxes/android">client.boxes.<a href="./src/resources/boxes.ts">createAndroid</a>({ ...params }) -> BoxCreateAndroidResponse</code>
- <code title="post /boxes/linux">client.boxes.<a href="./src/resources/boxes.ts">createLinux</a>({ ...params }) -> BoxCreateLinuxResponse</code>
- <code title="post /boxes/{id}/start">client.boxes.<a href="./src/resources/boxes.ts">start</a>(id) -> BoxStartResponse</code>
- <code title="post /boxes/{id}/stop">client.boxes.<a href="./src/resources/boxes.ts">stop</a>(id) -> BoxStopResponse</code>

# Actions

Methods:

- <code title="post /boxes/{id}/actions/click">client.actions.<a href="./src/resources/actions.ts">click</a>(id, { ...params }) -> void</code>
- <code title="post /boxes/{id}/actions/drag">client.actions.<a href="./src/resources/actions.ts">drag</a>(id, { ...params }) -> void</code>
- <code title="post /boxes/{id}/actions/keypress">client.actions.<a href="./src/resources/actions.ts">keypress</a>(id, { ...params }) -> void</code>
- <code title="post /boxes/{id}/actions/move">client.actions.<a href="./src/resources/actions.ts">move</a>(id, { ...params }) -> void</code>
- <code title="post /boxes/{id}/actions/scroll">client.actions.<a href="./src/resources/actions.ts">scroll</a>(id, { ...params }) -> void</code>
- <code title="post /boxes/{id}/actions/touch">client.actions.<a href="./src/resources/actions.ts">touch</a>(id, { ...params }) -> void</code>
- <code title="post /boxes/{id}/actions/type">client.actions.<a href="./src/resources/actions.ts">type</a>(id, { ...params }) -> void</code>
