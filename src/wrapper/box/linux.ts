import type { BoxCreateLinuxParams, LinuxBox } from '../../resources/v1/boxes';
import { TimeString } from '../types';
import { BaseBox } from './base';

export interface CreateLinux extends BoxCreateLinuxParams {
  type: 'linux';
  timeout?: TimeString;
  config?: BoxCreateLinuxParams['config'] & {
    expiresIn?: TimeString;
  };
}

export class LinuxBoxOperator extends BaseBox<LinuxBox> {}
