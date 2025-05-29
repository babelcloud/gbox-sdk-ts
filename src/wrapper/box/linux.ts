import type { BoxCreateLinuxParams, LinuxBox } from '../../resources/v1/box';
import { BaseBox } from './base';

export interface CreateLinux extends BoxCreateLinuxParams {
  type: 'linux';
}

export class CreateLinuxResponse extends BaseBox<LinuxBox> {}
