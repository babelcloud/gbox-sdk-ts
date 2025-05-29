import { GboxClient } from '../client';
import { BoxListParams } from '../resources/v1/boxes';
import { CreateAndroid, CreateAndroidResponse } from './box/android';
import { CreateLinux, CreateLinuxResponse } from './box/linux';
import { AndroidBox, LinuxBox } from '../resources/v1/boxes';

function isAndroidBox(box: AndroidBox | LinuxBox): box is AndroidBox {
  return box.type === 'android';
}
function isLinuxBox(box: AndroidBox | LinuxBox): box is LinuxBox {
  return box.type === 'linux';
}

export class GboxSDK extends GboxClient {
  /**
   * @example
   * ```ts
   * const response = await client.boxes.create({
   *   type: 'android',
   *   config: { labels: { FOO: 'bar' }, envs: { FOO: 'bar' } },
   * });
   * ```
   */
  async create(body: CreateAndroid): Promise<CreateAndroidResponse>;
  /**
   * @example
   * ```ts
   * const response = await client.boxes.create({
   *   type: 'linux',
   *   config: { envs: { FOO: 'bar' } },
   * });
   * ```
   */
  async create(body: CreateLinux): Promise<CreateLinuxResponse>;
  /**
   * @example
   * ```ts
   * const response = await client.boxes.create({
   *   type: 'linux',
   *   config: { envs: { FOO: 'bar' } },
   * });
   * ```
   */
  async create(body: CreateAndroid | CreateLinux): Promise<AndroidBox | LinuxBox> {
    const { type } = body;

    switch (type) {
      case 'android':
        return this.v1.boxes.createAndroid(body).then((res) => new CreateAndroidResponse(res));
      case 'linux':
        return this.v1.boxes.createLinux(body).then((res) => new CreateLinuxResponse(res));
      default:
        throw new Error(`Invalid box type: ${type}`);
    }
  }

  async list(query: BoxListParams): Promise<Array<AndroidBox | LinuxBox>> {
    const res = await this.v1.boxes.list(query);
    return res.data.map((box) => {
      if (isAndroidBox(box)) {
        return new CreateAndroidResponse(box);
      } else if (isLinuxBox(box)) {
        return new CreateLinuxResponse(box);
      } else {
        throw new Error(`Invalid box type: ${(box as any).type}`);
      }
    });
  }
}
