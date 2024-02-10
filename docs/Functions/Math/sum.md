# $sum

Returns will sum-up two given number.

## Parameters

| Parameter | Description |
| --------- | ----------- |
| number    | number      |
| number    | number      |

## Example

```js
<AoiClient>.addCommand({
  name: "math",
  code: `
    $replyMessage[$sum[78;89]]
   `,
});
```
