# $textLastIndexOf

Returns the index of the last string element matched.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The element to find |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$textLastIndexOf[text;t]]`,
});
```
