# $round

Returns a number rounded to the nearest integer.

## Parameters

| Parameter | Description |
| --------- | ----------- |
| number    | number      |

## Example

```js
client.command({
  name: "math",
  code: `
    $replyMessage[$round[6.5]]
   `,
});
```
