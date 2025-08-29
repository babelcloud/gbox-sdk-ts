// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Devices extends APIResource {
  /**
   * Get device list
   *
   * @example
   * ```ts
   * const getDeviceListResponse =
   *   await client.v1.devices.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<GetDeviceListResponse> {
    return this._client.get('/devices', options);
  }
}

export interface DeviceInfo {
  /**
   * Device ID
   */
  deviceId: string;

  /**
   * Device enable status
   */
  enable: string;

  /**
   * Whether device is idle
   */
  isIdle: boolean;

  /**
   * Provider ID
   */
  providerId: string;

  /**
   * Provider type
   */
  providerType: string;

  /**
   * Device status
   */
  status: string;
}

export interface GetDeviceListResponse {
  /**
   * List of devices
   */
  data: Array<DeviceInfo>;

  /**
   * Response message
   */
  message: string;

  /**
   * Total number of devices
   */
  total: number;
}

export declare namespace Devices {
  export { type DeviceInfo as DeviceInfo, type GetDeviceListResponse as GetDeviceListResponse };
}
