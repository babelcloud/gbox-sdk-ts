import { GboxClient } from '../../../client';
import {
  AndroidAppiumURLParams,
  AndroidAppiumURLResponse,
  AndroidBox,
  AndroidGetConnectAddressResponse,
} from '../../../resources/v1/boxes';
import { BaseBox } from '../base';
import { AndroidAppManager } from './app-manager';
import { AndroidPkgManager } from './pkg-manager';

export class AndroidBoxOperator extends BaseBox<AndroidBox> {
  public app: AndroidAppManager;
  public pkg: AndroidPkgManager;

  constructor(client: GboxClient, data: AndroidBox) {
    super(client, data);
    this.app = new AndroidAppManager(client, data);
    this.pkg = new AndroidPkgManager(client, data);
  }

  /**
   * @example
   * const response = await myBox.getConnectAddress();
   */
  async getConnectAddress(): Promise<AndroidGetConnectAddressResponse> {
    return this.client.v1.boxes.android.getConnectAddress(this.data.id);
  }

  /**
   * Generate a pre-signed proxy URL for Appium server of a running Android box.
   *
   * @example
   * const response = await myBox.appiumURL({ expiresIn: '30m' });
   */
  async appiumURL(params: AndroidAppiumURLParams = {}): Promise<AndroidAppiumURLResponse> {
    return this.client.v1.boxes.android.appiumURL(this.data.id, params);
  }
}

// Export all types and classes
export * from './app-manager';
export * from './app-operator';
export * from './pkg-manager';
export * from './pkg-operator';
export * from './types';
