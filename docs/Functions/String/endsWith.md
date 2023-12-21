# $endsWith

Returns whether the given text ends with the provided word.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The word to check   |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$endsWith[text l;l]]`,
});
```
