import { GboxClient } from '../../../client';
import { AndroidBox } from '../../../resources/v1/boxes';
import { BaseBox } from '../base';
import { AndroidAppManager } from './app-manager';
import { AndroidPkgManager } from './pkg-manager';

export class AndroidBoxOperator extends BaseBox<AndroidBox> {
  public app: AndroidAppManager;
  public pkg: AndroidPkgManager;

  constructor(data: AndroidBox, client: GboxClient) {
    super(data, client);
    this.app = new AndroidAppManager(client, data);
    this.pkg = new AndroidPkgManager(client, data);
  }
}

// Export all types and classes
export * from './types';
export * from './app-manager';
export * from './pkg-manager';
export * from './app-operator';
export * from './pkg-operator';
