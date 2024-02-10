# $textIndexOf

Returns the index of the first string element matched.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The element to find |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$textIndexOf[text;x]]`,
});
```
