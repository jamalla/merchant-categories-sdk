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
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nThis endpoint allows you to return the complete details for a specific category by passing the `category` as a path parameter. \n\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read`- Categories Read Only\n</Accordion>\n\n# Response Schema\n```json\n{\n  type: \'object\'\n}\n```',
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
  const { category, ...body } = args as any;
  return asTextContentResult((await client.categories.retrieve(category, body)) as object);
};

export default { metadata, tool, handler };
