// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxAPI from './box';
import {
  ActionResult,
  AndroidBox,
  Box,
  BoxClickParams,
  BoxCreateAndroidParams,
  BoxCreateLinuxParams,
  BoxCreateParams,
  BoxCreateResponse,
  BoxDragParams,
  BoxExecuteCommandsParams,
  BoxExecuteCommandsResponse,
  BoxKeypressParams,
  BoxListParams,
  BoxListResponse,
  BoxMoveParams,
  BoxRetrieveResponse,
  BoxRunCodeParams,
  BoxRunCodeResponse,
  BoxScreenshotParams,
  BoxScreenshotResponse,
  BoxScrollParams,
  BoxTouchParams,
  BoxTypeParams,
  CreateAndroidBox,
  CreateBoxConfig,
  CreateLinuxBox,
  LinuxBox,
} from './box';

export class V1 extends APIResource {
  box: BoxAPI.Box = new BoxAPI.Box(this._client);
}

V1.Box = Box;

export declare namespace V1 {
  export {
    Box as Box,
    type ActionResult as ActionResult,
    type AndroidBox as AndroidBox,
    type CreateAndroidBox as CreateAndroidBox,
    type CreateBoxConfig as CreateBoxConfig,
    type CreateLinuxBox as CreateLinuxBox,
    type LinuxBox as LinuxBox,
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxExecuteCommandsResponse as BoxExecuteCommandsResponse,
    type BoxRunCodeResponse as BoxRunCodeResponse,
    type BoxScreenshotResponse as BoxScreenshotResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
    type BoxClickParams as BoxClickParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxDragParams as BoxDragParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxKeypressParams as BoxKeypressParams,
    type BoxMoveParams as BoxMoveParams,
    type BoxRunCodeParams as BoxRunCodeParams,
    type BoxScreenshotParams as BoxScreenshotParams,
    type BoxScrollParams as BoxScrollParams,
    type BoxTouchParams as BoxTouchParams,
    type BoxTypeParams as BoxTypeParams,
  };
}
