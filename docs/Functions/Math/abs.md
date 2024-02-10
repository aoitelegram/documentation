# $abs

Returns the absolute value of a number.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| number    | The number to process  |

## Example

```js
<AoiClient>.addCommand({
  name: "absolute-value",
  code: `
    $abs[-5.3]
   `,
});
```