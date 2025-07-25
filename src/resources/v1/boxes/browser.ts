// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Browser extends APIResource {
  /**
   * This endpoint allows you to generate a pre-signed URL for accessing the Chrome
   * DevTools Protocol (CDP) of a running box. The URL is valid for a limited time
   * and can be used to interact with the box's browser environment
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.cdpURL(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  cdpURL(
    boxID: string,
    body: BrowserCdpURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.post(path`/boxes/${boxID}/browser/connect-url/cdp`, { body, ...options });
  }

  /**
   * Close a specific browser tab identified by its id. This endpoint will
   * permanently close the tab and free up the associated resources. After closing a
   * tab, the ids of subsequent tabs may change.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.closeTab(
   *   'tabId',
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  closeTab(
    tabID: string,
    params: BrowserCloseTabParams,
    options?: RequestOptions,
  ): APIPromise<BrowserCloseTabResponse> {
    const { boxId } = params;
    return this._client.delete(path`/boxes/${boxId}/browser/tabs/${tabID}`, options);
  }

  /**
   * Retrieve a comprehensive list of all currently open browser tabs in the
   * specified box. This endpoint returns detailed information about each tab
   * including its id, title, current URL, and favicon. The returned id can be used
   * for subsequent operations like navigation, closing, or updating tabs. This is
   * essential for managing multiple browser sessions and understanding the current
   * state of the browser environment.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.getTabs(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   * );
   * ```
   */
  getTabs(boxID: string, options?: RequestOptions): APIPromise<BrowserGetTabsResponse> {
    return this._client.get(path`/boxes/${boxID}/browser/tabs`, options);
  }

  /**
   * Create and open a new browser tab with the specified URL. This endpoint will
   * navigate to the provided URL and return the new tab's information including its
   * assigned id, loaded title, final URL (after any redirects), and favicon. The
   * returned tab id can be used for future operations on this specific tab. The
   * browser will attempt to load the page and will wait for the DOM content to be
   * loaded before returning the response. If the URL is invalid or unreachable, an
   * error will be returned.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.openTab(
   *   'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *   { url: 'https://www.google.com' },
   * );
   * ```
   */
  openTab(
    boxID: string,
    body: BrowserOpenTabParams,
    options?: RequestOptions,
  ): APIPromise<BrowserOpenTabResponse> {
    return this._client.post(path`/boxes/${boxID}/browser/tabs`, { body, ...options });
  }

  /**
   * Switch to a specific browser tab by bringing it to the foreground (making it the
   * active/frontmost tab). This operation sets the specified tab as the currently
   * active tab without changing its URL or content. The tab will receive focus and
   * become visible to the user. This is useful for managing multiple browser
   * sessions and controlling which tab is currently in focus.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.switchTab(
   *   'tabId',
   *   { boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d' },
   * );
   * ```
   */
  switchTab(
    tabID: string,
    params: BrowserSwitchTabParams,
    options?: RequestOptions,
  ): APIPromise<BrowserSwitchTabResponse> {
    const { boxId } = params;
    return this._client.post(path`/boxes/${boxId}/browser/tabs/${tabID}/switch`, options);
  }

  /**
   * Navigate an existing browser tab to a new URL. This endpoint updates the
   * specified tab by navigating it to the provided URL and returns the updated tab
   * information. The browser will wait for the DOM content to be loaded before
   * returning the response. If the navigation fails due to an invalid URL or network
   * issues, an error will be returned. The updated tab information will include the
   * new title, final URL (after any redirects), and favicon from the new page.
   *
   * @example
   * ```ts
   * const response = await client.v1.boxes.browser.updateTab(
   *   'tabId',
   *   {
   *     boxId: 'c9bdc193-b54b-4ddb-a035-5ac0c598d32d',
   *     url: 'https://www.google.com',
   *   },
   * );
   * ```
   */
  updateTab(
    tabID: string,
    params: BrowserUpdateTabParams,
    options?: RequestOptions,
  ): APIPromise<BrowserUpdateTabResponse> {
    const { boxId, ...body } = params;
    return this._client.put(path`/boxes/${boxId}/browser/tabs/${tabID}`, { body, ...options });
  }
}

export type BrowserCdpURLResponse = string;

export interface BrowserCloseTabResponse {
  message?: string;
}

/**
 * List tabs
 */
export interface BrowserGetTabsResponse {
  /**
   * The tabs
   */
  data: Array<BrowserGetTabsResponse.Data>;
}

export namespace BrowserGetTabsResponse {
  /**
   * Browser tab
   */
  export interface Data {
    /**
     * The tab id
     */
    id: string;

    /**
     * Whether the tab is the current active (frontmost) tab
     */
    active: boolean;

    /**
     * The tab favicon
     */
    favicon: string;

    /**
     * Whether the tab is currently in a loading state.
     *
     * The value is **true** while the browser is still navigating to the target URL or
     * fetching sub-resources (i.e. `document.readyState` is not "complete"). It
     * typically switches to **false** once the `load` event fires and all major
     * network activity has settled.
     */
    loading: boolean;

    /**
     * The tab title
     */
    title: string;

    /**
     * The tab url
     */
    url: string;
  }
}

/**
 * Browser tab
 */
export interface BrowserOpenTabResponse {
  /**
   * The tab id
   */
  id: string;

  /**
   * Whether the tab is the current active (frontmost) tab
   */
  active: boolean;

  /**
   * The tab favicon
   */
  favicon: string;

  /**
   * Whether the tab is currently in a loading state.
   *
   * The value is **true** while the browser is still navigating to the target URL or
   * fetching sub-resources (i.e. `document.readyState` is not "complete"). It
   * typically switches to **false** once the `load` event fires and all major
   * network activity has settled.
   */
  loading: boolean;

  /**
   * The tab title
   */
  title: string;

  /**
   * The tab url
   */
  url: string;
}

/**
 * Browser tab
 */
export interface BrowserSwitchTabResponse {
  /**
   * The tab id
   */
  id: string;

  /**
   * Whether the tab is the current active (frontmost) tab
   */
  active: boolean;

  /**
   * The tab favicon
   */
  favicon: string;

  /**
   * Whether the tab is currently in a loading state.
   *
   * The value is **true** while the browser is still navigating to the target URL or
   * fetching sub-resources (i.e. `document.readyState` is not "complete"). It
   * typically switches to **false** once the `load` event fires and all major
   * network activity has settled.
   */
  loading: boolean;

  /**
   * The tab title
   */
  title: string;

  /**
   * The tab url
   */
  url: string;
}

/**
 * Browser tab
 */
export interface BrowserUpdateTabResponse {
  /**
   * The tab id
   */
  id: string;

  /**
   * Whether the tab is the current active (frontmost) tab
   */
  active: boolean;

  /**
   * The tab favicon
   */
  favicon: string;

  /**
   * Whether the tab is currently in a loading state.
   *
   * The value is **true** while the browser is still navigating to the target URL or
   * fetching sub-resources (i.e. `document.readyState` is not "complete"). It
   * typically switches to **false** once the `load` event fires and all major
   * network activity has settled.
   */
  loading: boolean;

  /**
   * The tab title
   */
  title: string;

  /**
   * The tab url
   */
  url: string;
}

export interface BrowserCdpURLParams {
  /**
   * The CDP url will be alive for the given duration
   *
   * Supported time units: ms (milliseconds), s (seconds), m (minutes), h (hours)
   * Example formats: "500ms", "30s", "5m", "1h" Default: 120m
   */
  expiresIn?: string;
}

export interface BrowserCloseTabParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface BrowserOpenTabParams {
  /**
   * The tab url
   */
  url: string;
}

export interface BrowserSwitchTabParams {
  /**
   * Box ID
   */
  boxId: string;
}

export interface BrowserUpdateTabParams {
  /**
   * Path param: Box ID
   */
  boxId: string;

  /**
   * Body param: The tab new url
   */
  url: string;
}

export declare namespace Browser {
  export {
    type BrowserCdpURLResponse as BrowserCdpURLResponse,
    type BrowserCloseTabResponse as BrowserCloseTabResponse,
    type BrowserGetTabsResponse as BrowserGetTabsResponse,
    type BrowserOpenTabResponse as BrowserOpenTabResponse,
    type BrowserSwitchTabResponse as BrowserSwitchTabResponse,
    type BrowserUpdateTabResponse as BrowserUpdateTabResponse,
    type BrowserCdpURLParams as BrowserCdpURLParams,
    type BrowserCloseTabParams as BrowserCloseTabParams,
    type BrowserOpenTabParams as BrowserOpenTabParams,
    type BrowserSwitchTabParams as BrowserSwitchTabParams,
    type BrowserUpdateTabParams as BrowserUpdateTabParams,
  };
}
