# Categories

Types:

- <code><a href="./src/resources/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryRetrieveResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryUpdateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryDeleteResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListChildrenResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListProductsResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategorySearchResponse</a></code>

Methods:

- <code title="post /categories">client.categories.<a href="./src/resources/categories.ts">create</a>() -> unknown</code>
- <code title="get /categories/{category}">client.categories.<a href="./src/resources/categories.ts">retrieve</a>(category, { ...params }) -> unknown</code>
- <code title="put /categories/{category}">client.categories.<a href="./src/resources/categories.ts">update</a>(category) -> unknown</code>
- <code title="get /categories">client.categories.<a href="./src/resources/categories.ts">list</a>({ ...params }) -> unknown</code>
- <code title="delete /categories/{category}">client.categories.<a href="./src/resources/categories.ts">delete</a>(category) -> unknown</code>
- <code title="get /categories/{category}/children">client.categories.<a href="./src/resources/categories.ts">listChildren</a>(category, { ...params }) -> CategoryListChildrenResponse</code>
- <code title="get /categories/{id}/products">client.categories.<a href="./src/resources/categories.ts">listProducts</a>(id) -> unknown</code>
- <code title="get /categories/search">client.categories.<a href="./src/resources/categories.ts">search</a>({ ...params }) -> unknown</code>
