# $variablesCount

Counts the number of variables in the database.

## Parameters

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| tables    | Optional. The name of the table to count variables. If not specified, counts variables in all tables. |

## Example

```js
<AoiClient>.addCommand({
  name: "count-variables",
  code: `
    $variablesCount[user]
   `,
});
```