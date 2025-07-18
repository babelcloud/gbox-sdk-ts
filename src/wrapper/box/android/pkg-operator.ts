import { GboxClient } from '../../../client';
import {
  AndroidBox,
  AndroidOpenParams,
  AndroidRestartParams,
  AndroidCloseParams,
  AndroidBackupParams,
  AndroidListActivitiesResponse,
  AndroidGetResponse,
} from '../../../resources/v1/boxes';

export class AndroidPkgOperator {
  private client: GboxClient;
  public data: AndroidGetResponse;
  public box: AndroidBox;

  constructor(client: GboxClient, box: AndroidBox, data: AndroidGetResponse) {
    this.client = client;
    this.data = data;
    this.box = box;
  }

  /**
   * @example
   * const response = await myPkg.open();
   */
  async open(params?: Omit<AndroidOpenParams, 'boxId'>) {
    const res = await this.client.v1.boxes.android.open(this.data.packageName, {
      boxId: this.box.id,
      ...params,
    });
    await this.syncData();

    return res;
  }

  /**
   * @example
   * const response = await myPkg.close();
   */
  async close(params?: Omit<AndroidCloseParams, 'boxId'>) {
    const res = await this.client.v1.boxes.android.close(this.data.packageName, {
      boxId: this.box.id,
      ...params,
    });
    await this.syncData();

    return res;
  }

  /**
   * @example
   * const response = await myPkg.restart();
   */
  async restart(params?: Omit<AndroidRestartParams, 'boxId'>) {
    const res = await this.client.v1.boxes.android.restart(this.data.packageName, {
      boxId: this.box.id,
      ...params,
    });
    await this.syncData();

    return res;
  }

  /**
   * @example
   * const response = await myPkg.listActivities();
   */
  async listActivities(): Promise<AndroidListActivitiesResponse> {
    return this.client.v1.boxes.android.listActivities(this.data.packageName, { boxId: this.box.id });
  }

  /**
   * @example
   * const response = await myPkg.backup();
   */
  async backup(params?: Omit<AndroidBackupParams, 'boxId'>): Promise<Response> {
    return this.client.v1.boxes.android.backup(this.data.packageName, { boxId: this.box.id, ...params });
  }

  private async syncData() {
    const res = await this.client.v1.boxes.android.get(this.data.packageName, { boxId: this.box.id });

    this.data = res;
  }
}
