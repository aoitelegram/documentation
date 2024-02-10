# $round

Returns a number rounded to the nearest integer.

## Parameters

| Parameter | Description |
| --------- | ----------- |
| number    | number      |

## Example

```js
<AoiClient>.addCommand({
  name: "math",
  code: `
    $replyMessage[$round[6.5]]
   `,
});
```
