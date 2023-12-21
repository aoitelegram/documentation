# $sub

Returns will substract two given number.

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
    $replyMessage[$sub[6;89]]
   `,
});
```
