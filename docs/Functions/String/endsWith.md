# $endsWith

Returns whether the given text ends with the provided word.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The word to check   |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$endsWith[text l;l]]`,
});
```
