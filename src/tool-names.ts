// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= [
  {
    "name": "pets-update",
    "description": "Update an existing pet\n\nUpdate an existing pet by Id"
  },
  {
    "name": "pets-add",
    "description": "Add a new pet to the store\n\nAdd a new pet to the store"
  },
  {
    "name": "pets-find-by-status",
    "description": "Finds Pets by status\n\nMultiple status values can be provided with comma separated strings"
  },
  {
    "name": "pets-find-by-tags",
    "description": "Finds Pets by tags\n\nMultiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing."
  },
  {
    "name": "pets-get-by-id",
    "description": "Find pet by ID\n\nReturns a single pet"
  },
  {
    "name": "pets-delete",
    "description": "Deletes a pet"
  },
  {
    "name": "pets-upload-image",
    "description": "uploads an image"
  },
  {
    "name": "stores-get-inventory",
    "description": "Returns pet inventories by status\n\nReturns a map of status codes to quantities"
  },
  {
    "name": "stores-orders-place",
    "description": "Place an order for a pet\n\nPlace a new order in the store"
  },
  {
    "name": "stores-orders-get-by-id",
    "description": "Find purchase order by ID\n\nFor valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions."
  },
  {
    "name": "store-orders-delete",
    "description": "Delete purchase order by ID\n\nFor valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors"
  },
  {
    "name": "users-create",
    "description": "Create user\n\nThis can only be done by the logged in user."
  },
  {
    "name": "users-create-with-list",
    "description": "Creates list of users with given input array\n\nCreates list of users with given input array"
  },
  {
    "name": "users-login",
    "description": "Logs user into the system"
  },
  {
    "name": "users-logout",
    "description": "Logs out current logged in user session"
  },
  {
    "name": "users-get-by-name",
    "description": "Get user by user name"
  },
  {
    "name": "users-update",
    "description": "Update user\n\nThis can only be done by the logged in user."
  },
  {
    "name": "users-delete",
    "description": "Delete user\n\nThis can only be done by the logged in user."
  }
];
