# $setUserVar

This function sets a value to the current/specified userId

## Parameters

| Parameter | Description                   |
| --------- | ----------------------------- |
| name      | Name of the variable          |
| value     | Value for variable            |
| userId    | userid for setting (optional) |
| table     | Table (optional)              |

```javascript
bot.command({
  name: "setUserVar",
  code: `$setUserVar[messageCount;12]`,
});
```
