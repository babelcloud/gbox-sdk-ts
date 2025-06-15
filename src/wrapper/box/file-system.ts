import type {
  FListParams,
  FWriteParams,
  FListResponse,
  FWriteResponse,
  FReadResponse,
  FReadParams,
} from '../../resources/v1/boxes';
import { GboxClient } from '../../client';

export class FileSystemOperator {
  private client: GboxClient;
  private boxId: string;

  constructor(client: GboxClient, boxId: string) {
    this.client = client;
    this.boxId = boxId;
  }

  /**
   * @example
   * const response = await myBox.fs.listInfo('/tmp');
   * or
   * const response = await myBox.fs.listInfo({ path: '/tmp', depth: 1 });
   */
  listInfo(body: FListParams | string): Promise<FListResponse> {
    if (typeof body === 'string') {
      return this.client.v1.boxes.fs.list(this.boxId, { path: body });
    } else {
      return this.client.v1.boxes.fs.list(this.boxId, body);
    }
  }

  /**
   * @example
   * const response = await myBox.fs.list('/tmp');
   * or
   * const response = await myBox.fs.list({ path: '/tmp', depth: 1 });
   */
  async list(body: FListParams | string): Promise<Array<FileOperator | DirectoryOperator>> {
    const res = await this.listInfo(body);

    return res.data.map((r) => {
      if (r.type === 'file') {
        return new FileOperator(this.client, this.boxId, r);
      } else {
        return new DirectoryOperator(this.client, this.boxId, r);
      }
    });
  }
}

export class FileOperator {
  private client: GboxClient;
  private boxId: string;
  public data: FListResponse.File;

  constructor(client: GboxClient, boxId: string, data: FListResponse.File) {
    this.client = client;
    this.boxId = boxId;
    this.data = data;
  }

  /**
   * @example
   * const response = await myFile.write({ content: 'Hello, World!' });
   */
  write(body: Omit<FWriteParams, 'path'>): Promise<FWriteResponse> {
    return this.client.v1.boxes.fs.write(this.boxId, { ...body, path: this.data.path });
  }

  /**
   * @example
   * const response = await myFile.read();
   */
  read(body: Omit<FReadParams, 'path'> = {}): Promise<FReadResponse> {
    return this.client.v1.boxes.fs.read(this.boxId, { ...body, path: this.data.path });
  }
}

export class DirectoryOperator {
  private client: GboxClient;
  private boxId: string;
  public data: FListResponse.Dir;

  constructor(client: GboxClient, boxId: string, data: FListResponse.Dir) {
    this.client = client;
    this.boxId = boxId;
    this.data = data;
  }
}
