# $stringifyJSON

## Usage

Converts a JavaScript object to a JSON string.

## Parameters

| Field  | Description                 |
| ------ | --------------------------- |
| object | The JavaScript object to stringify |

## Example

```javascript
<AoiClient>.addCommand({
  name: "stringifyJSON",
  code: `$replyMessage[$stringifyJSON[object]]`,
});
```