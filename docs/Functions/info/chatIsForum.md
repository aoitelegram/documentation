# $chatIsForum

## Usage

Checks if the current chat is a forum.

## Example

```javascript
<AoiClient>.addCommand({
  name: "chatisforum",
  code: `$replyMessage[$chatIsForum]`,
});
```