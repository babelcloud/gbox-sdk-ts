// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk-example';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiKey', () => {
  // skipped: tests are disabled for the time being
  test.skip('createAnAPIKey: only required params', async () => {
    const responsePromise = client.api.v1.apiKey.createAnAPIKey({
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
  test.skip('createAnAPIKey: required and optional params', async () => {
    const response = await client.api.v1.apiKey.createAnAPIKey({
      name: 'name',
      organizationId: 'organizationId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteAnAPIKey: only required params', async () => {
    const responsePromise = client.api.v1.apiKey.deleteAnAPIKey({
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
  test.skip('deleteAnAPIKey: required and optional params', async () => {
    const response = await client.api.v1.apiKey.deleteAnAPIKey({
      apiKeyId: 'apiKeyId',
      organizationId: 'organizationId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getAllAPIKey: only required params', async () => {
    const responsePromise = client.api.v1.apiKey.getAllAPIKey({ organizationId: 'organizationId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAllAPIKey: required and optional params', async () => {
    const response = await client.api.v1.apiKey.getAllAPIKey({ organizationId: 'organizationId' });
  });
});
