// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource storage', () => {
  // Prism tests are disabled
  test.skip('presignedURL: only required params', async () => {
    const responsePromise = client.v1.boxes.storage.presignedURL('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      storageKey: 'storage://xxxxxx/xxxxxx/xxxxxxx',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('presignedURL: required and optional params', async () => {
    const response = await client.v1.boxes.storage.presignedURL('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      storageKey: 'storage://xxxxxx/xxxxxx/xxxxxxx',
      expiresIn: '30m',
    });
  });
});
