import { ClientOptions, GboxClient } from '../client';
import { BoxDeleteParams, BoxListParams, BoxStopResponse } from '../resources/v1/boxes';
import { CreateAndroid, AndroidBoxOperator } from './box/android';
import { CreateLinux, LinuxBoxOperator } from './box/linux';
import { AndroidBox, LinuxBox } from '../resources/v1/boxes';

function isAndroidBox(box: AndroidBox | LinuxBox): box is AndroidBox {
  return box.type === 'android';
}
function isLinuxBox(box: AndroidBox | LinuxBox): box is LinuxBox {
  return box.type === 'linux';
}

export class GboxSDK {
  private client: GboxClient;

  constructor(clientOptions: ClientOptions = {}) {
    this.client = new GboxClient(clientOptions);
  }

  /**
   * @example
   * const response = await gboxSDK.create({
   *   type: 'android',
   *   config: { labels: { FOO: 'bar' }, envs: { FOO: 'bar' } },
   * });
   */
  async create(body: CreateAndroid): Promise<AndroidBoxOperator>;
  /**
   * @example
   * const response = await gboxSDK.create({
   *   type: 'linux',
   *   config: { envs: { FOO: 'bar' } },
   * });
   */
  async create(body: CreateLinux): Promise<LinuxBoxOperator>;
  // 实现签名
  async create(body: CreateAndroid | CreateLinux): Promise<AndroidBoxOperator | LinuxBoxOperator> {
    if (body.type === 'android') {
      const res = await this.client.v1.boxes.createAndroid(body as CreateAndroid);
      return new AndroidBoxOperator(res, this.client);
    } else if (body.type === 'linux') {
      const res = await this.client.v1.boxes.createLinux(body as CreateLinux);
      return new LinuxBoxOperator(res, this.client);
    } else {
      throw new Error(`Unsupported box type: ${(body as any).type}`);
    }
  }

  /**
   * @example
   * const response = await gboxSDK.list();
   * or
   * const response = await gboxSDK.list({
   *   page: 1,
   *   pageSize: 10,
   * });
   */
  async list(
    query: BoxListParams = {
      page: 1,
      pageSize: 10,
    },
  ): Promise<Array<AndroidBoxOperator | LinuxBoxOperator>> {
    const res = await this.client.v1.boxes.list(query);
    return res.data.map((box) => {
      if (isAndroidBox(box)) {
        return new AndroidBoxOperator(box, this.client);
      } else if (isLinuxBox(box)) {
        return new LinuxBoxOperator(box, this.client);
      } else {
        throw new Error(`Invalid box type: ${(box as any).type}`);
      }
    });
  }

  /**
   * @example
   * const response = await gboxSDK.get('box_id');
   */
  async get(id: string): Promise<AndroidBoxOperator | LinuxBoxOperator> {
    const res = await this.client.v1.boxes.retrieve(id);
    if (isAndroidBox(res)) {
      return new AndroidBoxOperator(res, this.client);
    } else if (isLinuxBox(res)) {
      return new LinuxBoxOperator(res, this.client);
    } else {
      throw new Error(`Invalid box type: ${(res as any).type}`);
    }
  }

  /**
   * @example
   * const response = await gboxSDK.delete('box_id');
   */
  delete(id: string, body?: BoxDeleteParams): Promise<BoxStopResponse> {
    return this.client.v1.boxes.stop(id, body || {});
  }
}
