// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes/boxes';
import {
  AndroidBox,
  BoxCreateAndroidParams,
  BoxCreateLinuxParams,
  BoxDisplayResponse,
  BoxExecuteCommandsParams,
  BoxExecuteCommandsResponse,
  BoxListParams,
  BoxListResponse,
  BoxLiveViewURLParams,
  BoxLiveViewURLResponse,
  BoxRetrieveResponse,
  BoxRunCodeParams,
  BoxRunCodeResponse,
  BoxStartParams,
  BoxStartResponse,
  BoxStopParams,
  BoxStopResponse,
  BoxTerminateParams,
  BoxWebTerminalURLParams,
  BoxWebTerminalURLResponse,
  BoxWebsocketURLResponse,
  Boxes,
  CreateAndroidBox,
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
    type CreateLinuxBox as CreateLinuxBox,
    type LinuxBox as LinuxBox,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxDisplayResponse as BoxDisplayResponse,
    type BoxExecuteCommandsResponse as BoxExecuteCommandsResponse,
    type BoxLiveViewURLResponse as BoxLiveViewURLResponse,
    type BoxRunCodeResponse as BoxRunCodeResponse,
    type BoxStartResponse as BoxStartResponse,
    type BoxStopResponse as BoxStopResponse,
    type BoxWebTerminalURLResponse as BoxWebTerminalURLResponse,
    type BoxWebsocketURLResponse as BoxWebsocketURLResponse,
    type BoxListParams as BoxListParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxLiveViewURLParams as BoxLiveViewURLParams,
    type BoxRunCodeParams as BoxRunCodeParams,
    type BoxStartParams as BoxStartParams,
    type BoxStopParams as BoxStopParams,
    type BoxTerminateParams as BoxTerminateParams,
    type BoxWebTerminalURLParams as BoxWebTerminalURLParams,
  };
}
