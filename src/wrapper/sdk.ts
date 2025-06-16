import { ClientOptions, GboxClient } from '../client';
import {
  AndroidBox,
  BoxDeleteParams,
  BoxListParams,
  BoxListResponse,
  BoxRetrieveResponse,
  LinuxBox,
} from '../resources/v1/boxes';
import { CreateAndroid, AndroidBoxOperator } from './box/android';
import { CreateLinux, LinuxBoxOperator } from './box/linux';
import { isAndroidBox, isLinuxBox } from './utils';

/*
 * @example
 * import GboxSDK from "gbox-sdk";
 *
 * const gboxSDK = new GboxSDK({
 *   apiKey: process.env["GBOX_API_KEY"] // This is the default and can be omitted
 * });
 */
export class GboxSDK {
  private client: GboxClient;

  constructor(clientOptions?: ClientOptions) {
    this.client = new GboxClient(clientOptions);
  }

  /**
   * @example
   * const box = await gboxSDK.create({
   *   type: 'android',
   *   config: { labels: { FOO: 'bar' }, envs: { FOO: 'bar' } },
   * });
   */
  async create(body: CreateAndroid): Promise<AndroidBoxOperator>;
  /**
   * @example
   * const box = await gboxSDK.create({
   *   type: 'linux',
   *   config: { envs: { FOO: 'bar' } },
   * });
   */
  async create(body: CreateLinux): Promise<LinuxBoxOperator>;
  async create(body: CreateAndroid | CreateLinux): Promise<BoxOperator> {
    const { type, ...params } = body;

    if (type === 'android') {
      const res = await this.client.v1.boxes.createAndroid(params);
      return new AndroidBoxOperator(res, this.client);
    }

    if (type === 'linux') {
      const res = await this.client.v1.boxes.createLinux(params);
      return new LinuxBoxOperator(res, this.client);
    }

    throw new Error(`Unsupported box type: ${(body as any).type}`);
  }

  /**
   * @example
   * const boxes = await gboxSDK.listInfo();
   * or
   * const boxes = await gboxSDK.listInfo({
   *   page: 1,
   *   pageSize: 10,
   * });
   */
  async listInfo(query?: BoxListParams): Promise<BoxListResponse> {
    return this.client.v1.boxes.list(query);
  }

  /**
   * @example
   * const boxes = await gboxSDK.list();
   * or
   * const boxes = await gboxSDK.list({
   *   page: 1,
   *   pageSize: 10,
   * });
   */
  async list(query?: BoxListParams): Promise<BoxListOperatorResponse> {
    const res = await this.client.v1.boxes.list(query);
    const instances = res.data.map((item) => this.dataToOperator(item));

    return {
      page: res.page,
      pageSize: res.pageSize,
      total: res.total,
      operators: instances,
    };
  }

  /**
   * @example
   * const boxInfo = await gboxSDK.get('975fed9f-bb28-4718-a2c5-e01f72864bd1');
   */
  async getInfo(id: string): Promise<BoxRetrieveResponse> {
    return this.client.v1.boxes.retrieve(id);
  }

  /**
   * @example
   * const box = await gboxSDK.get('975fed9f-bb28-4718-a2c5-e01f72864bd1');
   */
  async get(id: string): Promise<BoxOperator> {
    const res = await this.client.v1.boxes.retrieve(id);

    return this.dataToOperator(res);
  }

  /**
   * @example
   * const response = await gboxSDK.delete('box_id');
   */
  async delete(id: string, body?: DeleteBox) {
    await this.client.v1.boxes.delete(id, body || {});
  }

  private dataToOperator(data: AndroidBox | LinuxBox): BoxOperator {
    if (isAndroidBox(data)) {
      return new AndroidBoxOperator(data, this.client);
    }

    if (isLinuxBox(data)) {
      return new LinuxBoxOperator(data, this.client);
    }

    throw new Error(`Invalid box type: ${(data as any).type}`);
  }
}

export interface DeleteBox extends BoxDeleteParams {}

export interface BoxList extends BoxListParams {}

export type BoxOperator = AndroidBoxOperator | LinuxBoxOperator;

export type BoxListOperatorResponse = {
  /**
   * A box operator that can be either Linux or Android type
   */
  operators: BoxOperator[];
  /**
   * Page number
   */
  page: number;
  /**
   * Page size
   */
  pageSize: number;
  /**
   * Total number of items
   */
  total: number;
};
