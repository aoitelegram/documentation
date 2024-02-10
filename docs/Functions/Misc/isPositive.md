# $isPositive

Checks if the specified number is positive.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| number    | The number to check     |

## Example

```js
<AoiClient>.addCommand({
  name: "check-positive",
  code: `
    $isPositive[number]
   `,
});
```