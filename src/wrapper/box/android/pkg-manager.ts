import { GboxClient } from '../../../client';
import {
  AndroidBox,
  AndroidUninstallParams,
  AndroidInstallResponse,
  AndroidListPkgResponse,
  AndroidListPkgSimpleResponse,
  AndroidGetResponse,
} from '../../../resources/v1/boxes';
import fs from 'fs';
import { AndroidInstall, ListAndroidPkg } from './types';
import { AndroidPkgOperator } from './pkg-operator';

/**
 * Android Package Manager - handles all package-related operations for Android boxes
 */
export class AndroidPkgManager {
  private client: GboxClient;
  private box: AndroidBox;

  constructor(client: GboxClient, box: AndroidBox) {
    this.client = client;
    this.box = box;
  }

  /**
   * @example
   * const response = await myBox.pkg.install({ apk: fs.createReadStream("path/to/your/app.apk") });
   * or
   * const response = await myBox.pkg.install({ apk: "https://example.com/path/to/app.apk" });
   * or
   * const response = await myBox.pkg.install({ apk: "path/to/your/app.apk" });
   */
  async install(body: AndroidInstall): Promise<AndroidInstallResponse> {
    if (typeof body.apk === 'string' && !body.apk.startsWith('http')) {
      const exists = fs.existsSync(body.apk);
      if (!exists) {
        throw new Error(`File ${body.apk} does not exist`);
      }
      const apkReadStream = fs.createReadStream(body.apk);
      return this.client.v1.boxes.android.install(this.box.id, { apk: apkReadStream });
    } else if (typeof body.apk === 'string' && body.apk.startsWith('http')) {
      return this.client.v1.boxes.android.install(this.box.id, body);
    }
    return this.client.v1.boxes.android.install(this.box.id, body);
  }

  /**
   * @example
   * const response = await myBox.pkg.uninstall('com.example.myapp');
   */
  async uninstall(packageName: string, params: Omit<AndroidUninstallParams, 'boxId'>): Promise<void> {
    return this.client.v1.boxes.android.uninstall(packageName, { ...params, boxId: this.box.id });
  }

  /**
   * @example
   * const response = await myBox.pkg.list();
   */
  async list(): Promise<ListAndroidPkg> {
    const res = await this.client.v1.boxes.android.listPkg(this.box.id);
    return {
      operators: res.data.map((pkg) => new AndroidPkgOperator(pkg, this.client, this.box)),
    };
  }

  /**
   * @example
   * const response = await myBox.pkg.listInfo();
   */
  async listInfo(): Promise<AndroidListPkgResponse> {
    return this.client.v1.boxes.android.listPkg(this.box.id);
  }

  /**
   * @example
   * const response = await myBox.pkg.listSimpleInfo();
   */
  async listSimpleInfo(): Promise<AndroidListPkgSimpleResponse> {
    return this.client.v1.boxes.android.listPkgSimple(this.box.id);
  }

  /**
   * @example
   * const myPkg = await myBox.pkg.get('com.example.myapp');
   */
  async get(packageName: string): Promise<AndroidPkgOperator> {
    const pkgData = await this.client.v1.boxes.android.get(packageName, { boxId: this.box.id });
    return new AndroidPkgOperator(pkgData, this.client, this.box);
  }

  /**
   * @example
   * const response = await myBox.pkg.getInfo('com.example.myapp');
   */
  async getInfo(packageName: string): Promise<AndroidGetResponse> {
    return this.client.v1.boxes.android.get(packageName, { boxId: this.box.id });
  }
}
