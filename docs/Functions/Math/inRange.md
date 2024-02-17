# $inRange

## Usage

Checks if a number is within a specified range.

## Parameters

| Field | Description                                 |
| ----- | ------------------------------------------- |
| number | The number to check                         |
| min   | The minimum value of the range (default: 0) |
| max   | The maximum value of the range (default: 100) |

## Example

```javascript
<AoiClient>.addCommand({
  name: "in_range",
  code: `$replyMessage[$inRange[number;min;max]]`,
});
```