import { GboxClient } from '../../../client';
import {
  AndroidBox,
  AndroidUninstallParams,
  AndroidInstallResponse,
  AndroidListPkgResponse,
  AndroidListPkgSimpleResponse,
  AndroidGetResponse,
  AndroidListPkgParams,
  AndroidListPkgSimpleParams,
} from '../../../resources/v1/boxes';
import fs from 'fs';
import { fileURLToPath } from 'url';
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
   * or
   * const response = await myBox.pkg.install({ apk: "file:///path/to/your/app.apk" });
   */
  async install(body: AndroidInstall): Promise<AndroidInstallResponse> {
    if (typeof body.apk === 'string') {
      if (body.apk.startsWith('file://')) {
        // Handle file:// protocol
        const filePath = fileURLToPath(body.apk);
        const exists = fs.existsSync(filePath);
        if (!exists) {
          throw new Error(`File ${filePath} does not exist`);
        }
        const apkReadStream = fs.createReadStream(filePath);
        return this.client.v1.boxes.android.install(this.box.id, { apk: apkReadStream });
      } else if (body.apk.startsWith('http')) {
        // Handle http/https URLs
        return this.client.v1.boxes.android.install(this.box.id, body);
      } else {
        // Handle local file paths
        const exists = fs.existsSync(body.apk);
        if (!exists) {
          throw new Error(`File ${body.apk} does not exist`);
        }
        const apkReadStream = fs.createReadStream(body.apk);
        return this.client.v1.boxes.android.install(this.box.id, { apk: apkReadStream });
      }
    }
    // Handle ReadableStream or other types
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
  async list(params?: AndroidListPkgParams): Promise<ListAndroidPkg> {
    const res = await this.client.v1.boxes.android.listPkg(this.box.id, params);
    return {
      operators: res.data.map((pkg) => new AndroidPkgOperator(this.client, this.box, pkg)),
    };
  }

  /**
   * @example
   * const response = await myBox.pkg.listInfo();
   */
  async listInfo(params?: AndroidListPkgParams): Promise<AndroidListPkgResponse> {
    return this.client.v1.boxes.android.listPkg(this.box.id, params);
  }

  /**
   * @example
   * const response = await myBox.pkg.listSimpleInfo();
   */
  async listSimpleInfo(params?: AndroidListPkgSimpleParams): Promise<AndroidListPkgSimpleResponse> {
    return this.client.v1.boxes.android.listPkgSimple(this.box.id, params);
  }

  /**
   * @example
   * const myPkg = await myBox.pkg.get('com.example.myapp');
   */
  async get(packageName: string): Promise<AndroidPkgOperator> {
    const pkgData = await this.client.v1.boxes.android.get(packageName, { boxId: this.box.id });
    return new AndroidPkgOperator(this.client, this.box, pkgData);
  }

  /**
   * @example
   * const response = await myBox.pkg.getInfo('com.example.myapp');
   */
  async getInfo(packageName: string): Promise<AndroidGetResponse> {
    return this.client.v1.boxes.android.get(packageName, { boxId: this.box.id });
  }

  /**
   * @example
   * const response = await myBox.pkg.closeAll();
   */
  async closeAll(): Promise<void> {
    return this.client.v1.boxes.android.closeAll(this.box.id);
  }

  /**
   * @example
   * const response = await myBox.pkg.backupAll();
   */
  async backupAll(): Promise<Response> {
    return this.client.v1.boxes.android.backupAll(this.box.id);
  }
}
