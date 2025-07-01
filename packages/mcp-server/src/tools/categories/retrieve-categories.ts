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
  httpPath: '/categories/{category}',
  operationId: 'Category-Details',
};

export const tool: Tool = {
  name: 'retrieve_categories',
  description:
    'This endpoint allows you to return the complete details for a specific category by passing the `category` as a path parameter. \n\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read`- Categories Read Only\n</Accordion>',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'integer',
      },
      with: {
        type: 'array',
        description:
          'Returns the response with translations or items (or both). Takes values with separated comma or array of either items, translations or both in this case:\n`with=items` OR `with=translations` OR `with[]=items&with[]=translations` OR `with=items,translations`',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  const { category, ...body } = args as any;
  return asTextContentResult((await client.categories.retrieve(category, body)) as object);
};

export default { metadata, tool, handler };
