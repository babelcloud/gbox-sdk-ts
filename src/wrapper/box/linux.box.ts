import { BoxCreateLinuxParams, BoxCreateLinuxResponse } from '../../resources/index';
import { BaseBox } from './base.box';

export interface CreateLinux extends BoxCreateLinuxParams {
  type: 'linux';
}

export class LinuxBox extends BaseBox<BoxCreateLinuxResponse> {}
