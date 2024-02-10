# $executionTime

Measures the execution time of the command.

## Parameters

This function does not require any parameters.

## Example

```js
<AoiClient>.addCommand({
  name: "measure-time",
  code: `
    $executionTime
   `,
});
```