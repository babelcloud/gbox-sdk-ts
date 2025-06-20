import { GboxClient } from '../../client';
import {
  BoxCreateAndroidParams,
  AndroidBox,
  AndroidInstallParams,
  AndroidApp,
  AndroidOpenParams,
  AndroidRestartParams,
  AndroidCloseParams,
  AndroidListParams,
  AndroidUninstallParams,
  AndroidListResponse,
  AndroidRotateScreenParams,
  AndroidBackupParams,
  AndroidListActivitiesResponse,
  AndroidListSimpleResponse,
} from '../../resources/v1/boxes';
import { TimeString } from '../types';
import { BaseBox } from './base';
import fs from 'fs';

export interface CreateAndroid extends BoxCreateAndroidParams {
  /**
   * Box type is Android
   */
  type: 'android';
  config?: BoxCreateAndroidParams['config'] & {
    expiresIn?: TimeString;
  };
}

export class AndroidBoxOperator extends BaseBox<AndroidBox> {
  public app = {
    /**
     * @example
     * const response = await myBox.app.install({ apk: fs.createReadStream("path/to/your/app.apk") });
     * or
     * const response = await myBox.app.install({ apk: "https://example.com/path/to/app.apk" });
     */
    install: (body: AndroidInstallParams): Promise<void> => {
      if (typeof body.apk === 'string' && !body.apk.startsWith('http')) {
        const exists = fs.existsSync(body.apk);
        if (!exists) {
          throw new Error(`File ${body.apk} does not exist`);
        }
        const apkReadStream = fs.createReadStream(body.apk);
        return this.client.v1.boxes.android.install(this.data.id, { apk: apkReadStream });
      } else if (typeof body.apk === 'string' && body.apk.startsWith('http')) {
        return this.client.v1.boxes.android.install(this.data.id, body);
      }
      return this.client.v1.boxes.android.install(this.data.id, body);
    },
    /**
     * @example
     * const response = await myBox.app.uninstall('com.example.myapp');
     */
    uninstall: (packageName: string, params: Omit<AndroidUninstallParams, 'id'>): Promise<void> =>
      this.client.v1.boxes.android.uninstall(packageName, { ...params, id: this.data.id }),
    /**
     * @example
     * const response = await myBox.app.list();
     */
    list: (params?: AndroidListParams): Promise<AndroidListResponse> =>
      this.client.v1.boxes.android.list(this.data.id, params),
    /**
     * @example
     * const response = await myBox.app.geInfo('com.example.myapp');
     */
    getInfo: (packageName: string): Promise<AndroidApp> =>
      this.client.v1.boxes.android.get(packageName, { id: this.data.id }),
    /**
     * @example
     * const myApp = await myBox.app.get('com.example.myapp');
     */
    get: async (packageName: string) =>
      new AndroidAppOperator(
        await this.client.v1.boxes.android.get(packageName, { id: this.data.id }),
        this.client,
        this.data,
      ),
    /**
     * @example
     * const response = await myBox.app.closeAll();
     */
    closeAll: (): Promise<void> => this.client.v1.boxes.android.closeAll(this.data.id),
    /**
     * @example
     * const response = await myBox.app.rotateScreen({ angle: 90, direction: 'clockwise' });
     */
    rotateScreen: (params: AndroidRotateScreenParams): Promise<void> =>
      this.client.v1.boxes.android.rotateScreen(this.data.id, params),
    /**
     * @example
     * const response = await myBox.app.backupAll();
     */
    backupAll: (): Promise<Response> => this.client.v1.boxes.android.backupAll(this.data.id),
    /**
     * @example
     * const response = await myBox.app.listSimple();
     */
    listSimple: (): Promise<AndroidListSimpleResponse> =>
      this.client.v1.boxes.android.listSimple(this.data.id),
  };
}

class AndroidAppOperator {
  private client: GboxClient;
  public data: AndroidApp;
  public box: AndroidBox;

  constructor(data: AndroidApp, client: GboxClient, box: AndroidBox) {
    this.client = client;
    this.data = data;
    this.box = box;
  }

  /**
   * @example
   * const response = await myApp.open();
   */
  async open(params?: Omit<AndroidOpenParams, 'id'>) {
    return this.client.v1.boxes.android.open(this.data.packageName, { id: this.box.id, ...params });
  }

  /**
   * @example
   * const response = await myApp.restart();
   */
  async restart(params?: Omit<AndroidRestartParams, 'id'>) {
    return this.client.v1.boxes.android.restart(this.data.packageName, { id: this.box.id, ...params });
  }

  /**
   * @example
   * const response = await myApp.close();
   */
  async close(params?: Omit<AndroidCloseParams, 'id'>) {
    return this.client.v1.boxes.android.close(this.data.packageName, { id: this.box.id, ...params });
  }

  /**
   * @example
   * const response = await myApp.backup();
   */
  async backup(params?: Omit<AndroidBackupParams, 'id'>): Promise<Response> {
    return this.client.v1.boxes.android.backup(this.data.packageName, { id: this.box.id, ...params });
  }

  /**
   * @example
   * const response = await myApp.restore({
   *   path: "path/to/your/backup.apk",
   * });
   */
  async restore(params: { path: string }): Promise<void> {
    const exists = fs.existsSync(params.path);
    if (!exists) {
      throw new Error(`File ${params.path} does not exist`);
    }
    const backupReadStream = fs.createReadStream(params.path);
    return this.client.v1.boxes.android.restore(this.box.id, { backup: backupReadStream });
  }
  /**
   * @example
   * const response = await myApp.listActivities();
   */
  async listActivities(): Promise<AndroidListActivitiesResponse> {
    return this.client.v1.boxes.android.listActivities(this.data.packageName, { id: this.box.id });
  }
}
