// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'merchant-categories-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import MerchantCategories from 'merchant-categories';

export const metadata: Metadata = {
  resource: 'categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/categories',
  operationId: 'Create-Category',
};

export const tool: Tool = {
  name: 'create_categories',
  description:
    'This endpoint allows you to create a new category and return the category ID and its details.\n\n<Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">\n`categories.read_write`- Categories Read & Write\n</Accordion>',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: MerchantCategories, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.categories.create(body)) as object);
};

export default { metadata, tool, handler };
