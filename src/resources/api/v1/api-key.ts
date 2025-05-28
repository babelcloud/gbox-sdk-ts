// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class APIKey extends APIResource {
  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.create({
   *   name: 'name',
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/create_an_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.delete({
   *   apiKeyId: 'apiKeyId',
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  delete(body: APIKeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/delete_an_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.v1.apiKey.getAll({
   *   organizationId: 'organizationId',
   * });
   * ```
   */
  getAll(body: APIKeyGetAllParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/api_key/get_all_api_key', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKeyCreateParams {
  /**
   * api key name
   */
  name: string;

  /**
   * organization id
   */
  organizationId: string;
}

export interface APIKeyDeleteParams {
  /**
   * api key id
   */
  apiKeyId: string;

  /**
   * organization id
   */
  organizationId: string;
}

export interface APIKeyGetAllParams {
  /**
   * organization id
   */
  organizationId: string;
}

export declare namespace APIKey {
  export {
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
    type APIKeyGetAllParams as APIKeyGetAllParams,
  };
}
