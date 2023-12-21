# $math

Calculates a basic mathematical expression.

## Parameters

| Parameter  | Description             |
| ---------- | ----------------------- |
| expression | Mathematical expression |

## Example

```js
client.command({
  name: "math",
  code: `
    $replyMessage[Math 1 + 1 = $math[1 + 1]!]
   `,
});
```
