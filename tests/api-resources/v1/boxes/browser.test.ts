// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource browser', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('clearProxy', async () => {
    const responsePromise = client.v1.boxes.browser.clearProxy('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('close', async () => {
    const responsePromise = client.v1.boxes.browser.close('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('closeTab: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.closeTab('tabId', {
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

  // Prism tests are disabled
  test.skip('closeTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.closeTab('tabId', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // Prism tests are disabled
  test.skip('getProxy', async () => {
    const responsePromise = client.v1.boxes.browser.getProxy('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('open', async () => {
    const responsePromise = client.v1.boxes.browser.open('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('openTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.openTab('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      url: 'https://www.google.com',
    });
  });

  // Prism tests are disabled
  test.skip('setProxy: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.setProxy('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      httpServer: 'http://127.0.0.1:8080',
      httpsServer: 'https://127.0.0.1:8080',
      socks5Server: 'socks5://127.0.0.1:8080',
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
  test.skip('setProxy: required and optional params', async () => {
    const response = await client.v1.boxes.browser.setProxy('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      httpServer: 'http://127.0.0.1:8080',
      httpsServer: 'https://127.0.0.1:8080',
      socks5Server: 'socks5://127.0.0.1:8080',
      bypassList: [
        '127.0.0.1',
        'localhost',
        'example.com',
        '*.example.com',
        '*.example.org',
        'https://x.*.y.com:99',
        '192.168.1.1/16',
        'fefe:13::abc/33',
      ],
      pacUrl: 'http://proxy.company.com/proxy.pac',
    });
  });

  // Prism tests are disabled
  test.skip('switchTab: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.switchTab('tabId', {
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

  // Prism tests are disabled
  test.skip('switchTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.switchTab('tabId', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // Prism tests are disabled
  test.skip('updateTab: only required params', async () => {
    const responsePromise = client.v1.boxes.browser.updateTab('tabId', {
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

  // Prism tests are disabled
  test.skip('updateTab: required and optional params', async () => {
    const response = await client.v1.boxes.browser.updateTab('tabId', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      url: 'https://www.google.com',
    });
  });
});
