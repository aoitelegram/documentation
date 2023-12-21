# $startsWith

Returns whether the given text starts with the provided word.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The word to check   |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$startsWith[text l;l]]`,
});
```
