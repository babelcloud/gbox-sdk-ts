// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiKey', () => {
  // skipped: tests are disabled for the time being
  test.skip('createAPIKey: only required params', async () => {
    const responsePromise = client.api.v1.apiKey.createAPIKey({
      name: 'name',
      organizationId: 'organizationId',
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
  test.skip('createAPIKey: required and optional params', async () => {
    const response = await client.api.v1.apiKey.createAPIKey({
      name: 'name',
      organizationId: 'organizationId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteAPIKey: only required params', async () => {
    const responsePromise = client.api.v1.apiKey.deleteAPIKey({
      apiKeyId: 'apiKeyId',
      organizationId: 'organizationId',
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
  test.skip('deleteAPIKey: required and optional params', async () => {
    const response = await client.api.v1.apiKey.deleteAPIKey({
      apiKeyId: 'apiKeyId',
      organizationId: 'organizationId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listAll: only required params', async () => {
    const responsePromise = client.api.v1.apiKey.listAll({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAll: required and optional params', async () => {
    const response = await client.api.v1.apiKey.listAll({ organizationId: 'organizationId' });
  });
});
