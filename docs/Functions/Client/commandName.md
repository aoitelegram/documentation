# $commandName

## Usage

Return command name

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[Usage: $commandName]`,
});
```
