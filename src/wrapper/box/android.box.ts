import { BoxCreateAndroidParams, BoxCreateAndroidResponse } from '../../resources/index';
import { BaseBox } from './base.box';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
}

export class AndroidBox extends BaseBox<BoxCreateAndroidResponse> {}
