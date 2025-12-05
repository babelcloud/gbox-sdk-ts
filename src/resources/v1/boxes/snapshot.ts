// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
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
   * List all snapshots of current orginazation.
   *
   * @example
   * ```ts
   * const snapshots = await client.v1.boxes.snapshot.list();
   * ```
   */
  list(
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get('/snapshots', { query, ...options });
  }

  /**
   * Get a snapshot with specified name
   *
   * @example
   * ```ts
   * const snapshot = await client.v1.boxes.snapshot.get(
   *   'snapshotName',
   * );
   * ```
   */
  get(snapshotName: string, options?: RequestOptions): APIPromise<SnapshotGetResponse> {
    return this._client.get(path`/snapshots/${snapshotName}`, options);
  }

  /**
   * Remove a snapshot of specified id.
   *
   * @example
   * ```ts
   * await client.v1.boxes.snapshot.remove('snapshotName');
   * ```
   */
  remove(snapshotName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/snapshots/${snapshotName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

  /**
   * The status of the snapshot
   */
  status: 'Pending' | 'Available' | 'Error';
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

    /**
     * The status of the snapshot
     */
    status: 'Pending' | 'Available' | 'Error';
  }
}

/**
 * Snapshot configuration
 */
export interface SnapshotGetResponse {
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

  /**
   * The status of the snapshot
   */
  status: 'Pending' | 'Available' | 'Error';
}

export interface SnapshotCreateParams {
  /**
   * Name of the snapshot. This name must be unique within the organization.
   */
  name: string;
}

export interface SnapshotListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  pageSize?: number;
}

export declare namespace Snapshot {
  export {
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotGetResponse as SnapshotGetResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotListParams as SnapshotListParams,
  };
}
