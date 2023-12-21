# $sum

Returns will sum-up two given number.

## Parameters

| Parameter | Description |
| --------- | ----------- |
| number    | number      |
| number    | number      |

## Example

```js
client.command({
  name: "math",
  code: `
    $replyMessage[$sum[78;89]]
   `,
});
```
