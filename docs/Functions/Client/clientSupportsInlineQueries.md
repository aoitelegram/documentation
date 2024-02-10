# $clientSupportsInlineQueries

## Usage

if the bot supports inline queries

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$clientSupportsInlineQueries]`,
});
```
