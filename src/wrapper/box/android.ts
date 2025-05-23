import { BoxCreateAndroidParams, BoxCreateAndroidResponse } from '../../resources/boxes';
import { BaseBox } from './base';

export interface CreateAndroid extends BoxCreateAndroidParams {
  type: 'android';
}

export class AndroidBox extends BaseBox<BoxCreateAndroidResponse> {}
