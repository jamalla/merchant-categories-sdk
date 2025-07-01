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
  httpPath: '/categories/search',
  operationId: 'categories-search',
};

export const tool: Tool = {
  name: 'search_categories',
  description:
    'This endpoint allows you to search through existing categories using keywords *(a.k.a name of the category)* as well as an array of Category IDs\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read` - Categories Read Only\n</Accordion>\n',
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'string',
        description:
          'Unique identifiers assigned to a Category. List of Category IDs can be found [here](https://docs.salla.dev/api-5394207)\n:::check[]\n\nYou can use the query parameter like this example.: <CopyToClipboard>`?ids[]=451690116&ids[]=451690117`</CopyToClipboard>\n\n:::',
      },
      keyword: {
        type: 'string',
        description:
          'Name of the category. Get a list of category names from [here](https://docs.salla.dev/api-5394207)',
      },
    },
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.categories.search(body)) as object);
};

export default { metadata, tool, handler };
