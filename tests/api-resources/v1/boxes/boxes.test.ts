// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient } from 'gbox-sdk-example';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource boxes', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.boxes.create({ type: 'linux' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.boxes.create({
      type: 'linux',
      config: { envs: {}, expiresIn: 'expiresIn', labels: {} },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.boxes.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.boxes.list({ page: 0, pageSize: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.v1.boxes.list({ page: 0, pageSize: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('createAndroid: only required params', async () => {
    const responsePromise = client.v1.boxes.createAndroid({ type: 'linux' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createAndroid: required and optional params', async () => {
    const response = await client.v1.boxes.createAndroid({
      type: 'linux',
      config: { envs: {}, expiresIn: 'expiresIn', labels: {} },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createLinux: only required params', async () => {
    const responsePromise = client.v1.boxes.createLinux({ type: 'linux' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createLinux: required and optional params', async () => {
    const response = await client.v1.boxes.createLinux({
      type: 'linux',
      config: { envs: {}, expiresIn: 'expiresIn', labels: {} },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('executeCommands: only required params', async () => {
    const responsePromise = client.v1.boxes.executeCommands('id', { commands: ['ls', '-l'] });
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
    const response = await client.v1.boxes.executeCommands('id', {
      commands: ['ls', '-l'],
      envs: {},
      timeout: '30s',
      workingDir: 'workingDir',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('runCode: only required params', async () => {
    const responsePromise = client.v1.boxes.runCode('id', { code: 'print("Hello, World!")', type: 'bash' });
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
    const response = await client.v1.boxes.runCode('id', {
      code: 'print("Hello, World!")',
      type: 'bash',
      argv: ['string'],
      envs: {},
      timeout: 'timeout',
      workingDir: 'workingDir',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('start', async () => {
    const responsePromise = client.v1.boxes.start('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stop', async () => {
    const responsePromise = client.v1.boxes.stop('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
