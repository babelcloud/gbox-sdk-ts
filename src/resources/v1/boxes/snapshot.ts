// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Snapshot extends APIResource {
  /**
   * Create a snapshot of a running box. This snapshot will be saved and can be used
   * to restore the box to the state it was in at the time the snapshot was created.
   *
   * @example
   * ```ts
   * const snapshot = await client.v1.boxes.snapshot.create(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { name: 'my-snapshot-1' },
   * );
   * ```
   */
  create(
    boxID: string,
    body: SnapshotCreateParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotCreateResponse> {
    return this._client.post(path`/snapshots/${boxID}`, { body, ...options });
  }

  /**
   * List all snapshots for a given box.
   *
   * @example
   * ```ts
   * const snapshots = await client.v1.boxes.snapshot.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SnapshotListResponse> {
    return this._client.get('/snapshots', options);
  }
}

/**
 * Snapshot configuration
 */
export interface SnapshotCreateResponse {
  /**
   * Unique identifier for the snapshot
   */
  id: string;

  /**
   * The type of the box that the snapshot is taken from
   */
  boxType: 'linux' | 'android';

  /**
   * Name of the snapshot. This name must be unique within the organization.
   */
  name: string;

  /**
   * The provider type of the snapshot
   */
  providerType: 'vm';
}

/**
 * Response containing paginated list of snapshots
 */
export interface SnapshotListResponse {
  /**
   * List of snapshots
   */
  data: Array<SnapshotListResponse.Data>;

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

export namespace SnapshotListResponse {
  /**
   * Snapshot configuration
   */
  export interface Data {
    /**
     * Unique identifier for the snapshot
     */
    id: string;

    /**
     * The type of the box that the snapshot is taken from
     */
    boxType: 'linux' | 'android';

    /**
     * Name of the snapshot. This name must be unique within the organization.
     */
    name: string;

    /**
     * The provider type of the snapshot
     */
    providerType: 'vm';
  }
}

export interface SnapshotCreateParams {
  /**
   * Name of the snapshot. This name must be unique within the organization.
   */
  name: string;
}

export declare namespace Snapshot {
  export {
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
  };
}
