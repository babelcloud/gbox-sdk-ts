// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk-example';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource android', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.create({ architecture: 'arm' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.create({ architecture: 'arm' });
  });

  // skipped: tests are disabled for the time being
  test.skip('click: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.click({ uid: 'uid-1', x: 100, y: 100 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('click: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.click({ uid: 'uid-1', x: 100, y: 100 });
  });

  // skipped: tests are disabled for the time being
  test.skip('deviceScreenSize: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.deviceScreenSize({ uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deviceScreenSize: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.deviceScreenSize({ uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('drag: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.drag({
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
  test.skip('drag: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.drag({
      endX: 100,
      endY: 100,
      ms: 1000,
      startX: 100,
      startY: 100,
      uid: 'uid-1',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('keyPress: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.keyPress({ key: 'enter', uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('keyPress: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.keyPress({ key: 'enter', uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('run: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.run({ command: 'ls -l', uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('run: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.run({ command: 'ls -l', uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('screenshot: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.screenshot({ uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('screenshot: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.screenshot({ uid: 'uid-1' });
  });

  // skipped: tests are disabled for the time being
  test.skip('scroll: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.scroll({
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
  test.skip('scroll: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.scroll({
      endX: 100,
      endY: 100,
      startX: 100,
      startY: 100,
      uid: 'uid-1',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('type: only required params', async () => {
    const responsePromise = client.api.v1.gbox.android.type({ text: 'Hello, World!', uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('type: required and optional params', async () => {
    const response = await client.api.v1.gbox.android.type({ text: 'Hello, World!', uid: 'uid-1' });
  });
});
