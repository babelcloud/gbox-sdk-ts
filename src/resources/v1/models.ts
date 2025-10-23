// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Models extends APIResource {
  /**
   * Generate coordinates for a model
   *
   * @example
   * ```ts
   * const response = await client.v1.models.call({
   *   action: {
   *     target: 'the VSCode app icon on the bottom dock',
   *     type: 'click',
   *   },
   *   screenshot:
   *     'https://gru-activate2-public-assets.s3.us-west-2.amazonaws.com/jessica/screenshot-1759332945616-pu0ovj.png',
   * });
   * ```
   */
  call(body: ModelCallParams, options?: RequestOptions): APIPromise<ModelCallResponse> {
    return this._client.post('/model', { body, ...options });
  }
}

/**
 * Model response data structure
 */
export interface ModelCallResponse {
  /**
   * Unique ID of this request, can be used for issue reporting and feedback
   */
  id: string;

  /**
   * Model response data
   */
  response:
    | ModelCallResponse.ModelClickResponseData
    | ModelCallResponse.ModelDragResponseData
    | ModelCallResponse.ModelScrollResponseData;
}

export namespace ModelCallResponse {
  /**
   * Model click response data structure
   */
  export interface ModelClickResponseData {
    /**
     * Single click result with coordinates
     */
    coordinates: ModelClickResponseData.Coordinates;

    /**
     * Action type
     */
    type: 'click' | 'drag' | 'scroll';
  }

  export namespace ModelClickResponseData {
    /**
     * Single click result with coordinates
     */
    export interface Coordinates {
      /**
       * X coordinate. Returns -1 if no valid target is found.
       */
      x: number;

      /**
       * Y coordinate. Returns -1 if no valid target is found.
       */
      y: number;
    }
  }

  /**
   * Drag response data structure
   */
  export interface ModelDragResponseData {
    /**
     * Single drag result with target and destination coordinates
     */
    coordinates: ModelDragResponseData.Coordinates;

    /**
     * Action type
     */
    type: 'click' | 'drag' | 'scroll';
  }

  export namespace ModelDragResponseData {
    /**
     * Single drag result with target and destination coordinates
     */
    export interface Coordinates {
      /**
       * X and Y coordinates. Returns -1, -1 if no valid target is found.
       */
      destination: Coordinates.Destination;

      /**
       * X and Y coordinates. Returns -1, -1 if no valid target is found.
       */
      target: Coordinates.Target;
    }

    export namespace Coordinates {
      /**
       * X and Y coordinates. Returns -1, -1 if no valid target is found.
       */
      export interface Destination {
        /**
         * X coordinate. Returns -1 if no valid target is found.
         */
        x: number;

        /**
         * Y coordinate. Returns -1 if no valid target is found.
         */
        y: number;
      }

      /**
       * X and Y coordinates. Returns -1, -1 if no valid target is found.
       */
      export interface Target {
        /**
         * X coordinate. Returns -1 if no valid target is found.
         */
        x: number;

        /**
         * Y coordinate. Returns -1 if no valid target is found.
         */
        y: number;
      }
    }
  }

  /**
   * Scroll response data structure
   */
  export interface ModelScrollResponseData {
    /**
     * Single scroll result with location and direction
     */
    coordinates: ModelScrollResponseData.Coordinates;

    /**
     * Action type
     */
    type: 'click' | 'drag' | 'scroll';
  }

  export namespace ModelScrollResponseData {
    /**
     * Single scroll result with location and direction
     */
    export interface Coordinates {
      /**
       * Horizontal scroll amount
       */
      scrollX: number;

      /**
       * Vertical scroll amount
       */
      scrollY: number;

      /**
       * X coordinate
       */
      x: number;

      /**
       * Y coordinate
       */
      y: number;
    }
  }
}

export interface ModelCallParams {
  /**
   * Structured action object (click or drag)
   */
  action: ModelCallParams.ClickAction | ModelCallParams.DragAction | ModelCallParams.ScrollAction;

  /**
   * HTTP(S) URL to screenshot image
   */
  screenshot: string;

  /**
   * Model to use
   */
  model?: 'gbox-handy-1';
}

export namespace ModelCallParams {
  /**
   * Click action structure
   */
  export interface ClickAction {
    /**
     * Natural language description of what to click
     */
    target: string;

    /**
     * Action type
     */
    type: 'click' | 'drag' | 'scroll';
  }

  /**
   * Drag action structure
   */
  export interface DragAction {
    /**
     * Natural language description of ending position
     */
    destination: string;

    /**
     * Natural language description of starting position
     */
    target: string;

    /**
     * Action type
     */
    type: 'click' | 'drag' | 'scroll';
  }

  /**
   * Scroll action structure
   */
  export interface ScrollAction {
    /**
     * Scroll direction
     */
    direction: 'up' | 'down' | 'left' | 'right';

    /**
     * Natural language description of the location where the scroll should originate.
     */
    location: string;

    /**
     * Action type
     */
    type: 'click' | 'drag' | 'scroll';
  }
}

export declare namespace Models {
  export { type ModelCallResponse as ModelCallResponse, type ModelCallParams as ModelCallParams };
}
