# $textIncludes

Returns whether the provided string contains some of the given words

## Parameters

| Parameter | Description         |
| --------- | ------------------- |
| text      | The text to analize |
| match     | The check text      |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$textIncludes[text;x]]`,
});
```
