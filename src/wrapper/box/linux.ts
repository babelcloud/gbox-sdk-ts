import type { BoxCreateLinuxParams, BoxCreateLinuxResponse } from '../../resources/boxes';
import { BaseBox } from './base';

export interface CreateLinux extends BoxCreateLinuxParams {
  type: 'linux';
}

export class LinuxBox extends BaseBox<BoxCreateLinuxResponse> {}
