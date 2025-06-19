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
} from '../../resources/v1/boxes';
import { TimeString } from '../types';
import { BaseBox } from './base';

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
     * const response = await myBox.app.install({ apk: fs.readFileSync("path/to/your/app.apk") });
     * or
     * const response = await myBox.app.install({ apk: "https://example.com/path/to/app.apk" });
     */
    install: (body: AndroidInstallParams): Promise<void> =>
      this.client.v1.boxes.android.install(this.data.id, body),
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
    list: (params: AndroidListParams): Promise<AndroidListResponse> =>
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
}
