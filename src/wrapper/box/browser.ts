import { BrowserGetTabsResponse, BrowserOpenTabParams } from '../../resources/v1/boxes';
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

  /**
   * @example
   * const response = await myBox.browser.listTab();
   */
  async listTabs() {
    const tabInfo = await this.client.v1.boxes.browser.getTabs(this.boxId);
    return tabInfo.data.map((tab) => new BrowserTabOperator(this.client, this.boxId, tab));
  }

  /**
   * @example
   * const response = await myBox.browser.listTabInfo();
   */
  async listTabInfo() {
    return this.client.v1.boxes.browser.getTabs(this.boxId);
  }

  /**
   * @example
   * const response = await myBox.browser.updateTab('1', 'https://www.google.com');
   */
  async updateTab(tabId: string, url: string) {
    return this.client.v1.boxes.browser.updateTab(tabId, { boxId: this.boxId, url });
  }

  /**
   * @example
   * const response = await myBox.browser.closeTab('1');
   */
  async closeTab(tabId: string) {
    return this.client.v1.boxes.browser.closeTab(tabId, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.browser.switchTab('1');
   */
  async switchTab(tabId: string) {
    return this.client.v1.boxes.browser.switchTab(tabId, { boxId: this.boxId });
  }

  /**
   * @example
   * const response = await myBox.browser.openTab('https://www.google.com');
   */
  async openTab(url: string | BrowserOpenTabParams) {
    const params = typeof url === 'string' ? { url } : url;
    return this.client.v1.boxes.browser.openTab(this.boxId, params);
  }
}

export class BrowserTabOperator {
  private client: GboxClient;
  private boxId: string;
  public data: BrowserGetTabsResponse.Data;

  constructor(client: GboxClient, boxId: string, data: BrowserGetTabsResponse.Data) {
    this.client = client;
    this.boxId = boxId;
    this.data = data;
  }

  /**
   * @example
   * const response = await myBox.browser.tab.update('https://www.google.com');
   */
  async update(url: string) {
    return this.client.v1.boxes.browser.updateTab(this.data.id, { boxId: this.boxId, url });
  }
}
