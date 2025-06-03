import { BoxCreateAndroidParams, AndroidBox } from '../../resources/v1/boxes';
import { BaseBox } from './base';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
}

export class AndroidBoxOperator extends BaseBox<AndroidBox> {}
