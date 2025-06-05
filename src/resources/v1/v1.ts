// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes/boxes';
import {
  AndroidBox,
  BoxCreateAndroidParams,
  BoxCreateLinuxParams,
  BoxCreateParams,
  BoxCreateResponse,
  BoxDeleteParams,
  BoxExecuteCommandsParams,
  BoxExecuteCommandsResponse,
  BoxListParams,
  BoxListResponse,
  BoxRetrieveResponse,
  BoxRunCodeParams,
  BoxRunCodeResponse,
  BoxStartResponse,
  BoxStopResponse,
  Boxes,
  CreateAndroidBox,
  CreateBoxConfig,
  CreateLinuxBox,
  LinuxBox,
} from './boxes/boxes';

export class V1 extends APIResource {
  boxes: BoxesAPI.Boxes = new BoxesAPI.Boxes(this._client);
}

V1.Boxes = Boxes;

export declare namespace V1 {
  export {
    Boxes as Boxes,
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
    type BoxStartResponse as BoxStartResponse,
    type BoxStopResponse as BoxStopResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
    type BoxDeleteParams as BoxDeleteParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxRunCodeParams as BoxRunCodeParams,
  };
}
