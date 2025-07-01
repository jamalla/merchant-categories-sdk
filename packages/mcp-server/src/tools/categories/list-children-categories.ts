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
  httpPath: '/categories/{category}/children',
  operationId: 'Category-Children',
};

export const tool: Tool = {
  name: 'list_children_categories',
  description:
    'This endpoint allows you to return specific category children by passing the `category` as a path parameter. \n\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read`- Categories Read Only\n</Accordion>',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'integer',
      },
      page: {
        type: 'integer',
        description: 'The Pagination page number',
      },
    },
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  const { category, ...body } = args as any;
  return asTextContentResult(await client.categories.listChildren(category, body));
};

export default { metadata, tool, handler };
