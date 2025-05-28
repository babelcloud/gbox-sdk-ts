// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1_1API from './v1-1/v1-1';
import { V1_1 } from './v1-1/v1-1';
import * as V1API from './v1/v1';
import { V1 } from './v1/v1';

export class API extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
  v1_1: V1_1API.V1_1 = new V1_1API.V1_1(this._client);
}

API.V1 = V1;
API.V1_1 = V1_1;

export declare namespace API {
  export { V1 as V1 };

  export { V1_1 as V1_1 };
}
