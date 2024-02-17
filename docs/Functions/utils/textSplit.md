# $textSplit

## Usage

Splits a text into an array based on a specified separator.

## Parameters

| Field | Description                              |
| ----- | ---------------------------------------- |
| text  | The text to split                        |
| sep   | Optional separator (default: " ")        |

## Example

```javascript
<AoiClient>.addCommand({
  name: "textsplit",
  code: `$textSplit[text;sep]`,
});
```