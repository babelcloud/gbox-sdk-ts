// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient, { toFile } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  // skipped: tests are disabled for the time being
  test.skip('createAlbum: only required params', async () => {
    const responsePromise = client.v1.boxes.media.createAlbum('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      media: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      name: 'Vacation Photos',
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
  test.skip('createAlbum: required and optional params', async () => {
    const response = await client.v1.boxes.media.createAlbum('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      media: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      name: 'Vacation Photos',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteAlbum: only required params', async () => {
    const responsePromise = client.v1.boxes.media.deleteAlbum('albumName', {
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
  test.skip('deleteAlbum: required and optional params', async () => {
    const response = await client.v1.boxes.media.deleteAlbum('albumName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteMedia: only required params', async () => {
    const responsePromise = client.v1.boxes.media.deleteMedia('mediaName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'albumName',
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
  test.skip('deleteMedia: required and optional params', async () => {
    const response = await client.v1.boxes.media.deleteMedia('mediaName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'albumName',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('downloadMedia: only required params', async () => {
    const responsePromise = client.v1.boxes.media.downloadMedia('mediaName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'albumName',
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
  test.skip('downloadMedia: required and optional params', async () => {
    const response = await client.v1.boxes.media.downloadMedia('mediaName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'albumName',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getAlbumDetail: only required params', async () => {
    const responsePromise = client.v1.boxes.media.getAlbumDetail('albumName', {
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
  test.skip('getAlbumDetail: required and optional params', async () => {
    const response = await client.v1.boxes.media.getAlbumDetail('albumName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listAlbums', async () => {
    const responsePromise = client.v1.boxes.media.listAlbums('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateAlbum: only required params', async () => {
    const responsePromise = client.v1.boxes.media.updateAlbum('albumName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      media: [await toFile(Buffer.from('# my file contents'), 'README.md')],
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
  test.skip('updateAlbum: required and optional params', async () => {
    const response = await client.v1.boxes.media.updateAlbum('albumName', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      media: [await toFile(Buffer.from('# my file contents'), 'README.md')],
    });
  });
});
