import type { ModelCallParams, ModelCallResponse } from '../../resources/v1/models';
import { GboxClient } from '../../client';

export class ModelOperator {
  private client: GboxClient;

  constructor(client: GboxClient) {
    this.client = client;
  }

  call(body: ModelCallParams): Promise<ModelCallResponse> {
    return this.client.v1.models.call(body);
  }
}
