// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient, toFile } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource android', () => {
  // skipped: tests are disabled for the time being
  test.skip('backup: required and optional params', async () => {
    const response = await client.v1.boxes.android.backup('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('close: only required params', async () => {
    const responsePromise = client.v1.boxes.android.close('com.example.myapp', {
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
  test.skip('close: required and optional params', async () => {
    const response = await client.v1.boxes.android.close('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('closeAll', async () => {
    const responsePromise = client.v1.boxes.android.closeAll('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
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
  test.skip('get: required and optional params', async () => {
    const response = await client.v1.boxes.android.get('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getApp: only required params', async () => {
    const responsePromise = client.v1.boxes.android.getApp('com.example.myapp', {
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
  test.skip('getApp: required and optional params', async () => {
    const response = await client.v1.boxes.android.getApp('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getConnectAddress', async () => {
    const responsePromise = client.v1.boxes.android.getConnectAddress('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
      installMultiple: false,
      open: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listActivities: only required params', async () => {
    const responsePromise = client.v1.boxes.android.listActivities('com.example.myapp', {
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
  test.skip('listActivities: required and optional params', async () => {
    const response = await client.v1.boxes.android.listActivities('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listApp', async () => {
    const responsePromise = client.v1.boxes.android.listApp('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPkg', async () => {
    const responsePromise = client.v1.boxes.android.listPkg('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPkg: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.android.listPkg(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { pkgType: ['thirdParty'], runningFilter: ['running', 'notRunning'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPkgSimple', async () => {
    const responsePromise = client.v1.boxes.android.listPkgSimple('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPkgSimple: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.boxes.android.listPkgSimple(
        'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
        { pkgType: ['thirdParty'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GboxClient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('open: only required params', async () => {
    const responsePromise = client.v1.boxes.android.open('com.example.myapp', {
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
  test.skip('open: required and optional params', async () => {
    const response = await client.v1.boxes.android.open('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      activityName: 'com.android.settings.Settings',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('restart: only required params', async () => {
    const responsePromise = client.v1.boxes.android.restart('com.example.myapp', {
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
  test.skip('restart: required and optional params', async () => {
    const response = await client.v1.boxes.android.restart('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      activityName: 'com.android.settings.Settings',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('restore: only required params', async () => {
    const responsePromise = client.v1.boxes.android.restore('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      backup: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('restore: required and optional params', async () => {
    const response = await client.v1.boxes.android.restore('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      backup: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('uninstall: only required params', async () => {
    const responsePromise = client.v1.boxes.android.uninstall('com.example.myapp', {
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
  test.skip('uninstall: required and optional params', async () => {
    const response = await client.v1.boxes.android.uninstall('com.example.myapp', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      keepData: true,
    });
  });
});
