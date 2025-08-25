import { ProxyGetResponse, ProxySetParams, ProxySetResponse } from '../../resources/v1/boxes';
import { GboxClient } from '../../client';

export class ProxyOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.proxy.set({
   *   host: '127.0.0.1',
   *   port: 9090,
   * });
   */
  set(body: ProxySetParams): Promise<ProxySetResponse> {
    return this.client.v1.boxes.proxy.set(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.proxy.get();
   */
  get(): Promise<ProxyGetResponse> {
    return this.client.v1.boxes.proxy.get(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.proxy.clear();
   */
  clear(): Promise<void> {
    return this.client.v1.boxes.proxy.clear(this.boxId);
  }
}
