# $textTrim

Trim the start and end of the text.

## Parameters

| Parameter | Description      |
| --------- | ---------------- |
| text      | The text to trim |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$textTrim[     text    ]]`,
});
```
