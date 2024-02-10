# $chartAt

Returns the character at the provided index.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| index     | The char index      |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$chartAt[text;1]]`,
});
```
