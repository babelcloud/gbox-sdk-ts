import {
  BoxCreateAndroidParams,
  AndroidBox,
  AndroidListResponse,
  AndroidInstallParams,
} from '../../resources/v1/boxes';
import { BaseBox } from './base';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
}

export class AndroidBoxOperator extends BaseBox<AndroidBox> {
  /**
   * @example
   * await myAndroidBox.install({
   *   apk: fs.readFileSync('/path/to/app.apk'),
   * });
   * or
   * await myAndroidBox.install({
   *   apk: 'https://example.com/app.apk',
   * });
   */
  async install(body: AndroidInstallParams) {
    return this.client.v1.boxes.android.install(this.id, body);
  }
  /**
   * @example
   * await myAndroidBox.uninstall('com.example.app');
   */
  async uninstall(packageName: string) {
    return this.client.v1.boxes.android.uninstall(packageName, { id: this.id, keepData: true });
  }
  /**
   * @example
   * const installedApps = await myAndroidBox.listApps();
   */
  async listApps(): Promise<AndroidListResponse> {
    return this.client.v1.boxes.android.list(this.id);
  }
}
