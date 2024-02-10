# $replace

Replaces the matched text with the provided replacement

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| text      | The text to work on. |
| match     | The word to replace. |
| replacer  | The replacer word.   |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$replace[text;text;lol]]`,
});
```
