// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxSDK from 'gbox-sdk';

const client = new GboxSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource github', () => {
  // skipped: tests are disabled for the time being
  test.skip('createTest: only required params', async () => {
    const responsePromise = client.api.v1.auth.github.createTest({ code: '123456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createTest: required and optional params', async () => {
    const response = await client.api.v1.auth.github.createTest({ code: '123456' });
  });
});
