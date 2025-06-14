// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { GboxClient } from '../client';

export abstract class APIResource {
  protected _client: GboxClient;

  constructor(client: GboxClient) {
    this._client = client;
  }
}
