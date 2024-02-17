# $chatUsername

## Usage

Retrieves the username of the current chat.

## Example

```javascript
<AoiClient>.addCommand({
  name: "chatusername",
  code: `$replyMessage[$chatUsername]`,
});
```