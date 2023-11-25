# $setVar

## Parameters

| Field   | Type   | Description                                          | Required |
| ------- | ------ | ---------------------------------------------------- | :------: |
| nameVar | string | The name of the variable to set.                     |   true   |
| content | string | The content to set for the variable.                 |   true   |
| table   | string | The name of the table (optional). Default is "main". |  false   |

## Usage

This function allows you to set the value of a variable in a specified table. If the `table` parameter is not provided, the default table "main" is used. If the specified variable or table does not exist, an error will be raised.

### Example

```javascript
client.command({
  name: "setVar",
  code: `
  $setVar[userCount;100;stats]
  `,
});
```

In this example, the function is used to set the variable named "userCount" with a value of "100" in the "stats" table. If the table or variable doesn't exist, appropriate error handling is required.
