// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionClickParams,
  ActionClickResponse,
  ActionDragParams,
  ActionDragResponse,
  ActionKeypressParams,
  ActionKeypressResponse,
  ActionMoveParams,
  ActionMoveResponse,
  ActionScreenshotParams,
  ActionScreenshotResponse,
  ActionScrollParams,
  ActionScrollResponse,
  ActionTouchParams,
  ActionTouchResponse,
  ActionTypeParams,
  ActionTypeResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Boxes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * @example
   * ```ts
   * const box = await client.v1.boxes.create({ type: 'linux' });
   * ```
   */
  create(body: BoxCreateParams, options?: RequestOptions): APIPromise<BoxCreateResponse> {
    return this._client.post('/api/v1/boxes', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const box = await client.v1.boxes.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/api/v1/boxes/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * const boxes = await client.v1.boxes.list({
   *   page: 0,
   *   pageSize: 0,
   * });
   * ```
   */
  list(query: BoxListParams, options?: RequestOptions): APIPromise<BoxListResponse> {
    return this._client.get('/api/v1/boxes', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.createAndroid({
   *   type: 'linux',
   * });
   * ```
   */
  createAndroid(
    body: BoxCreateAndroidParams,
    options?: RequestOptions,
  ): APIPromise<BoxCreateAndroidResponse> {
    return this._client.post('/api/v1/boxes/android', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.createLinux({
   *   type: 'linux',
   * });
   * ```
   */
  createLinux(body: BoxCreateLinuxParams, options?: RequestOptions): APIPromise<BoxCreateLinuxResponse> {
    return this._client.post('/api/v1/boxes/linux', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.executeCommands(
   *   'id',
   *   { commands: ['ls', '-l'] },
   * );
   * ```
   */
  executeCommands(
    id: string,
    body: BoxExecuteCommandsParams,
    options?: RequestOptions,
  ): APIPromise<BoxExecuteCommandsResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/commands`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.runCode('id', {
   *   code: 'print("Hello, World!")',
   *   type: 'bash',
   * });
   * ```
   */
  runCode(id: string, body: BoxRunCodeParams, options?: RequestOptions): APIPromise<BoxRunCodeResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/run-code`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.start('id');
   * ```
   */
  start(id: string, options?: RequestOptions): APIPromise<BoxStartResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/start`, options);
  }

  /**
   * @example
   * ```ts
   * const response = await client.v1.boxes.stop('id');
   * ```
   */
  stop(id: string, options?: RequestOptions): APIPromise<BoxStopResponse> {
    return this._client.post(path`/api/v1/boxes/${id}/stop`, options);
  }
}

export type BoxCreateResponse = BoxCreateResponse.LinuxBox | BoxCreateResponse.AndroidBox;

export namespace BoxCreateResponse {
  export interface LinuxBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: LinuxBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace LinuxBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB.
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
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface AndroidBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: AndroidBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace AndroidBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

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
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export type BoxRetrieveResponse = BoxRetrieveResponse.LinuxBox | BoxRetrieveResponse.AndroidBox;

export namespace BoxRetrieveResponse {
  export interface LinuxBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: LinuxBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace LinuxBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB.
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
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface AndroidBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: AndroidBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace AndroidBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

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
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export interface BoxListResponse {
  /**
   * A box instance that can be either Linux or Android type
   */
  data: Array<BoxListResponse.LinuxBox | BoxListResponse.AndroidBox>;

  /**
   * Page number
   */
  page: number;

  /**
   * Page size
   */
  pageSize: number;

  /**
   * Total number of items
   */
  total: number;
}

export namespace BoxListResponse {
  export interface LinuxBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: LinuxBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace LinuxBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB.
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
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface AndroidBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: AndroidBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace AndroidBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

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
  type: 'linux' | 'android';

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
    envs: unknown;

    /**
     * Key-value pairs of labels for the box
     */
    labels: unknown;

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
  type: 'linux' | 'android';

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
    envs: unknown;

    /**
     * Key-value pairs of labels for the box
     */
    labels: unknown;

    /**
     * Memory allocated to the box in MB
     */
    memory: number;

    /**
     * Operating system configuration
     */
    os: Config.Os;

    /**
     * Storage allocated to the box in GB.
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
       * OS version string (e.g. 'ubuntu-20.04')
       */
      version: string;
    }
  }
}

export interface BoxExecuteCommandsResponse {
  /**
   * The exit code of the command
   */
  exitCode: number;

  /**
   * The standard error output of the command
   */
  stderr: string;

  /**
   * The standard output of the command
   */
  stdout: string;
}

export interface BoxRunCodeResponse {
  /**
   * The exit code of the code
   */
  exitCode: number;

  /**
   * The stderr of the code
   */
  stderr: string;

  /**
   * The stdout of the code
   */
  stdout: string;
}

export type BoxStartResponse = BoxStartResponse.LinuxBox | BoxStartResponse.AndroidBox;

export namespace BoxStartResponse {
  export interface LinuxBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: LinuxBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace LinuxBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB.
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
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface AndroidBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: AndroidBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace AndroidBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

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
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export type BoxStopResponse = BoxStopResponse.LinuxBox | BoxStopResponse.AndroidBox;

export namespace BoxStopResponse {
  export interface LinuxBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for a Linux box instance
     */
    config: LinuxBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace LinuxBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

      /**
       * Memory allocated to the box in MB
       */
      memory: number;

      /**
       * Operating system configuration
       */
      os: Config.Os;

      /**
       * Storage allocated to the box in GB.
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
         * OS version string (e.g. 'ubuntu-20.04')
         */
        version: string;
      }
    }
  }

  export interface AndroidBox {
    /**
     * Unique identifier for the box
     */
    id: string;

    /**
     * Configuration for an Android box instance
     */
    config: AndroidBox.Config;

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
    type: 'linux' | 'android';

    /**
     * Last update timestamp of the box
     */
    updatedAt: string;
  }

  export namespace AndroidBox {
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
      envs: unknown;

      /**
       * Key-value pairs of labels for the box
       */
      labels: unknown;

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
         * Supported Android versions
         */
        version: '12' | '13';
      }
    }
  }
}

export type BoxCreateParams = BoxCreateParams.CreateLinuxBox | BoxCreateParams.CreateAndroidBox;

export declare namespace BoxCreateParams {
  export interface CreateLinuxBox {
    /**
     * Box type is Linux
     */
    type: 'linux' | 'android';

    /**
     * Configuration for a Linux box instance
     */
    config?: CreateLinuxBox.Config;
  }

  export namespace CreateLinuxBox {
    /**
     * Configuration for a Linux box instance
     */
    export interface Config {
      /**
       * Environment variables for the box
       */
      envs?: unknown;

      /**
       * The box will be alive for the given duration (e.g. '10m')
       */
      expiresIn?: string;

      /**
       * Key-value pairs of labels for the box
       */
      labels?: unknown;
    }
  }

  export interface CreateAndroidBox {
    /**
     * Box type is Android
     */
    type: 'linux' | 'android';

    /**
     * Configuration for an Android box instance
     */
    config?: CreateAndroidBox.Config;
  }

  export namespace CreateAndroidBox {
    /**
     * Configuration for an Android box instance
     */
    export interface Config {
      /**
       * Environment variables for the box
       */
      envs?: unknown;

      /**
       * The box will be alive for the given duration (e.g. '10m')
       */
      expiresIn?: string;

      /**
       * Key-value pairs of labels for the box
       */
      labels?: unknown;
    }
  }
}

export interface BoxListParams {
  /**
   * Page number
   */
  page: number;

  /**
   * Page size
   */
  pageSize: number;
}

export interface BoxCreateAndroidParams {
  /**
   * Box type is Android
   */
  type: 'linux' | 'android';

  /**
   * Configuration for an Android box instance
   */
  config?: BoxCreateAndroidParams.Config;
}

export namespace BoxCreateAndroidParams {
  /**
   * Configuration for an Android box instance
   */
  export interface Config {
    /**
     * Environment variables for the box
     */
    envs?: unknown;

    /**
     * The box will be alive for the given duration (e.g. '10m')
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box
     */
    labels?: unknown;
  }
}

export interface BoxCreateLinuxParams {
  /**
   * Box type is Linux
   */
  type: 'linux' | 'android';

  /**
   * Configuration for a Linux box instance
   */
  config?: BoxCreateLinuxParams.Config;
}

export namespace BoxCreateLinuxParams {
  /**
   * Configuration for a Linux box instance
   */
  export interface Config {
    /**
     * Environment variables for the box
     */
    envs?: unknown;

    /**
     * The box will be alive for the given duration (e.g. '10m')
     */
    expiresIn?: string;

    /**
     * Key-value pairs of labels for the box
     */
    labels?: unknown;
  }
}

export interface BoxExecuteCommandsParams {
  /**
   * The command to run
   */
  commands: Array<string>;

  /**
   * The environment variables to run the command
   */
  envs?: unknown;

  /**
   * The timeout of the command. e.g. '30s'
   */
  timeout?: string;

  /**
   * The working directory of the command
   */
  workingDir?: string;
}

export interface BoxRunCodeParams {
  /**
   * The code to run
   */
  code: string;

  /**
   * The type of the code.
   */
  type: 'bash' | 'python3' | 'typescript';

  /**
   * The arguments to run the code. e.g. ["-h"]
   */
  argv?: Array<string>;

  /**
   * The environment variables to run the code
   */
  envs?: unknown;

  /**
   * The timeout of the code. e.g. "30s"
   */
  timeout?: string;

  /**
   * The working directory of the code.
   */
  workingDir?: string;
}

Boxes.Actions = Actions;

export declare namespace Boxes {
  export {
    type BoxCreateResponse as BoxCreateResponse,
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxListResponse as BoxListResponse,
    type BoxCreateAndroidResponse as BoxCreateAndroidResponse,
    type BoxCreateLinuxResponse as BoxCreateLinuxResponse,
    type BoxExecuteCommandsResponse as BoxExecuteCommandsResponse,
    type BoxRunCodeResponse as BoxRunCodeResponse,
    type BoxStartResponse as BoxStartResponse,
    type BoxStopResponse as BoxStopResponse,
    type BoxCreateParams as BoxCreateParams,
    type BoxListParams as BoxListParams,
    type BoxCreateAndroidParams as BoxCreateAndroidParams,
    type BoxCreateLinuxParams as BoxCreateLinuxParams,
    type BoxExecuteCommandsParams as BoxExecuteCommandsParams,
    type BoxRunCodeParams as BoxRunCodeParams,
  };

  export {
    Actions as Actions,
    type ActionClickResponse as ActionClickResponse,
    type ActionDragResponse as ActionDragResponse,
    type ActionKeypressResponse as ActionKeypressResponse,
    type ActionMoveResponse as ActionMoveResponse,
    type ActionScreenshotResponse as ActionScreenshotResponse,
    type ActionScrollResponse as ActionScrollResponse,
    type ActionTouchResponse as ActionTouchResponse,
    type ActionTypeResponse as ActionTypeResponse,
    type ActionClickParams as ActionClickParams,
    type ActionDragParams as ActionDragParams,
    type ActionKeypressParams as ActionKeypressParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionScreenshotParams as ActionScreenshotParams,
    type ActionScrollParams as ActionScrollParams,
    type ActionTouchParams as ActionTouchParams,
    type ActionTypeParams as ActionTypeParams,
  };
}
