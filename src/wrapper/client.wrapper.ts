import { ClientOptions, GboxSDK as GboxSDKBase } from '../client';
import { APIPromise } from '../core/api-promise';
import * as API from '../resources/index';
import { BoxListResponse, BoxRetrieveResponse } from '../resources/index';
import { AndroidBox, CreateAndroid } from './box/android.box';
import { CreateLinux, LinuxBox } from './box/linux.box';

export class GboxSDK {
  public gboxSDKBase: GboxSDKBase;
  public boxes: API.Boxes;
  public actions: API.Actions;

  constructor(opt: ClientOptions) {
    this.gboxSDKBase = new GboxSDKBase(opt);
    this.boxes = this.gboxSDKBase.boxes;
    this.actions = this.gboxSDKBase.actions;
  }
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
        return this.boxes.createAndroid(body).then((res) => new AndroidBox(res, this.gboxSDKBase));
      case 'linux':
        return this.boxes.createLinux(body).then((res) => new LinuxBox(res, this.gboxSDKBase));
      default:
        throw new Error(`Invalid box type: ${type}`);
    }
  }

  get(id: string): APIPromise<BoxRetrieveResponse> {
    return this.boxes.retrieve(id);
  }

  list(): APIPromise<BoxListResponse> {
    return this.boxes.list();
  }
}
