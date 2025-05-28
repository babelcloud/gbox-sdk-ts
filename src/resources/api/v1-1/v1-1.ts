// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BoxAPI from './box';
import {
  Box,
  BoxClickParams,
  BoxClickResponse,
  BoxCreateAndroidParams,
  BoxCreateLinuxParams,
  BoxCreateParams,
  BoxCreateResponse,
  BoxDragParams,
  BoxDragResponse,
  BoxKeypressParams,
  BoxKeypressResponse,
  BoxListResponse,
  BoxMoveParams,
  BoxMoveResponse,
  BoxRetrieveResponse,
  BoxScreenshotParams,
  BoxScreenshotResponse,
  BoxScrollParams,
  BoxScrollResponse,
  BoxTouchParams,
  BoxTouchResponse,
  BoxTypeParams,
  BoxTypeResponse,
} from './box';

export class V1_1 extends APIResource {
  box: BoxAPI.Box = new BoxAPI.Box(this._client);
}

V1_1.Box = Box;

export declare namespace V1_1 {
  export {
    Box as Box,
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxClickResponse as BoxClickResponse,
    type BoxDragResponse as BoxDragResponse,
    type BoxKeypressResponse as BoxKeypressResponse,
    type BoxMoveResponse as BoxMoveResponse,
    type BoxScreenshotResponse as BoxScreenshotResponse,
    type BoxScrollResponse as BoxScrollResponse,
    type BoxTouchResponse as BoxTouchResponse,
    type BoxTypeResponse as BoxTypeResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxClickParams as BoxClickParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxDragParams as BoxDragParams,
    type BoxKeypressParams as BoxKeypressParams,
    type BoxMoveParams as BoxMoveParams,
    type BoxScreenshotParams as BoxScreenshotParams,
    type BoxScrollParams as BoxScrollParams,
    type BoxTouchParams as BoxTouchParams,
    type BoxTypeParams as BoxTypeParams,
  };
}
