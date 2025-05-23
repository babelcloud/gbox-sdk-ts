import { GboxSDK as GboxSDKBase } from '../client';
import { APIPromise } from '../core/api-promise';
import { BoxDeleteResponse, BoxRetrieveResponse } from '../resources/boxes';
import { AndroidBox, CreateAndroid } from './box/android';
import { CreateLinux, LinuxBox } from './box/linux';

export class GboxSDK extends GboxSDKBase {
  /**
   * @example
   * ```ts
   * const response = await client.boxes.create({
   *   type: 'android',
   *   config: { labels: { FOO: 'bar' }, envs: { FOO: 'bar' } },
   * });
   * ```
   */
  async create(body: CreateAndroid): Promise<AndroidBox>;
  /**
   * @example
   * ```ts
   * const response = await client.boxes.create({
   *   type: 'linux',
   *   config: { envs: { FOO: 'bar' } },
   * });
   * ```
   */
  async create(body: CreateLinux): Promise<LinuxBox>;
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
        return this.boxes.createAndroid(body).then((res) => new AndroidBox(res));
      case 'linux':
        return this.boxes.createLinux(body).then((res) => new LinuxBox(res));
      default:
        throw new Error(`Invalid box type: ${type}`);
    }
  }

  async list(): Promise<Array<AndroidBox | LinuxBox>> {
    const res = await this.boxes.list();
    return res.map((box) => {
      const { type } = box;
      switch (type) {
        case 'android':
          return new AndroidBox(box);
        case 'linux':
          return new LinuxBox(box);
        default:
          throw new Error(`Invalid box type: ${type}`);
      }
    });
  }

  // FIXME: name conflict with GboxSDKBase.get
  retrieve(id: string): APIPromise<BoxRetrieveResponse> {
    return this.boxes.retrieve(id);
  }
  // FIXME: name conflict with GboxSDKBase.delete
  remove(id: string): APIPromise<BoxDeleteResponse> {
    return this.boxes.delete(id);
  }
}
