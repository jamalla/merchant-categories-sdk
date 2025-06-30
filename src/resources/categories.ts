// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Categories extends APIResource {
  /**
   * This endpoint allows you to create a new category and return the category ID and
   * its details.
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read_write`- Categories Read & Write
   * </Accordion>
   *
   * @example
   * ```ts
   * const category = await client.categories.create();
   * ```
   */
  create(body?: CategoryCreateParams | null | undefined, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/categories', { body, ...options });
  }

  /**
   * This endpoint allows you to return the complete details for a specific category
   * by passing the `category` as a path parameter.
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read`- Categories Read Only
   * </Accordion>
   *
   * @example
   * ```ts
   * const category = await client.categories.retrieve(0);
   * ```
   */
  retrieve(
    category: number,
    query: CategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/categories/${category}`, { query, ...options });
  }

  /**
   * This endpoint allows you to update category details by passing the `category` as
   * a path parameter.
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read_write`- Categories Read & Write
   * </Accordion>
   *
   * @example
   * ```ts
   * const category = await client.categories.update(0);
   * ```
   */
  update(
    category: number,
    body?: CategoryUpdateParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.put(path`/categories/${category}`, { body, ...options });
  }

  /**
   * This endpoint allows you to list all categories related to your store directly
   * from this endpoint. Also, it allows you to filter them using a keyword, the
   * endpoint would return any category which name matches this keyword.
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read`- Categories Read Only
   * </Accordion>
   *
   * @example
   * ```ts
   * const categories = await client.categories.list();
   * ```
   */
  list(query: CategoryListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/categories', { query, ...options });
  }

  /**
   * This endpoint allows you to delete a specific category by passing the `category`
   * as a path parameter.
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read_write`- Categories Read & Write
   * </Accordion>
   *
   * @example
   * ```ts
   * const category = await client.categories.delete(0);
   * ```
   */
  delete(category: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/categories/${category}`, options);
  }

  /**
   * This endpoint allows you to return specific category children by passing the
   * `category` as a path parameter.
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read`- Categories Read Only
   * </Accordion>
   *
   * @example
   * ```ts
   * const response = await client.categories.listChildren(0);
   * ```
   */
  listChildren(
    category: number,
    query: CategoryListChildrenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListChildrenResponse> {
    return this._client.get(path`/categories/${category}/children`, { query, ...options });
  }

  /**
   * This endpoint allows you to list all the products and their sort order that are
   * related in a specified category by passing the `id` as a path parameter..
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read` - Categories Read Only
   * </Accordion>
   *
   * @example
   * ```ts
   * const response = await client.categories.listProducts(0);
   * ```
   */
  listProducts(id: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/categories/${id}/products`, options);
  }

  /**
   * This endpoint allows you to search through existing categories using keywords
   * _(a.k.a name of the category)_ as well as an array of Category IDs
   *
   * <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
   * `categories.read` - Categories Read Only
   * </Accordion>
   *
   * @example
   * ```ts
   * const response = await client.categories.search();
   * ```
   */
  search(query: CategorySearchParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/categories/search', { query, ...options });
  }
}

export type CategoryCreateResponse = unknown;

export type CategoryRetrieveResponse = unknown;

export type CategoryUpdateResponse = unknown;

export type CategoryListResponse = unknown;

export type CategoryDeleteResponse = unknown;

export interface CategoryListChildrenResponse {
  data?: Array<CategoryListChildrenResponse.Data>;

  pagination?: unknown;

  /**
   * Response Status Code
   */
  status?: number;

  /**
   * Whether or not the response is successful
   */
  success?: boolean;
}

export namespace CategoryListChildrenResponse {
  export interface Data {
    /**
     * Category ID
     */
    id?: number;

    items?: Array<string>;

    /**
     * Category Name
     */
    name?: string;

    /**
     * Category Sort Order
     */
    sort_order?: number;

    urls?: Data.URLs;
  }

  export namespace Data {
    export interface URLs {
      /**
       * Category Admin URL
       */
      admin: string;

      /**
       * Category Customer URL
       */
      customer: string;
    }
  }
}

export type CategoryListProductsResponse = unknown;

export type CategorySearchResponse = unknown;

export interface CategoryCreateParams {}

export interface CategoryRetrieveParams {
  /**
   * Returns the response with translations or items (or both). Takes values with
   * separated comma or array of either items, translations or both in this case:
   * `with=items` OR `with=translations` OR `with[]=items&with[]=translations` OR
   * `with=items,translations`
   */
  with?: Array<string>;
}

export interface CategoryUpdateParams {}

export interface CategoryListParams {
  /**
   * A keyword to filter categories by a specific name.
   */
  keyword?: string;

  /**
   * The Pagination page number
   */
  page?: number;

  /**
   * The status of the category, whether or not it is `active` or `hidden`
   */
  status?: string;

  /**
   * Returns the response with translations or items (or both). Takes values with
   * separated comma or array of either items, translations or both in this case:
   * `with=items` OR `with=translations` OR `with[]=items&with[]=translations` OR
   * `with=items,translations`
   */
  with?: Array<string>;
}

export interface CategoryListChildrenParams {
  /**
   * The Pagination page number
   */
  page?: number;
}

export interface CategorySearchParams {
  /**
   * Unique identifiers assigned to a Category. List of Category IDs can be found
   * [here](https://docs.salla.dev/api-5394207) :::check[]
   *
   * You can use the query parameter like this example.:
   * <CopyToClipboard>`?ids[]=451690116&ids[]=451690117`</CopyToClipboard>
   *
   * :::
   */
  ids?: string;

  /**
   * Name of the category. Get a list of category names from
   * [here](https://docs.salla.dev/api-5394207)
   */
  keyword?: string;
}

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryRetrieveResponse as CategoryRetrieveResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryListChildrenResponse as CategoryListChildrenResponse,
    type CategoryListProductsResponse as CategoryListProductsResponse,
    type CategorySearchResponse as CategorySearchResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryRetrieveParams as CategoryRetrieveParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryListChildrenParams as CategoryListChildrenParams,
    type CategorySearchParams as CategorySearchParams,
  };
}
