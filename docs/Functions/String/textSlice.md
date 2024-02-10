# $textSlice

Get a part of a text, from X to Y.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| from      | The start index     |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$textSlice[text;2]]`,
});
```
