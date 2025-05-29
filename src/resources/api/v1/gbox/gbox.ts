// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AndroidAPI from './android';
import { Android } from './android';
import * as TerminalAPI from './terminal';
import { Terminal } from './terminal';

export class Gbox extends APIResource {
  terminal: TerminalAPI.Terminal = new TerminalAPI.Terminal(this._client);
  android: AndroidAPI.Android = new AndroidAPI.Android(this._client);
}

Gbox.Terminal = Terminal;
Gbox.Android = Android;

export declare namespace Gbox {
  export { Terminal as Terminal };

  export { Android as Android };
}
