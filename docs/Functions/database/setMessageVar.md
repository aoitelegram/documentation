# $setMessageVar

This function sets a value to the current/specified messageId

## Parameters

| Parameter | Description                    |
| --------- | ------------------------------ |
| name      | Name of the variable           |
| value     | Value for variable             |
| messageId | user if for setting (optional) |
| table     | Table (optional)               |

```javascript
bot.command({
  name: "setMessageVar",
  code: `$setMessageVar[messageCount;12]`,
});
```
