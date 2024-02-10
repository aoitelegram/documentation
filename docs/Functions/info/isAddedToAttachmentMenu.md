# $isAddedToAttachmentMenu

## Usage

if this user added the bot to the attachment menu

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$isAddedToAttachmentMenu]`,
});
```
