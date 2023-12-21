# $resetChatVar

This function resets the variable to default value for the all chat

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| name      | Name of the variable |
| table     | Table (optional)     |

## Examples

```javascript
bot.command({
  name: "resetchatvar",
  code: `Resetted server xp
$resetChatVar[serverxp]`,
});
```
