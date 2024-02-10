# $startsWith

Returns whether the given text starts with the provided word.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The word to check   |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$startsWith[text l;l]]`,
});
```
