# $readyTimestamp

Retrieves the timestamp when the bot became ready.

## Parameters

This function does not require any parameters.

## Example

```js
<AoiClient>.addCommand({
  name: "get-ready-timestamp",
  code: `
    $readyTimestamp
   `,
});
```