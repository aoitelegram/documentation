# $isNegative

Checks if the specified number is negative.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| number    | The number to check     |

## Example

```js
<AoiClient>.addCommand({
  name: "check-negative",
  code: `
    $isNegative[number]
   `,
});
```