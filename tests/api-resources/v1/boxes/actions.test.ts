// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { GboxClient } from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // skipped: tests are disabled for the time being
  test.skip('click: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.click('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 100,
      y: 100,
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
  test.skip('click: required and optional params', async () => {
    const response = await client.v1.boxes.actions.click('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 100,
      y: 100,
      button: 'left',
      double: false,
      outputFormat: 'base64',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('drag: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.drag('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      path: [
        { x: 100, y: 100 },
        { x: 200, y: 200 },
      ],
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
  test.skip('drag: required and optional params', async () => {
    const response = await client.v1.boxes.actions.drag('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      path: [
        { x: 100, y: 100 },
        { x: 200, y: 200 },
      ],
      duration: '50ms',
      outputFormat: 'base64',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('move: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.move('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 200,
      y: 300,
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
  test.skip('move: required and optional params', async () => {
    const response = await client.v1.boxes.actions.move('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 200,
      y: 300,
      outputFormat: 'base64',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('press: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.press('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      keys: ['Enter'],
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
  test.skip('press: required and optional params', async () => {
    const response = await client.v1.boxes.actions.press('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      keys: ['Enter'],
      outputFormat: 'base64',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('screenshot', async () => {
    const responsePromise = client.v1.boxes.actions.screenshot('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('scroll: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.scroll('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      scrollX: 0,
      scrollY: 100,
      x: 100,
      y: 100,
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
    const response = await client.v1.boxes.actions.scroll('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      scrollX: 0,
      scrollY: 100,
      x: 100,
      y: 100,
      outputFormat: 'base64',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('touch: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.touch('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      points: [{ start: { x: 100, y: 150 } }],
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
    const response = await client.v1.boxes.actions.touch('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      points: [
        {
          start: { x: 100, y: 150 },
          actions: [{ x: 400, y: 300, duration: '200ms' }, { duration: '500ms' }],
        },
      ],
      outputFormat: 'base64',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('type: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.type('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      text: 'Hello World',
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
  test.skip('type: required and optional params', async () => {
    const response = await client.v1.boxes.actions.type('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      text: 'Hello World',
      delay: '100ms',
      outputFormat: 'base64',
    });
  });
});
