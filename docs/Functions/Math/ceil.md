# $ceil

Rounds a number up to the nearest integer.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| number    | The number to round     |

## Example

```js
<AoiClient>.addCommand({
  name: "round-up",
  code: `
    $ceil[5.3]
   `,
});
```