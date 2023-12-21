# $resetVar

This function resets the variable to default value for the all var

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| name      | Name of the variable |
| table     | Table (optional)     |

## Examples

```javascript
bot.command({
  name: "resetvar",
  code: `Resetted server xp
$resetVar[serverxp]`,
});
```
