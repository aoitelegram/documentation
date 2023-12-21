# $textTrim

Trim the start and end of the text.

## Parameters

| Parameter | Description      |
| --------- | ---------------- |
| text      | The text to trim |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$textTrim[     text    ]]`,
});
```
