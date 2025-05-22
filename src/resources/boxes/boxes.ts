// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionClickParams, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Boxes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  create(body: BoxCreateParams, options?: RequestOptions): APIPromise<BoxCreateResponse> {
    return this._client.post('/boxes', { body, ...options });
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/boxes/${id}`, options);
  }

  list(options?: RequestOptions): APIPromise<BoxListResponse> {
    return this._client.get('/boxes', options);
  }

  delete(id: string, options?: RequestOptions): APIPromise<BoxDeleteResponse> {
    return this._client.delete(path`/boxes/${id}`, options);
  }

  createAndroid(
    body: BoxCreateAndroidParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxCreateAndroidResponse> {
    return this._client.post('/boxes/android', { body, ...options });
  }

  createLinux(
    body: BoxCreateLinuxParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxCreateLinuxResponse> {
    return this._client.post('/boxes/linux', { body, ...options });
  }

  start(id: string, options?: RequestOptions): APIPromise<BoxStartResponse> {
    return this._client.post(path`/boxes/${id}/start`, options);
  }

  stop(id: string, options?: RequestOptions): APIPromise<BoxStopResponse> {
    return this._client.post(path`/boxes/${id}/stop`, options);
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxCreateResponse = BoxCreateResponse.UnionMember0 | BoxCreateResponse.UnionMember1;

export namespace BoxCreateResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember0 {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Linux boxes
         */
        type: 'chromium' | 'firefox' | 'webkit';

        /**
         * Browser version string (e.g. '12')
         */
        version: string;
      }

      /**
       * Operating system configuration
       */
      export interface Os {
        /**
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember1 {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Android operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Android boxes
         */
        type: 'Chrome for Android' | 'UC Browser for Android';

        /**
         * Browser version string (e.g. '136')
         */
        version: string;
      }

      /**
       * Android operating system configuration
       */
      export interface Os {
        /**
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxRetrieveResponse = BoxRetrieveResponse.UnionMember0 | BoxRetrieveResponse.UnionMember1;

export namespace BoxRetrieveResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember0 {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Linux boxes
         */
        type: 'chromium' | 'firefox' | 'webkit';

        /**
         * Browser version string (e.g. '12')
         */
        version: string;
      }

      /**
       * Operating system configuration
       */
      export interface Os {
        /**
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember1 {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Android operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Android boxes
         */
        type: 'Chrome for Android' | 'UC Browser for Android';

        /**
         * Browser version string (e.g. '136')
         */
        version: string;
      }

      /**
       * Android operating system configuration
       */
      export interface Os {
        /**
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export type BoxListResponse = Array<BoxListResponse.UnionMember0 | BoxListResponse.UnionMember1>;

export namespace BoxListResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember0 {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Linux boxes
         */
        type: 'chromium' | 'firefox' | 'webkit';

        /**
         * Browser version string (e.g. '12')
         */
        version: string;
      }

      /**
       * Operating system configuration
       */
      export interface Os {
        /**
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember1 {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Android operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Android boxes
         */
        type: 'Chrome for Android' | 'UC Browser for Android';

        /**
         * Browser version string (e.g. '136')
         */
        version: string;
      }

      /**
       * Android operating system configuration
       */
      export interface Os {
        /**
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxDeleteResponse = BoxDeleteResponse.UnionMember0 | BoxDeleteResponse.UnionMember1;

export namespace BoxDeleteResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember0 {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Linux boxes
         */
        type: 'chromium' | 'firefox' | 'webkit';

        /**
         * Browser version string (e.g. '12')
         */
        version: string;
      }

      /**
       * Operating system configuration
       */
      export interface Os {
        /**
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember1 {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Android operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Android boxes
         */
        type: 'Chrome for Android' | 'UC Browser for Android';

        /**
         * Browser version string (e.g. '136')
         */
        version: string;
      }

      /**
       * Android operating system configuration
       */
      export interface Os {
        /**
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export interface BoxCreateAndroidResponse {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Configuration for an Android box instance
   */
  config: BoxCreateAndroidResponse.Config;

  /**
   * Creation timestamp of the box
   */
  createdAt: string;

  /**
   * Expiration timestamp of the box
   */
  expiresAt: string;

  /**
   * The current status of a box instance
   */
  status: 'pending' | 'running' | 'stopped' | 'error';

  /**
   * Box type is Android
   */
  type: 'android';

  /**
   * Last update timestamp of the box
   */
  updatedAt: string;
}

export namespace BoxCreateAndroidResponse {
  /**
   * Configuration for an Android box instance
   */
  export interface Config {
    /**
     * Browser configuration
     */
    browser: Config.Browser;

    /**
     * CPU cores allocated to the box
     */
    cpu: number;

    /**
     * Environment variables for the box
     */
    envs: Record<string, string>;

    /**
     * Key-value pairs of labels for the box
     */
    labels: Record<string, string>;

    /**
     * Memory allocated to the box in MB
     */
    memory: number;

    /**
     * Android operating system configuration
     */
    os: Config.Os;

    /**
     * Storage allocated to the box in GB
     */
    storage: number;

    /**
     * Working directory path for the box
     */
    workingDir: string;
  }

  export namespace Config {
    /**
     * Browser configuration
     */
    export interface Browser {
      /**
       * Supported browser types for Android boxes
       */
      type: 'Chrome for Android' | 'UC Browser for Android';

      /**
       * Browser version string (e.g. '136')
       */
      version: string;
    }

    /**
     * Android operating system configuration
     */
    export interface Os {
      /**
       * Android operating system type
       */
      type: 'android';

      /**
       * Supported Android versions
       */
      version: '12' | '13';
    }
  }
}

export interface BoxCreateLinuxResponse {
  /**
   * Unique identifier for the box
   */
  id: string;

  /**
   * Configuration for a Linux box instance
   */
  config: BoxCreateLinuxResponse.Config;

  /**
   * Creation timestamp of the box
   */
  createdAt: string;

  /**
   * Expiration timestamp of the box
   */
  expiresAt: string;

  /**
   * The current status of a box instance
   */
  status: 'pending' | 'running' | 'stopped' | 'error';

  /**
   * Box type is Linux
   */
  type: 'linux';

  /**
   * Last update timestamp of the box
   */
  updatedAt: string;
}

export namespace BoxCreateLinuxResponse {
  /**
   * Configuration for a Linux box instance
   */
  export interface Config {
    /**
     * Browser configuration
     */
    browser: Config.Browser;

    /**
     * CPU cores allocated to the box
     */
    cpu: number;

    /**
     * Environment variables for the box
     */
    envs: Record<string, string>;

    /**
     * Key-value pairs of labels for the box
     */
    labels: Record<string, string>;

    /**
     * Memory allocated to the box in MB
     */
    memory: number;

    /**
     * Operating system configuration
     */
    os: Config.Os;

    /**
     * Storage allocated to the box in GB
     */
    storage: number;

    /**
     * Working directory path for the box
     */
    workingDir: string;
  }

  export namespace Config {
    /**
     * Browser configuration
     */
    export interface Browser {
      /**
       * Supported browser types for Linux boxes
       */
      type: 'chromium' | 'firefox' | 'webkit';

      /**
       * Browser version string (e.g. '12')
       */
      version: string;
    }

    /**
     * Operating system configuration
     */
    export interface Os {
      /**
       * Supported operating system types for Linux boxes
       */
      type: 'linux' | 'windows' | 'macos';

      /**
       * OS version string (e.g. 'ubuntu-20.04')
       */
      version: string;
    }
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxStartResponse = BoxStartResponse.UnionMember0 | BoxStartResponse.UnionMember1;

export namespace BoxStartResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember0 {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Linux boxes
         */
        type: 'chromium' | 'firefox' | 'webkit';

        /**
         * Browser version string (e.g. '12')
         */
        version: string;
      }

      /**
       * Operating system configuration
       */
      export interface Os {
        /**
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember1 {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Android operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Android boxes
         */
        type: 'Chrome for Android' | 'UC Browser for Android';

        /**
         * Browser version string (e.g. '136')
         */
        version: string;
      }

      /**
       * Android operating system configuration
       */
      export interface Os {
        /**
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

/**
 * A box instance that can be either Linux or Android type
 */
export type BoxStopResponse = BoxStopResponse.UnionMember0 | BoxStopResponse.UnionMember1;

export namespace BoxStopResponse {
  export interface UnionMember0 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: UnionMember0.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Linux
     */
    type: 'linux';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember0 {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Linux boxes
         */
        type: 'chromium' | 'firefox' | 'webkit';

        /**
         * Browser version string (e.g. '12')
         */
        version: string;
      }

      /**
       * Operating system configuration
       */
      export interface Os {
        /**
         * Supported operating system types for Linux boxes
         */
        type: 'linux' | 'windows' | 'macos';

        /**
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface UnionMember1 {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: UnionMember1.Config;

    /**
     * Creation timestamp of the box
     */
    createdAt: string;

    /**
     * Expiration timestamp of the box
     */
    expiresAt: string;

    /**
     * The current status of a box instance
     */
    status: 'pending' | 'running' | 'stopped' | 'error';

    /**
     * Box type is Android
     */
    type: 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace UnionMember1 {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Browser configuration
       */
      browser: Config.Browser;

      /**
       * CPU cores allocated to the box
       */
      cpu: number;

      /**
       * Environment variables for the box
       */
      envs: Record<string, string>;

      /**
       * Key-value pairs of labels for the box
       */
      labels: Record<string, string>;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Android operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB
       */
      storage: number;

      /**
       * Working directory path for the box
       */
      workingDir: string;
    }

    export namespace Config {
      /**
       * Browser configuration
       */
      export interface Browser {
        /**
         * Supported browser types for Android boxes
         */
        type: 'Chrome for Android' | 'UC Browser for Android';

        /**
         * Browser version string (e.g. '136')
         */
        version: string;
      }

      /**
       * Android operating system configuration
       */
      export interface Os {
        /**
         * Android operating system type
         */
        type: 'android';

        /**
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export type BoxCreateParams = BoxCreateParams.Variant0 | BoxCreateParams.Variant1;

export declare namespace BoxCreateParams {
  export interface Variant0 {
    type: 'linux';

    config?: Variant0.Config;
  }

  export namespace Variant0 {
    export interface Config {
      /**
       * Environment variables for the box
       */
      envs?: Record<string, string>;

      /**
       * The box will be alive for the given duration (e.g. '10m')
       */
      expiresIn?: string;

      /**
       * Key-value pairs of labels for the box
       */
      labels?: Record<string, string>;
    }
  }

  export interface Variant1 {
    type: 'android';

    config?: Variant1.Config;
  }

  export namespace Variant1 {
    export interface Config {
      /**
       * Environment variables for the box
       */
      envs?: Record<string, string>;

      /**
       * The box will be alive for the given duration (e.g. '10m')
       */
      expiresIn?: string;

      /**
       * Key-value pairs of labels for the box
       */
      labels?: Record<string, string>;
    }
  }
}

export interface BoxCreateAndroidParams {
  config?: BoxCreateAndroidParams.Config;
}

export namespace BoxCreateAndroidParams {
  export interface Config {
    /**
     * Environment variables for the box
     */
    envs?: Record<string, string>;

    /**
     * The box will be alive for the given duration (e.g. '10m')
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box
     */
    labels?: Record<string, string>;
  }
}

export interface BoxCreateLinuxParams {
  config?: BoxCreateLinuxParams.Config;
}

export namespace BoxCreateLinuxParams {
  export interface Config {
    /**
     * Environment variables for the box
     */
    envs?: Record<string, string>;

    /**
     * The box will be alive for the given duration (e.g. '10m')
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box
     */
    labels?: Record<string, string>;
  }
}

Boxes.Actions = Actions;

export declare namespace Boxes {
  export {
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxDeleteResponse as BoxDeleteResponse,
    type BoxCreateAndroidResponse as BoxCreateAndroidResponse,
    type BoxCreateLinuxResponse as BoxCreateLinuxResponse,
    type BoxStartResponse as BoxStartResponse,
    type BoxStopResponse as BoxStopResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
  };

  export { Actions as Actions, type ActionClickParams as ActionClickParams };
}
