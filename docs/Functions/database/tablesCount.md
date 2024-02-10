# $tablesCount

Counts the number of tables in the database.

## Parameters

This function does not take any parameters.

## Example

```js
<AoiClient>.addCommand({
  name: "count-tables",
  code: `
    $tablesCount
   `,
});
```