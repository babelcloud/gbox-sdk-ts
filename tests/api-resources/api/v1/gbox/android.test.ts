// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource android', () => {
  // skipped: tests are disabled for the time being
  test.skip('captureScreenshot: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.captureScreenshot({ uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('captureScreenshot: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.captureScreenshot({ uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('clickDevice: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.clickDevice({ uid: 'uid-1', x: 100, y: 100 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('clickDevice: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.clickDevice({ uid: 'uid-1', x: 100, y: 100 });
  });

  // skipped: tests are disabled for the time being
  test.skip('createContainer: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.createContainer({ architecture: 'arm' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createContainer: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.createContainer({ architecture: 'arm' });
  });

  // skipped: tests are disabled for the time being
  test.skip('dragDevice: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.dragDevice({
      endX: 100,
      endY: 100,
      ms: 1000,
      startX: 100,
      startY: 100,
      uid: 'uid-1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('dragDevice: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.dragDevice({
      endX: 100,
      endY: 100,
      ms: 1000,
      startX: 100,
      startY: 100,
      uid: 'uid-1',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getDeviceScreenSize: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.getDeviceScreenSize({ uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getDeviceScreenSize: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.getDeviceScreenSize({ uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('pressKey: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.pressKey({ key: 'enter', uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('pressKey: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.pressKey({ key: 'enter', uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('runCommand: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.runCommand({ command: 'ls -l', uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('runCommand: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.runCommand({ command: 'ls -l', uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('scrollDevice: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.scrollDevice({
      endX: 100,
      endY: 100,
      startX: 100,
      startY: 100,
      uid: 'uid-1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('scrollDevice: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.scrollDevice({
      endX: 100,
      endY: 100,
      startX: 100,
      startY: 100,
      uid: 'uid-1',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('typeText: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.typeText({ text: 'Hello, World!', uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('typeText: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.typeText({ text: 'Hello, World!', uid: 'uid-1' });
  });
});
