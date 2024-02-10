# $callFunction

Calls the specified JavaScript function with provided arguments.

## Parameters

| Parameter | Description            |
| --------- | ---------------------- |
| name      | Name of the function   |
| ...args   | Arguments for the function |

## Example

```js
<AoiClient>.addCommand({
  name: "call",
  code: `
    $callFunction[functionName;arg1;arg2;...]
   `,
});
```