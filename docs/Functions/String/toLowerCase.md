# $toLowerCase

Converts a string to lowercase.

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to convert |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$toLowerCase[TEXT]]`,
});
```
