# $trunc

Returns will remove all values after a decimal point

## Parameters

| Parameter | Description |
| --------- | ----------- |
| number    | number      |

## Example

```js
<AoiClient>.addCommand({
  name: "math",
  code: `
    $replyMessage[$trunc[79]]
   `,
});
```
