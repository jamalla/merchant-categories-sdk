# Merchant Categories TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export MERCHANT_CATEGORIES_API_KEY="My API Key"
npx -y merchant-categories-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "merchant_categories_api": {
      "command": "npx",
      "args": ["-y", "merchant-categories-mcp", "--client=claude", "--tools=all"],
      "env": {
        "MERCHANT_CATEGORIES_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "merchant-categories-mcp/server";

// import a specific tool
import createCategories from "merchant-categories-mcp/tools/categories/create-categories";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createCategories, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `categories`:

- `create_categories` (`write`): This endpoint allows you to create a new category and return the category ID and its details.

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read_write`- Categories Read & Write
  </Accordion>

- `retrieve_categories` (`read`): This endpoint allows you to return the complete details for a specific category by passing the `category` as a path parameter.

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read`- Categories Read Only
  </Accordion>

- `update_categories` (`write`): This endpoint allows you to update category details by passing the `category` as a path parameter.

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read_write`- Categories Read & Write
  </Accordion>

- `list_categories` (`read`): This endpoint allows you to list all categories related to your store directly from this endpoint. Also, it allows you to filter them using a keyword, the endpoint would return any category which name matches this keyword.

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read`- Categories Read Only
  </Accordion>

- `delete_categories` (`write`): This endpoint allows you to delete a specific category by passing the `category` as a path parameter.

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read_write`- Categories Read & Write
  </Accordion>

- `list_children_categories` (`read`): This endpoint allows you to return specific category children by passing the `category` as a path parameter.

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read`- Categories Read Only
  </Accordion>

- `list_products_categories` (`read`): This endpoint allows you to list all the products and their sort order that are related in a specified category by passing the `id` as a path parameter..

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read` - Categories Read Only
  </Accordion>

- `search_categories` (`read`): This endpoint allows you to search through existing categories using keywords _(a.k.a name of the category)_ as well as an array of Category IDs

  <Accordion title="Scopes" defaultOpen={true} icon="lucide-key-round">
  `categories.read` - Categories Read Only
  </Accordion>
