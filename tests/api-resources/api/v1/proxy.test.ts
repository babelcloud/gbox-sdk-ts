// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proxy', () => {
  // skipped: tests are disabled for the time being
  test.skip('deleteProxy: only required params', async () => {
    const responsePromise = client.api.v1.proxy.deleteProxy('path', { uid: 'uid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteProxy: required and optional params', async () => {
    const response = await client.api.v1.proxy.deleteProxy('path', { uid: 'uid' });
  });

  // skipped: tests are disabled for the time being
  test.skip('forwardRequest: only required params', async () => {
    const responsePromise = client.api.v1.proxy.forwardRequest('path', { uid: 'uid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('forwardRequest: required and optional params', async () => {
    const response = await client.api.v1.proxy.forwardRequest('path', { uid: 'uid' });
  });

  // skipped: tests are disabled for the time being
  test.skip('patchProxy: only required params', async () => {
    const responsePromise = client.api.v1.proxy.patchProxy('path', { uid: 'uid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('patchProxy: required and optional params', async () => {
    const response = await client.api.v1.proxy.patchProxy('path', { uid: 'uid' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProxy: only required params', async () => {
    const responsePromise = client.api.v1.proxy.retrieveProxy('path', { uid: 'uid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveProxy: required and optional params', async () => {
    const response = await client.api.v1.proxy.retrieveProxy('path', { uid: 'uid' });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateProxy: only required params', async () => {
    const responsePromise = client.api.v1.proxy.updateProxy('path', { uid: 'uid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateProxy: required and optional params', async () => {
    const response = await client.api.v1.proxy.updateProxy('path', { uid: 'uid' });
  });
});
