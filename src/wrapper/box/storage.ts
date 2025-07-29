import { StoragePresignedURLParams, StoragePresignedURLResponse } from '../../resources/v1/boxes';
import { GboxClient } from '../../client';
import { TimeString } from '../types';

export interface CreateStoragePresignedURL extends StoragePresignedURLParams {
  expiresIn?: TimeString;
}

export class StorageOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.storage.createPresignedUrl({ storageKey: 'storage://xxxxxx/xxxxxx/xxxxxxx' });
   */
  createPresignedUrl(body: StoragePresignedURLParams): Promise<StoragePresignedURLResponse> {
    return this.client.v1.boxes.storage.presignedURL(this.boxId, body);
  }
}
