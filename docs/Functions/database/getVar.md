# $getVar

## Parameters

| Field   | Type   | Description                                          | Required |
| ------- | ------ | ---------------------------------------------------- | :------: |
| nameVar | string | The name of the variable to retrieve.                |   true   |
| table   | string | The name of the table (optional). Default is "main". |  false   |

## Usage

This function allows you to retrieve the value of a variable from a specified table. If the `table` parameter is not provided, the default table "main" is used. If the specified variable or table does not exist, an error will be raised.

### Example

```javascript
client.command({
  name: "getVar",
  code: `
  $getVar[userCount;stats]
  `,
});
```

In this example, the function is used to retrieve a variable named "userCount" from the "stats" table. If the table or variable doesn't exist, appropriate error handling is required.
