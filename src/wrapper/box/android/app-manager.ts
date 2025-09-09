import { GboxClient } from '../../../client';
import {
  AndroidBox,
  AndroidUninstallParams,
  AndroidInstallResponse,
  AndroidListAppResponse,
  AndroidApp,
} from '../../../resources/v1/boxes';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { AndroidInstall, ListAndroidApp } from './types';
import { AndroidAppOperator } from './app-operator';

/**
 * Android App Manager - handles all app-related operations for Android boxes
 */
export class AndroidAppManager {
  private client: GboxClient;
  private box: AndroidBox;

  constructor(client: GboxClient, box: AndroidBox) {
    this.client = client;
    this.box = box;
  }

  /**
   * @example
   * const response = await myBox.app.install({ apk: fs.createReadStream("path/to/your/app.apk") });
   * or
   * const response = await myBox.app.install({ apk: "https://example.com/path/to/app.apk" });
   * or
   * const response = await myBox.app.install({ apk: "path/to/your/app.apk" });
   * or
   * const response = await myBox.app.install({ apk: "file:///path/to/your/app.apk" });
   */
  async install(body: AndroidInstall): Promise<AndroidAppOperator> {
    if (typeof body.apk === 'string') {
      if (body.apk.startsWith('file://')) {
        // Handle file:// protocol
        const filePath = fileURLToPath(body.apk);
        const exists = fs.existsSync(filePath);
        if (!exists) {
          throw new Error(`File ${filePath} does not exist`);
        }
        const apkReadStream = fs.createReadStream(filePath);
        const res = await this.client.v1.boxes.android.install(this.box.id, { apk: apkReadStream });
        return this.installResToOperator(res);
      } else if (body.apk.startsWith('http')) {
        // Handle http/https URLs
        const res = await this.client.v1.boxes.android.install(this.box.id, body);
        return this.installResToOperator(res);
      } else {
        // Handle local file paths
        const exists = fs.existsSync(body.apk);
        if (!exists) {
          throw new Error(`File ${body.apk} does not exist`);
        }
        const apkReadStream = fs.createReadStream(body.apk);
        const res = await this.client.v1.boxes.android.install(this.box.id, { apk: apkReadStream });
        return this.installResToOperator(res);
      }
    }
    // Handle ReadableStream or other types
    const res = await this.client.v1.boxes.android.install(this.box.id, body);
    return this.installResToOperator(res);
  }

  /**
   * @example
   * const response = await myBox.app.uninstall('com.example.myapp');
   */
  async uninstall(packageName: string, params?: Omit<AndroidUninstallParams, 'boxId'>): Promise<void> {
    return this.client.v1.boxes.android.uninstall(packageName, { ...params, boxId: this.box.id });
  }

  /**
   * @example
   * const response = await myBox.app.list();
   */
  async list(): Promise<ListAndroidApp> {
    const res = await this.client.v1.boxes.android.listApp(this.box.id);
    return {
      operators: res.data.map((app) => new AndroidAppOperator(this.client, this.box, app)),
    };
  }

  /**
   * @example
   * const response = await myBox.app.listInfo();
   */
  async listInfo(): Promise<AndroidListAppResponse> {
    return this.client.v1.boxes.android.listApp(this.box.id);
  }

  /**
   * @example
   * const myApp = await myBox.app.get('com.example.myapp');
   */
  async get(packageName: string): Promise<AndroidAppOperator> {
    const appData = await this.client.v1.boxes.android.getApp(packageName, { boxId: this.box.id });
    return new AndroidAppOperator(this.client, this.box, appData);
  }

  /**
   * @example
   * const response = await myBox.app.getInfo('com.example.myapp');
   */
  async getInfo(packageName: string): Promise<AndroidApp> {
    return this.client.v1.boxes.android.getApp(packageName, { boxId: this.box.id });
  }

  /**
   * @example
   * const response = await myBox.app.closeAll();
   */
  async closeAll(): Promise<void> {
    return this.client.v1.boxes.android.closeAll(this.box.id);
  }

  /**
   * @example
   * const response = await myBox.app.backupAll();
   */
  async backupAll(): Promise<Response> {
    return this.client.v1.boxes.android.backupAll(this.box.id);
  }

  private installResToOperator(res: AndroidInstallResponse): AndroidAppOperator {
    // just use the first launcher activity
    const activity = res.activities.find((activity) => activity.isLauncher);

    if (!activity) {
      throw new Error('No launcher activity found');
    }

    const app = {
      packageName: res.packageName,
      activityName: activity.name,
      activityClassName: activity.className,
    };

    return new AndroidAppOperator(this.client, this.box, app);
  }
}
