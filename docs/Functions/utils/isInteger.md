# $isInteger

## Usage

Checks if the given input is an integer.

## Parameters

| Field  | Description            |
| ------ | ---------------------- |
| number | The input to validate |

## Example

```javascript
<AoiClient>.addCommand({
  name: "isinteger",
  code: `$replyMessage[$isInteger[number]]`,
});
```