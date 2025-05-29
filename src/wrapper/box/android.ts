import { BoxCreateAndroidParams, AndroidBox } from '../../resources/v1/box';
import { BaseBox } from './base';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
}

export class CreateAndroidResponse extends BaseBox<AndroidBox> {}
