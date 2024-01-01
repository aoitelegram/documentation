# $parseFloat

This function parses a string argument or a series of arguments into a floating-point number.

## Parameters

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| args      | One or more strings to be parsed into a float.   |

## Example

```js
client.command({
  name: "parseFloatCommand",
  code: `
    $replyMessage[Result: $parseFloat[3.14]]
   `,
});
```