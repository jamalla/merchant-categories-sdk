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
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nThis endpoint allows you to search through existing categories using keywords *(a.k.a name of the category)* as well as an array of Category IDs\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read` - Categories Read Only\n</Accordion>\n\n\n# Response Schema\n```json\n{\n  type: \'object\'\n}\n```',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.categories.search(body)) as object);
};

export default { metadata, tool, handler };
