// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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

  /**
   * Get device info
   *
   * @example
   * ```ts
   * const deviceInfo = await client.v1.devices.get(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  get(deviceID: string, options?: RequestOptions): APIPromise<DeviceInfo> {
    return this._client.get(path`/devices/${deviceID}`, options);
  }

  /**
   * Create a new box using a physical device
   *
   * @example
   * ```ts
   * const response = await client.v1.devices.toBox(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  toBox(deviceID: string, body: DeviceToBoxParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/devices/${deviceID}/box`, { body, ...options });
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
   * Product model from ro.product.model
   */
  productModel: string;

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

export type DeviceToBoxResponse = string;

export interface DeviceToBoxParams {
  /**
   * If true, the device will be forcibly created as a new Box, which will forcibly
   * terminate any existing box that is currently using this device. If false, an
   * error will be thrown with HTTP 423 status code when the device is already
   * occupied by a box.
   */
  force?: boolean;
}

export declare namespace Devices {
  export {
    type DeviceInfo as DeviceInfo,
    type GetDeviceListResponse as GetDeviceListResponse,
    type DeviceToBoxResponse as DeviceToBoxResponse,
    type DeviceToBoxParams as DeviceToBoxParams,
  };
}
