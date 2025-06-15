import { GboxClient } from '../../client';
import {
  BoxCreateAndroidParams,
  AndroidBox,
  AndroidInstallParams,
  AndroidListResponse,
  AndroidApp,
  AndroidOpenParams,
  AndroidRestartParams,
  AndroidCloseParams,
} from '../../resources/v1/boxes';
import { BaseBox } from './base';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
}

export class AndroidBoxOperator extends BaseBox<AndroidBox> {
  public app: InterfaceAndroidApp = new InterfaceAndroidApp(this.client, this.data.id);
}

class InterfaceAndroidApp {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.app.install({ apk: fs.readFileSync("path/to/your/app.apk") });
   * or
   * const response = await myBox.app.install({ apk: "https://example.com/path/to/app.apk" });
   */
  async install(body: AndroidInstallParams) {
    return this.client.v1.boxes.android.install(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.app.uninstall('com.example.myapp');
   */
  async uninstall(packageName: string) {
    return this.client.v1.boxes.android.uninstall(packageName, { id: this.boxId, keepData: true });
  }

  /**
   * @example
   * const response = await myBox.app.list();
   */
  async list(): Promise<AndroidListResponse> {
    return this.client.v1.boxes.android.list(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.app.get('com.example.myapp');
   */
  async get(packageName: string) {
    return this.client.v1.boxes.android.get(packageName, { id: this.boxId });
  }

  /**
   * @example
   * const myApp = await myBox.app.attach('com.example.myapp');
   */
  async attach(packageName: string) {
    return new AndroidAppOperator(
      await this.client.v1.boxes.android.get(packageName, { id: this.boxId }),
      this.client,
    );
  }

  /**
   * @example
   * const response = await myBox.app.closeAll();
   */
  async closeAll() {
    return this.client.v1.boxes.android.closeAll(this.boxId);
  }
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
