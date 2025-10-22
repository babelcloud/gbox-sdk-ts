// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GboxClient from 'gbox-sdk';

const client = new GboxClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  // Prism tests are disabled
  test.skip('call: only required params', async () => {
    const responsePromise = client.v1.models.call({
      action: { target: 'the VSCode app icon on the bottom dock', type: 'click' },
      screenshot:
        'https://gru-activate2-public-assets.s3.us-west-2.amazonaws.com/jessica/screenshot-1759332945616-pu0ovj.png',
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
  test.skip('call: required and optional params', async () => {
    const response = await client.v1.models.call({
      action: { target: 'the VSCode app icon on the bottom dock', type: 'click' },
      screenshot:
        'https://gru-activate2-public-assets.s3.us-west-2.amazonaws.com/jessica/screenshot-1759332945616-pu0ovj.png',
      model: 'gbox-handy-1',
    });
  });
});
