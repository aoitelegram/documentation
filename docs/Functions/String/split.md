# $split

Splits an object Stringinto an array of strings by splitting the string with the specified substring

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| text      | The text to work on. |
| separator | The text separator.  |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$split[text, g;,]]`,
});
```
