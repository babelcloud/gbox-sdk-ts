// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource boxes', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.boxes.retrieve('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v1.boxes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.list(
        { deviceType: 'virtual', labels: {}, page: 1, pageSize: 10, status: ['running'], type: ['linux'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createAndroid', async () => {
    const responsePromise = client.v1.boxes.createAndroid({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createLinux', async () => {
    const responsePromise = client.v1.boxes.createLinux({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('display', async () => {
    const responsePromise = client.v1.boxes.display('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('executeCommands: only required params', async () => {
    const responsePromise = client.v1.boxes.executeCommands('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      commands: ['ls', '-l'],
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
  test.skip('executeCommands: required and optional params', async () => {
    const response = await client.v1.boxes.executeCommands('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      commands: ['ls', '-l'],
      envs: { PATH: '/usr/bin:/bin', NODE_ENV: 'production' },
      timeout: '30s',
      workingDir: '/home/user/projects',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('liveViewURL', async () => {
    const responsePromise = client.v1.boxes.liveViewURL('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('liveViewURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.liveViewURL(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { expiresIn: '180m' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('runCode: only required params', async () => {
    const responsePromise = client.v1.boxes.runCode('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      code: 'print("Hello, World!")',
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
  test.skip('runCode: required and optional params', async () => {
    const response = await client.v1.boxes.runCode('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      code: 'print("Hello, World!")',
      argv: ['--help'],
      envs: { PYTHONPATH: '/usr/lib/python', DEBUG: 'true' },
      language: 'python',
      timeout: '30s',
      workingDir: '/home/user/scripts',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('start', async () => {
    const responsePromise = client.v1.boxes.start('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('start: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.start(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { wait: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('stop', async () => {
    const responsePromise = client.v1.boxes.stop('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.stop(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { wait: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('terminate', async () => {
    const responsePromise = client.v1.boxes.terminate('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('terminate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.terminate(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { wait: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('webTerminalURL', async () => {
    const responsePromise = client.v1.boxes.webTerminalURL('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('webTerminalURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.webTerminalURL(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { expiresIn: '180m' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });
});
