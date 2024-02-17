# $parseJSON

## Usage

Parses a JSON string into a JavaScript object.

## Parameters

| Field  | Description                 |
| ------ | --------------------------- |
| object | The JSON string to parse    |

## Example

```javascript
<AoiClient>.addCommand({
  name: "parseJSON",
  code: `$replyMessage[$parseJSON[object]]`,
});
```