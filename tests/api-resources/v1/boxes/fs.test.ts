// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fs', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.list('boxId', { path: '/home/user/documents' });
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
    const response = await client.v1.boxes.fs.list('boxId', {
      path: '/home/user/documents',
      depth: 2,
      workingDir: '/home/user/documents',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('exists: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.exists('boxId', { path: '/home/user/documents/output.txt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('exists: required and optional params', async () => {
    const response = await client.v1.boxes.fs.exists('boxId', {
      path: '/home/user/documents/output.txt',
      workingDir: '/home/user/documents',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('info: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.info('boxId', { path: '/home/user/documents/output.txt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('info: required and optional params', async () => {
    const response = await client.v1.boxes.fs.info('boxId', {
      path: '/home/user/documents/output.txt',
      workingDir: '/home/user/documents',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('read: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.read('boxId', { path: '/home/user/documents/config.json' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('read: required and optional params', async () => {
    const response = await client.v1.boxes.fs.read('boxId', {
      path: '/home/user/documents/config.json',
      workingDir: '/home/user/documents',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.remove('boxId', { path: '/home/user/documents/output.txt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: required and optional params', async () => {
    const response = await client.v1.boxes.fs.remove('boxId', {
      path: '/home/user/documents/output.txt',
      workingDir: '/home/user/documents',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('rename: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.rename('boxId', {
      newPath: '/home/user/documents/new-name.txt',
      oldPath: '/home/user/documents/output.txt',
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
  test.skip('rename: required and optional params', async () => {
    const response = await client.v1.boxes.fs.rename('boxId', {
      newPath: '/home/user/documents/new-name.txt',
      oldPath: '/home/user/documents/output.txt',
      workingDir: '/home/user/documents',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('write: only required params', async () => {
    const responsePromise = client.v1.boxes.fs.write('boxId', {
      content: 'Hello, World!\nThis is file content.',
      path: '/home/user/documents/output.txt',
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
  test.skip('write: required and optional params', async () => {
    const response = await client.v1.boxes.fs.write('boxId', {
      content: 'Hello, World!\nThis is file content.',
      path: '/home/user/documents/output.txt',
      workingDir: '/home/user/documents',
    });
  });
});
