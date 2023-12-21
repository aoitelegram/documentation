# $getUserVar

This function gets the given variable value for the current or specified user

## Parameters

| Fields   | Description                                        |
| -------- | -------------------------------------------------- |
| Variable | Variable name                                      |
| userId   | The user's variable value we're getting (optional) |
| table    | table for getting (optional)                       |

## Examples

```javascript
bot.command({
  name: "get",
  code: `
$getUserVar[variable]`,
});
```
