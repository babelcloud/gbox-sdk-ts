// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient, { toFile } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource media', () => {
  // Prism tests are disabled
  test.skip('createAlbum: only required params', async () => {
    const responsePromise = client.v1.boxes.media.createAlbum('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
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

  // Prism tests are disabled
  test.skip('createAlbum: required and optional params', async () => {
    const response = await client.v1.boxes.media.createAlbum('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      name: 'Vacation Photos',
      media: [await toFile(Buffer.from('# my file contents'), 'README.md')],
    });
  });

  // Prism tests are disabled
  test.skip('deleteAlbum: only required params', async () => {
    const responsePromise = client.v1.boxes.media.deleteAlbum('Pictures', {
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
  test.skip('deleteAlbum: required and optional params', async () => {
    const response = await client.v1.boxes.media.deleteAlbum('Pictures', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // Prism tests are disabled
  test.skip('deleteMedia: only required params', async () => {
    const responsePromise = client.v1.boxes.media.deleteMedia('IMG_001.jpg', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'Pictures',
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
  test.skip('deleteMedia: required and optional params', async () => {
    const response = await client.v1.boxes.media.deleteMedia('IMG_001.jpg', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'Pictures',
    });
  });

  test('downloadMedia: required and optional params', async () => {
    const response = await client.v1.boxes.media.downloadMedia('IMG_001.jpg', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'Pictures',
    });
  });

  // Prism tests are disabled
  test.skip('getAlbumDetail: only required params', async () => {
    const responsePromise = client.v1.boxes.media.getAlbumDetail('Pictures', {
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
  test.skip('getAlbumDetail: required and optional params', async () => {
    const response = await client.v1.boxes.media.getAlbumDetail('Pictures', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // Prism tests are disabled
  test.skip('getMedia: only required params', async () => {
    const responsePromise = client.v1.boxes.media.getMedia('IMG_001.jpg', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'Pictures',
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
  test.skip('getMedia: required and optional params', async () => {
    const response = await client.v1.boxes.media.getMedia('IMG_001.jpg', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      albumName: 'Pictures',
    });
  });

  // Prism tests are disabled
  test.skip('getMediaSupport', async () => {
    const responsePromise = client.v1.boxes.media.getMediaSupport('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('listMedia: only required params', async () => {
    const responsePromise = client.v1.boxes.media.listMedia('Pictures', {
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
  test.skip('listMedia: required and optional params', async () => {
    const response = await client.v1.boxes.media.listMedia('Pictures', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
    });
  });

  // Prism tests are disabled
  test.skip('updateAlbum: only required params', async () => {
    const responsePromise = client.v1.boxes.media.updateAlbum('Pictures', {
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

  // Prism tests are disabled
  test.skip('updateAlbum: required and optional params', async () => {
    const response = await client.v1.boxes.media.updateAlbum('Pictures', {
      boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      media: [await toFile(Buffer.from('# my file contents'), 'README.md')],
    });
  });
});
