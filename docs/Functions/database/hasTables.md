# $hasTables

Checks if a specific table exists in the database.

## Parameters

| Parameter | Description                             |
| --------- | --------------------------------------- |
| table     | The name of the table to check          |

## Example

```js
<AoiClient>.addCommand({
  name: "check-table-existence",
  code: `
    $hasTables[users]
   `,
});
```