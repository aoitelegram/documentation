# $getChatVar

This function gets the given variable value for the current or specified chat

## Parameters

| Fields   | Description                                           |
| -------- | ----------------------------------------------------- |
| Variable | Variable name                                         |
| chatId   | The channel's variable value we're getting (optional) |
| table    | table for getting (optional)                          |

## Examples

```javascript
bot.command({
  name: "get",
  code: `
$getChatVar[variable]`,
});
```
