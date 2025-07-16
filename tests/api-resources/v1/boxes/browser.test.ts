// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource browser', () => {
  // skipped: tests are disabled for the time being
  test.skip('cdpURL', async () => {
    const responsePromise = client.v1.boxes.browser.cdpURL('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cdpURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.browser.cdpURL(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { expiresIn: '120m' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('closeTab: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.closeTab('tabIndex', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
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
  test.skip('closeTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.closeTab('tabIndex', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getTabs', async () => {
    const responsePromise = client.v1.boxes.browser.getTabs('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('openTab: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.openTab('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      url: 'https://www.google.com',
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
  test.skip('openTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.openTab('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      url: 'https://www.google.com',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateTab: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.updateTab('tabIndex', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      url: 'https://www.google.com',
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
  test.skip('updateTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.updateTab('tabIndex', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      url: 'https://www.google.com',
    });
  });
});
