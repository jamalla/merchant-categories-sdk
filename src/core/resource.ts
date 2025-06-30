// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MerchantCategories } from '../client';

export abstract class APIResource {
  protected _client: MerchantCategories;

  constructor(client: MerchantCategories) {
    this._client = client;
  }
}
