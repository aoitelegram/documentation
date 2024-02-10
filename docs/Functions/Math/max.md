# $max

Returns the largest of zero or more numbers.

## Parameters

| Parameter | Description |
| --------- | ----------- |
| ...number | Numbers     |

## Example

```js
<AoiClient>.addCommand({
  name: "math",
  code: `
    $replyMessage[$max[6;7;8;0]]
   `,
});
```
