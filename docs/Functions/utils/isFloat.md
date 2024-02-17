# $isFloat

## Usage

Checks if the given input is a float.

## Parameters

| Field  | Description            |
| ------ | ---------------------- |
| number | The input to validate |

## Example

```javascript
<AoiClient>.addCommand({
  name: "isfloat",
  code: `$replyMessage[$isFloat[number]]`,
});
```