// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as GitHubAPI from './github';
import { GitHub } from './github';
import * as GoogleAPI from './google';
import { Google } from './google';

export class Auth extends APIResource {
  github: GitHubAPI.GitHub = new GitHubAPI.GitHub(this._client);
  google: GoogleAPI.Google = new GoogleAPI.Google(this._client);
}

Auth.GitHub = GitHub;
Auth.Google = Google;

export declare namespace Auth {
  export { GitHub as GitHub };

  export { Google as Google };
}
