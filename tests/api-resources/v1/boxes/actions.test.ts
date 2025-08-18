// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('ai: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.ai('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      instruction: 'click the login button',
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
  test.skip('ai: required and optional params', async () => {
    const response = await client.v1.boxes.actions.ai('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      instruction: 'click the login button',
      background: 'The user is on the login page',
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
      settings: {
        disableActions: ['swipe'],
        systemPrompt:
          'You are a helpful assistant specialized in UI automation. When given a screenshot and instruction, analyze the visual elements carefully and execute the most appropriate action. Always prioritize user safety and avoid destructive actions unless explicitly requested.',
      },
      stream: false,
    });
  });

  // Prism tests are disabled
  test.skip('click: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.click('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 350,
      y: 250,
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
  test.skip('click: required and optional params', async () => {
    const response = await client.v1.boxes.actions.click('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 350,
      y: 250,
      button: 'left',
      double: false,
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('drag: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.drag('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      end: { x: 400, y: 300 },
      start: { x: 100, y: 150 },
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
  test.skip('drag: required and optional params', async () => {
    const response = await client.v1.boxes.actions.drag('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      end: { x: 400, y: 300 },
      start: { x: 100, y: 150 },
      duration: '500ms',
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('extract: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.extract('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      instruction: 'Extract the email address from the UI interface',
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
  test.skip('extract: required and optional params', async () => {
    const response = await client.v1.boxes.actions.extract('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      instruction: 'Extract the email address from the UI interface',
      schema: {},
    });
  });

  // Prism tests are disabled
  test.skip('longPress: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.longPress('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 350,
      y: 250,
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
  test.skip('longPress: required and optional params', async () => {
    const response = await client.v1.boxes.actions.longPress('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 350,
      y: 250,
      duration: '1s',
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('move: required and optional params', async () => {
    const response = await client.v1.boxes.actions.move('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 200,
      y: 300,
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('pressButton: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.pressButton('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      buttons: ['power'],
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
  test.skip('pressButton: required and optional params', async () => {
    const response = await client.v1.boxes.actions.pressButton('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      buttons: ['power'],
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('pressKey: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.pressKey('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      keys: ['enter'],
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
  test.skip('pressKey: required and optional params', async () => {
    const response = await client.v1.boxes.actions.pressKey('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      keys: ['enter'],
      combination: true,
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('recordingStart', async () => {
    const responsePromise = client.v1.boxes.actions.recordingStart(
      'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordingStop', async () => {
    const responsePromise = client.v1.boxes.actions.recordingStop('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('screenLayout', async () => {
    const responsePromise = client.v1.boxes.actions.screenLayout('c9bdc193-b54b-4ddb-a035-5ac0c598d32d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('screenRotation: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.screenRotation('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      orientation: 'landscapeLeft',
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
  test.skip('screenRotation: required and optional params', async () => {
    const response = await client.v1.boxes.actions.screenRotation('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      orientation: 'landscapeLeft',
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('scroll: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.scroll('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      scrollX: 0,
      scrollY: -100,
      x: 400,
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

  // Prism tests are disabled
  test.skip('scroll: required and optional params', async () => {
    const response = await client.v1.boxes.actions.scroll('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      scrollX: 0,
      scrollY: -100,
      x: 400,
      y: 300,
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('swipe: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.swipe('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      direction: 'up',
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
  test.skip('swipe: required and optional params', async () => {
    const response = await client.v1.boxes.actions.swipe('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      direction: 'up',
      distance: 300,
      duration: '500ms',
      includeScreenshot: false,
      location: 'Chrome App',
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
  test.skip('tap: only required params', async () => {
    const responsePromise = client.v1.boxes.actions.tap('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 350,
      y: 250,
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
  test.skip('tap: required and optional params', async () => {
    const response = await client.v1.boxes.actions.tap('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      x: 350,
      y: 250,
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('touch: required and optional params', async () => {
    const response = await client.v1.boxes.actions.touch('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      points: [{ start: { x: 100, y: 150 }, actions: [{ duration: '200ms', type: 'move', x: 400, y: 300 }] }],
      includeScreenshot: false,
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      screenshotDelay: '500ms',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('type: required and optional params', async () => {
    const response = await client.v1.boxes.actions.type('c9bdc193-b54b-4ddb-a035-5ac0c598d32d', {
      text: 'Hello World',
      includeScreenshot: false,
      mode: 'append',
      outputFormat: 'base64',
      presignedExpiresIn: '30m',
      pressEnter: false,
      screenshotDelay: '500ms',
    });
  });
});
