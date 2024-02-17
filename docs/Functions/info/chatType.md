# $chatType

## Usage

Retrieves the type of the current chat.

## Example

```javascript
<AoiClient>.addCommand({
  name: "chattype",
  code: `$replyMessage[$chatType]`,
});
```