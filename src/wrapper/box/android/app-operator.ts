import { GboxClient } from '../../../client';
import {
  AndroidBox,
  AndroidOpenParams,
  AndroidRestartParams,
  AndroidCloseParams,
  AndroidBackupParams,
  AndroidListActivitiesResponse,
  AndroidApp,
} from '../../../resources/v1/boxes';

export class AndroidAppOperator {
  private client: GboxClient;
  public data: AndroidApp;
  public box: AndroidBox;

  constructor(client: GboxClient, box: AndroidBox, data: AndroidApp) {
    this.client = client;
    this.data = data;
    this.box = box;
  }

  /**
   * @example
   * const response = await myApp.open();
   */
  async open(params?: Omit<AndroidOpenParams, 'boxId'>) {
    return this.client.v1.boxes.android.open(this.data.packageName, {
      boxId: this.box.id,
      activityName: this.data.activityName,
      ...params,
    });
  }

  /**
   * @example
   * const response = await myApp.restart();
   */
  async restart(params?: Omit<AndroidRestartParams, 'boxId'>) {
    return this.client.v1.boxes.android.restart(this.data.packageName, {
      boxId: this.box.id,
      activityName: this.data.activityName,
      ...params,
    });
  }

  /**
   * @example
   * const response = await myApp.close();
   */
  async close(params?: Omit<AndroidCloseParams, 'boxId'>) {
    return this.client.v1.boxes.android.close(this.data.packageName, { boxId: this.box.id, ...params });
  }

  /**
   * @example
   * const response = await myApp.listActivities();
   */
  async listActivities(): Promise<AndroidListActivitiesResponse> {
    return this.client.v1.boxes.android.listActivities(this.data.packageName, { boxId: this.box.id });
  }

  /**
   * @example
   * const response = await myApp.backup();
   */
  async backup(params?: Omit<AndroidBackupParams, 'boxId'>): Promise<Response> {
    return this.client.v1.boxes.android.backup(this.data.packageName, { boxId: this.box.id, ...params });
  }
}
