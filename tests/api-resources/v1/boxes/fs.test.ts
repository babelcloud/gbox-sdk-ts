// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient } from 'gbox-sdk-example';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fs', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.list('id', { depth: 0, path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.boxes.fs.list('id', { depth: 0, path: 'path' });
  });

  // skipped: tests are disabled for the time being
  test.skip('read: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.read('id', { path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('read: required and optional params', async () => {
    const response = await client.v1.boxes.fs.read('id', { path: 'path' });
  });

  // skipped: tests are disabled for the time being
  test.skip('write: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.write('id', { content: 'content', path: 'path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('write: required and optional params', async () => {
    const response = await client.v1.boxes.fs.write('id', { content: 'content', path: 'path' });
  });
});
