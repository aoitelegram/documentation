# $textConcat

Concatenates the provided texts.

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| text      | The base text        |
| texts     | The texts. to concat |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$textConcat[text ; text 2]]`,
});
```
