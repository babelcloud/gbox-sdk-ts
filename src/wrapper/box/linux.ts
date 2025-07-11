import type { BoxCreateLinuxParams, LinuxBox } from '../../resources/v1/boxes';
import { TimeString } from '../types';
import { BaseBox } from './base';

export interface CreateLinux extends BoxCreateLinuxParams {
  /**
   * Box type is Linux
   */
  type: 'linux';
  config?: BoxCreateLinuxParams['config'] & {
    expiresIn?: TimeString;
  };
}

export class LinuxBoxOperator extends BaseBox<LinuxBox> {}
