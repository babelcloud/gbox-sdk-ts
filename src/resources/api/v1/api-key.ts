// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class APIKey extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.createAPIKey({
   *   name: 'name',
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  createAPIKey(body: APIKeyCreateAPIKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/create_an_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.deleteAPIKey({
   *   apiKeyId: 'apiKeyId',
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  deleteAPIKey(body: APIKeyDeleteAPIKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/delete_an_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.listAll({
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  listAll(body: APIKeyListAllParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/get_all_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKeyCreateAPIKeyParams {
  /**
   * api key name
   */
  name: string;

  /**
   * organization id
   */
  organizationId: string;
}

export interface APIKeyDeleteAPIKeyParams {
  /**
   * api key id
   */
  apiKeyId: string;

  /**
   * organization id
   */
  organizationId: string;
}

export interface APIKeyListAllParams {
  /**
   * organization id
   */
  organizationId: string;
}

export declare namespace APIKey {
  export {
    type APIKeyCreateAPIKeyParams as APIKeyCreateAPIKeyParams,
    type APIKeyDeleteAPIKeyParams as APIKeyDeleteAPIKeyParams,
    type APIKeyListAllParams as APIKeyListAllParams,
  };
}
