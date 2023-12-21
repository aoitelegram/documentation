# $setChatVar

This function sets a value to the current/specified chat

## Parameters

| Parameter | Description                    |
| --------- | ------------------------------ |
| name      | Name of the variable           |
| value     | Value for variable             |
| chatId    | chat if for setting (optional) |
| table     | Table (optional)               |

```javascript
bot.command({
  name: "setChatVar",
  code: `$setChatVar[messageCount;12]`,
});
```
