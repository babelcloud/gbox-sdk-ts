import type {
  FListParams,
  FWriteParams,
  FListResponse,
  FWriteResponse,
  FReadResponse,
  FReadParams,
  FRemoveParams,
  FExistsParams,
  FExistsResponse,
  FRenameParams,
  FRenameResponse,
  FInfoParams,
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
      return this.dataToOperator(r);
    });
  }

  /**
   * @example
   * const response = await myBox.fs.read({ path: '/tmp/file.txt' });
   */
  async read(body: FReadParams): Promise<FReadResponse> {
    return this.client.v1.boxes.fs.read(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.fs.write({ path: '/tmp/file.txt', content: 'Hello, World!' });
   */
  async write(body: FWriteParams): Promise<FWriteResponse> {
    return this.client.v1.boxes.fs.write(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.fs.remove({ path: '/tmp/file.txt' });
   */
  async remove(body: FRemoveParams): Promise<void> {
    await this.client.v1.boxes.fs.remove(this.boxId, body);
    return;
  }

  /**
   * @example
   * const response = await myBox.fs.exists({ path: '/tmp/file.txt' });
   */
  async exists(body: FExistsParams): Promise<FExistsResponse> {
    return this.client.v1.boxes.fs.exists(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.fs.rename({ oldPath: '/tmp/file.txt', newPath: '/tmp/file2.txt' });
   */
  async rename(body: FRenameParams): Promise<FRenameResponse> {
    return this.client.v1.boxes.fs.rename(this.boxId, body);
  }

  /**
   * @example
   * const response = await myBox.fs.get({ path: '/tmp/file.txt' });
   */
  async get(body: FInfoParams): Promise<FileOperator | DirectoryOperator> {
    const res = await this.client.v1.boxes.fs.info(this.boxId, body);

    return this.dataToOperator(res);
  }

  private dataToOperator(data: FListResponse.File | FListResponse.Dir): FileOperator | DirectoryOperator {
    if (data.type === 'file') {
      return new FileOperator(this.client, this.boxId, data);
    } else if (data.type === 'dir') {
      return new DirectoryOperator(this.client, this.boxId, data);
    } else {
      throw new Error(`Invalid file system data type: ${(data as any).type}`);
    }
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
  write(
    body: Omit<FWriteParams.WriteFile, 'path'> | Omit<FWriteParams.WriteFileByBinary, 'path'>,
  ): Promise<FWriteResponse> {
    return this.client.v1.boxes.fs.write(this.boxId, { ...body, path: this.data.path });
  }

  /**
   * @example
   * const response = await myFile.read();
   */
  read(body: Omit<FReadParams, 'path'> = {}): Promise<FReadResponse> {
    return this.client.v1.boxes.fs.read(this.boxId, { ...body, path: this.data.path });
  }

  /**
   * @example
   * const response = await myFile.rename({ newPath: '/tmp/file2.txt' });
   */
  async rename(body: Omit<FRenameParams, 'oldPath'>): Promise<FRenameResponse> {
    return this.client.v1.boxes.fs.rename(this.boxId, { oldPath: this.data.path, ...body });
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

  /**
   * @example
   * const response = await myDir.listInfo();
   * or
   * const response = await myDir.listInfo({ depth: 1 });
   */
  listInfo(body?: Omit<FListParams, 'path'>): Promise<FListResponse> {
    return this.client.v1.boxes.fs.list(this.boxId, { path: this.data.path, ...body });
  }

  /**
   * @example
   * const response = await myDir.list();
   * or
   * const response = await myDir.list({ depth: 1 });
   */
  async list(body?: Omit<FListParams, 'path'>): Promise<Array<FileOperator | DirectoryOperator>> {
    const res = await this.listInfo(body);

    return res.data.map((r) => {
      if (r.type === 'file') {
        return new FileOperator(this.client, this.boxId, r);
      } else {
        return new DirectoryOperator(this.client, this.boxId, r);
      }
    });
  }

  /**
   * @example
   * const response = await myDir.rename({ newPath: '/tmp/dir2' });
   */
  async rename(body: Omit<FRenameParams, 'oldPath'>): Promise<FRenameResponse> {
    return this.client.v1.boxes.fs.rename(this.boxId, { oldPath: this.data.path, ...body });
  }
}
