# $min

Returns the smallest of zero or more numbers.

## Parameters

| Parameter | Description |
| --------- | ----------- |
| ...number | Numbers     |

## Example

```js
client.command({
  name: "math",
  code: `
    $replyMessage[$min[5;7;9;2;0]]
   `,
});
```
