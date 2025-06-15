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
import { BaseBox } from './base';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
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

  constructor(data: AndroidApp, client: GboxClient) {
    this.client = client;
    this.data = data;
  }

  /**
   * @example
   * const response = await myApp.open();
   */
  async open(params: AndroidOpenParams) {
    return this.client.v1.boxes.android.open(this.data.packageName, params);
  }

  /**
   * @example
   * const response = await myApp.restart();
   */
  async restart(params: AndroidRestartParams) {
    return this.client.v1.boxes.android.restart(this.data.packageName, params);
  }

  /**
   * @example
   * const response = await myApp.close();
   */
  async close(params: AndroidCloseParams) {
    return this.client.v1.boxes.android.close(this.data.packageName, params);
  }
}
