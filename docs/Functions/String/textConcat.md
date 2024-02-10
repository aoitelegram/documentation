# $textConcat

Concatenates the provided texts.

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| text      | The base text        |
| texts     | The texts. to concat |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$textConcat[text ; text 2]]`,
});
```
