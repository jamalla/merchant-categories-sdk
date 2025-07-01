// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'merchant-categories-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MerchantCategories from 'merchant-categories';

export const metadata: Metadata = {
  resource: 'categories',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/categories/{category}',
  operationId: 'Update-Category',
};

export const tool: Tool = {
  name: 'update_categories',
  description:
    'This endpoint allows you to update category details by passing the `category` as a path parameter. \n\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read_write`- Categories Read & Write\n</Accordion>',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  const { category, ...body } = args as any;
  return asTextContentResult((await client.categories.update(category, body)) as object);
};

export default { metadata, tool, handler };
