# $commandInfo

## Usage

Returns the bot command info

## Parameters

| Field       | Description                                          |
| ----------- | ---------------------------------------------------- |
| commandName | The command you want to learn information about      |
| options     | parameters for information `code`, `name` (optional) |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$commandInfo[command;code]]`,
});
```
