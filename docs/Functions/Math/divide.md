# $divide

This function divides the given args

## Parameters

| Parameter | Description                      |
| --------- | -------------------------------- |
| number    | The first number we're dividing  |
| number    | The second number we're dividing |

## Example

```js
<AoiClient>.addCommand({
  name: "math",
  code: `
    $replyMessage[$divide[4;7]]
   `,
});
```
