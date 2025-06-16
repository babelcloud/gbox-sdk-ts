import { GboxClient } from '../../client';

export class BrowserOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.browser.cdpUrl();
   */
  async cdpUrl() {
    return this.client.v1.boxes.browser.cdpURL(this.boxId);
  }
}
