// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class APIKey extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.createAnAPIKey({
   *   name: 'name',
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  createAnAPIKey(body: APIKeyCreateAnAPIKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/create_an_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.deleteAnAPIKey({
   *   apiKeyId: 'apiKeyId',
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  deleteAnAPIKey(body: APIKeyDeleteAnAPIKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/delete_an_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.getAllAPIKey({
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  getAllAPIKey(body: APIKeyGetAllAPIKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/get_all_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKeyCreateAnAPIKeyParams {
  /**
   * api key name
   */
  name: string;

  /**
   * organization id
   */
  organizationId: string;
}

export interface APIKeyDeleteAnAPIKeyParams {
  /**
   * api key id
   */
  apiKeyId: string;

  /**
   * organization id
   */
  organizationId: string;
}

export interface APIKeyGetAllAPIKeyParams {
  /**
   * organization id
   */
  organizationId: string;
}

export declare namespace APIKey {
  export {
    type APIKeyCreateAnAPIKeyParams as APIKeyCreateAnAPIKeyParams,
    type APIKeyDeleteAnAPIKeyParams as APIKeyDeleteAnAPIKeyParams,
    type APIKeyGetAllAPIKeyParams as APIKeyGetAllAPIKeyParams,
  };
}
