# $isSafeInteger

## Usage

Checks if the given input is a safe integer.

## Parameters

| Field  | Description            |
| ------ | ---------------------- |
| number | The input to validate |

## Example

```javascript
<AoiClient>.addCommand({
  name: "issafeinteger",
  code: `$replyMessage[$isSafeInteger[number]]`,
});
```