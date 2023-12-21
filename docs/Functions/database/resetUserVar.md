# $resetUserVar

This function resets the variable to default value for the all chat users

## Parameters

| Parameter | Description                      |
| --------- | -------------------------------- |
| name      | Name of the variable             |
| chatId    | chat resets for users (optional) |
| table     | Table (optional)                 |

## Examples

```javascript
bot.command({
  name: "resetuservar",
  code: `$resetUserVar[serverxp]`,
});
```
