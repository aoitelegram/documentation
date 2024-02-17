# $numberSeparator

## Usage

Formats a number with a specified separator for thousands.

## Parameters

| Field  | Description                           |
| ------ | ------------------------------------- |
| number | The number to format                  |
| sep    | Optional separator for thousands (default: ",") |

## Example

```javascript
<AoiClient>.addCommand({
  name: "numberseparator",
  code: `$replyMessage[$numberSeparator[number;sep]]`,
});
```