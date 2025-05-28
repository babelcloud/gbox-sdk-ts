// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk-example';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gbox', () => {
  // skipped: tests are disabled for the time being
  test.skip('stop: only required params', async () => {
    const responsePromise = client.api.v1.gbox.stop({ uid: 'uid-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stop: required and optional params', async () => {
    const response = await client.api.v1.gbox.stop({ uid: 'uid-1' });
  });
});
