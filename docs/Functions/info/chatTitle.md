# $chatTitle

## Usage

Retrieves the title of the current chat.

## Example

```javascript
<AoiClient>.addCommand({
  name: "chattitle",
  code: `$replyMessage[$chatTitle]`,
});
```