# $clientSupportsInlineQueries

## Usage

if the bot supports inline queries

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$clientSupportsInlineQueries]`,
});
```
