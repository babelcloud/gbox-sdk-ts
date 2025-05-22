// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  click(id: string, body: ActionClickParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/click`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  drag(id: string, body: ActionDragParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/drag`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  keypress(id: string, body: ActionKeypressParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/keypress`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  move(id: string, body: ActionMoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/move`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  scroll(id: string, body: ActionScrollParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/scroll`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  touch(id: string, body: ActionTouchParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/touch`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  type(id: string, body: ActionTypeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/boxes/${id}/actions/type`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionClickParams {
  /**
   * Action type for mouse click
   */
  type: 'click';

  /**
   * X coordinate of the click
   */
  x: number;

  /**
   * Y coordinate of the click
   */
  y: number;

  /**
   * Mouse button to click
   */
  button?: 'left' | 'right' | 'middle';

  /**
   * Whether to perform a double click
   */
  double?: boolean;
}

export interface ActionDragParams {
  /**
   * Path of the drag action as a series of coordinates
   */
  path: Array<ActionDragParams.Path>;

  /**
   * Action type for drag interaction
   */
  type: 'drag';

  /**
   * Time interval between points (e.g. "50ms")
   */
  duration?: string;
}

export namespace ActionDragParams {
  /**
   * Point in the drag path
   */
  export interface Path {
    /**
     * X coordinate of a point in the drag path
     */
    x: number;

    /**
     * Y coordinate of a point in the drag path
     */
    y: number;
  }
}

export interface ActionKeypressParams {
  /**
   * Array of keys to press
   */
  keys: Array<string>;

  /**
   * Action type for keyboard key press
   */
  type: 'keypress';
}

export interface ActionMoveParams {
  /**
   * Action type for cursor movement
   */
  type: 'move';

  /**
   * X coordinate to move to
   */
  x: number;

  /**
   * Y coordinate to move to
   */
  y: number;
}

export interface ActionScrollParams {
  /**
   * Horizontal scroll amount
   */
  scrollX: number;

  /**
   * Vertical scroll amount
   */
  scrollY: number;

  /**
   * Action type for scroll interaction
   */
  type: 'scroll';

  /**
   * X coordinate of the scroll position
   */
  x: number;

  /**
   * Y coordinate of the scroll position
   */
  y: number;
}

export interface ActionTouchParams {
  /**
   * Array of touch points and their actions
   */
  points: Array<ActionTouchParams.Point>;

  /**
   * Action type for touch interaction
   */
  type: 'touch';
}

export namespace ActionTouchParams {
  /**
   * Schema for a single touch point and its actions
   */
  export interface Point {
    /**
     * Starting position for touch
     */
    start: Point.Start;

    /**
     * Sequence of actions to perform after initial touch
     */
    actions?: Array<Point.UnionMember0 | Point.UnionMember1>;
  }

  export namespace Point {
    /**
     * Starting position for touch
     */
    export interface Start {
      /**
       * Starting X coordinate
       */
      x: number;

      /**
       * Starting Y coordinate
       */
      y: number;
    }

    /**
     * Schema for touch movement actions
     */
    export interface UnionMember0 {
      /**
       * Duration of the movement (e.g. "200ms")
       */
      duration: string;

      /**
       * Action type for touch movement
       */
      type: 'move';

      /**
       * Target X coordinate
       */
      x: number;

      /**
       * Target Y coordinate
       */
      y: number;
    }

    /**
     * Schema for touch wait actions
     */
    export interface UnionMember1 {
      /**
       * Duration to wait (e.g. "500ms")
       */
      duration: string;

      /**
       * Action type for waiting
       */
      type: 'wait';
    }
  }
}

export interface ActionTypeParams {
  /**
   * Text to type
   */
  text: string;

  /**
   * Action type for typing text
   */
  type: 'type';
}

export declare namespace Actions {
  export {
    type ActionClickParams as ActionClickParams,
    type ActionDragParams as ActionDragParams,
    type ActionKeypressParams as ActionKeypressParams,
    type ActionMoveParams as ActionMoveParams,
    type ActionScrollParams as ActionScrollParams,
    type ActionTouchParams as ActionTouchParams,
    type ActionTypeParams as ActionTypeParams,
  };
}
