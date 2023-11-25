# $eval

## Parameters

| Name | Type   | Description                         |
| ---- | ------ | ----------------------------------- |
| Code | String | The `aoitelegram` code to evaluate. |

## Usage

This function evaluates the given `aoitelegram` code, allowing you to use functions manually inside a command without creating a new command for it.

## Example

```javascript
bot.command({
  name: "eval",
  code: `
  $onlyIf[$getVar[ownerId]!=$fromId;]
  $eval[$message]
  `,
});
```
