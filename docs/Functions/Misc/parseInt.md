# $parseInt

This function parses a string argument or a series of arguments into an integer.

## Parameters

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| args      | One or more strings to be parsed into an int. |

## Example

```js
<AoiClient>.addCommand({
  name: "parseIntCommand",
  code: `
    $replyMessage[Result: $parseInt[42]]
   `,
});
```