// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BoxAPI from './box';
import { Box } from './box';

export class V1_1 extends APIResource {
  box: BoxAPI.Box = new BoxAPI.Box(this._client);
}

V1_1.Box = Box;

export declare namespace V1_1 {
  export { Box as Box };
}
