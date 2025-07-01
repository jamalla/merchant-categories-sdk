// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'merchant-categories-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MerchantCategories from 'merchant-categories';

export const metadata: Metadata = {
  resource: 'categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/categories/{id}/products',
  operationId: 'show-category-products',
};

export const tool: Tool = {
  name: 'list_products_categories',
  description:
    'This endpoint allows you to list all the products and their sort order that are related in a specified category by passing the `id` as a path parameter..\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read` - Categories Read Only\n</Accordion>',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult((await client.categories.listProducts(id)) as object);
};

export default { metadata, tool, handler };
