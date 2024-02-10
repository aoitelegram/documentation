# $maxRam

Retrieves the maximum RAM capacity of the system.

## Parameters

This function does not require any parameters.

## Example

```js
<AoiClient>.addCommand({
  name: "get-max-ram",
  code: `
    $maxRam
   `,
});
```