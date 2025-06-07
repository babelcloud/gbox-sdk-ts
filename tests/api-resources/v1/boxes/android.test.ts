// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient, toFile } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource android', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v1.boxes.android.list('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = client.v1.boxes.android.get('com.example.myapp', {
      id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.v1.boxes.android.get('com.example.myapp', {
      id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('install: only required params', async () => {
    const responsePromise = client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      apk: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('install: required and optional params', async () => {
    const response = await client.v1.boxes.android.install('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      apk: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('uninstall: only required params', async () => {
    const responsePromise = client.v1.boxes.android.uninstall('com.example.myapp', {
      id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
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
  test.skip('uninstall: required and optional params', async () => {
    const response = await client.v1.boxes.android.uninstall('com.example.myapp', {
      id: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });
});
