// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'merchant-categories-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to return specific category children by passing the `category` as a path parameter. \n\n\n<Accordion title=\"Scopes\" defaultOpen={true} icon=\"lucide-key-round\">\n`categories.read`- Categories Read Only\n</Accordion>\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer',\n            description: 'Category ID'\n          },\n          items: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          name: {\n            type: 'string',\n            description: 'Category Name'\n          },\n          sort_order: {\n            type: 'integer',\n            description: 'Category Sort Order'\n          },\n          urls: {\n            type: 'object',\n            properties: {\n              admin: {\n                type: 'string',\n                description: 'Category Admin URL'\n              },\n              customer: {\n                type: 'string',\n                description: 'Category Customer URL'\n              }\n            },\n            required: [              'admin',\n              'customer'\n            ]\n          }\n        },\n        required: []\n      }\n    },\n    pagination: {\n      type: 'object'\n    },\n    status: {\n      type: 'integer',\n      description: 'Response Status Code'\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether or not the response is successful '\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.categories.listChildren(category, body)));
};

export default { metadata, tool, handler };
