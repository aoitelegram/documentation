# $concatTextSplit

## Usage

Concatenates additional text to the array resulting from the `$textSplit` command.

## Parameters

| Field | Description                            |
| ----- | -------------------------------------- |
| text  | The text to concatenate with the array |

## Example

```javascript
<AoiClient>.addCommand({
  name: "concatTextSplit",
  code: `$concatTextSplit[text1 text2 ...]`,
});
```