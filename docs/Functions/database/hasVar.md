# $hasVar

Returns a boolean value indicating whether the specified variable exists or not.

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| name      | Name of the variable |
| table     | Table (default main) |

## Example

```js
<AoiClient>.addCommand({
  name: "has",
  code: `
    $print[$hasVar[var]]
   `,
});
```
