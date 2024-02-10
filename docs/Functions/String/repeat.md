# $repeat

Repeat the given text, certain amount of times.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| times     | The times to repeat |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$repeat[text ;10]]`,
});
```
