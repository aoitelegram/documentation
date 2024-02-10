# $toFixed

Returns formats a number using fixed point notation.

## Parameters

| Parameter | Description                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| number    | number                                                                                                                                                                                                                   |
| digits    | Optional parameter. Number of digits after the decimal point; can be a value between 0 and 20, inclusive, although implementations may support a larger range of values. If the argument is omitted, it is treated as 0. |

## Example

```js
<AoiClient>.addCommand({
  name: "math",
  code: `
    $replyMessage[$toFixed[67.79856;2]]
   `,
});
```
