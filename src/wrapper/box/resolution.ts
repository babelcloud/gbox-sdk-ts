import { BoxResolutionSetParams, BoxResolutionSetResponse } from '../../resources/v1/boxes';
import { GboxClient } from '../../client';

export class ResolutionOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.resolution.set({ height: 1080, width: 1920 });
   */
  async set(body: BoxResolutionSetParams): Promise<BoxResolutionSetResponse> {
    return this.client.v1.boxes.resolutionSet(this.boxId, body);
  }
}
