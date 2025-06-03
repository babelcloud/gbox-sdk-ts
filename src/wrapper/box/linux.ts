import type { BoxCreateLinuxParams, LinuxBox } from '../../resources/v1/boxes';
import { BaseBox } from './base';

export interface CreateLinux extends BoxCreateLinuxParams {
  type: 'linux';
}

export class LinuxBoxOperator extends BaseBox<LinuxBox> {}
