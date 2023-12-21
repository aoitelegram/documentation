# $toLowerCase

Converts a string to lowercase.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to convert |

## Example

```javascript
client.command({
  name: "command",
  code: `$replyMessage[$toLowerCase[TEXT]]`,
});
```
