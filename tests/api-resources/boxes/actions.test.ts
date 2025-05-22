// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxSDK from 'gbox-sdk';

const client = new GboxSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // skipped: tests are disabled for the time being
  test.skip('click: only required params', async () => {
    const responsePromise = client.boxes.actions.click('id', { type: 'click', x: 100, y: 200 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('click: required and optional params', async () => {
    const response = await client.boxes.actions.click('id', {
      type: 'click',
      x: 100,
      y: 200,
      button: 'left',
      double: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('drag: only required params', async () => {
    const responsePromise = client.boxes.actions.drag('id', { path: [{ x: 0, y: 0 }], type: 'drag' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('drag: required and optional params', async () => {
    const response = await client.boxes.actions.drag('id', {
      path: [{ x: 0, y: 0 }],
      type: 'drag',
      duration: 'duration',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('keypress: only required params', async () => {
    const responsePromise = client.boxes.actions.keypress('id', { keys: ['string'], type: 'keypress' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('keypress: required and optional params', async () => {
    const response = await client.boxes.actions.keypress('id', { keys: ['string'], type: 'keypress' });
  });

  // skipped: tests are disabled for the time being
  test.skip('move: only required params', async () => {
    const responsePromise = client.boxes.actions.move('id', { type: 'move', x: 100, y: 200 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('move: required and optional params', async () => {
    const response = await client.boxes.actions.move('id', { type: 'move', x: 100, y: 200 });
  });

  // skipped: tests are disabled for the time being
  test.skip('scroll: only required params', async () => {
    const responsePromise = client.boxes.actions.scroll('id', {
      scrollX: 0,
      scrollY: 0,
      type: 'scroll',
      x: 0,
      y: 0,
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
  test.skip('scroll: required and optional params', async () => {
    const response = await client.boxes.actions.scroll('id', {
      scrollX: 0,
      scrollY: 0,
      type: 'scroll',
      x: 0,
      y: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('touch: only required params', async () => {
    const responsePromise = client.boxes.actions.touch('id', {
      points: [{ start: { x: 0, y: 0 } }],
      type: 'touch',
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
  test.skip('touch: required and optional params', async () => {
    const response = await client.boxes.actions.touch('id', {
      points: [{ start: { x: 0, y: 0 }, actions: [{ duration: 'duration', type: 'move', x: 0, y: 0 }] }],
      type: 'touch',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('type: only required params', async () => {
    const responsePromise = client.boxes.actions.type('id', { text: 'Hello World', type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('type: required and optional params', async () => {
    const response = await client.boxes.actions.type('id', { text: 'Hello World', type: 'type' });
  });
});
