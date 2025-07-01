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
  httpPath: '/categories',
  operationId: 'List-Categories',
};

export const tool: Tool = {
  name: 'list_categories',
  description:
    'This endpoint allows you to list all categories related to your store directly from this endpoint. Also, it allows you to filter them using a keyword, the endpoint would return any category which name matches this keyword.\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read`- Categories Read Only\n</Accordion>',
  inputSchema: {
    type: 'object',
    properties: {
      keyword: {
        type: 'string',
        description: 'A keyword to filter categories by a specific name.',
      },
      page: {
        type: 'integer',
        description: 'The Pagination page number',
      },
      status: {
        type: 'string',
        description: 'The status of the category, whether or not it is `active` or `hidden`',
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
  const body = args as any;
  return asTextContentResult((await client.categories.list(body)) as object);
};

export default { metadata, tool, handler };
