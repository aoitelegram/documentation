# $textAt

takes an integer value and returns the string element at the given index.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| index     | The element index   |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$textAt[text;1]]`,
});
```
