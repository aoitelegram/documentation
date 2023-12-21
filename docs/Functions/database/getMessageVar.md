# $getMessageVar

This function gets the given variable value for the current or specified message

## Parameters

| Fields    | Description                                           |
| --------- | ----------------------------------------------------- |
| Variable  | Variable name                                         |
| messageId | The message's variable value we're getting (optional) |
| table     | table for getting (optional)                          |

## Examples

```javascript
bot.command({
  name: "get",
  code: `
$getMessageVar[variable]`,
});
```
