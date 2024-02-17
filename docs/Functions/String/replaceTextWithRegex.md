# $replaceTextWithRegex

## Usage

Replaces text with regular expression matching.

## Parameters

| Field     | Description                               |
| --------- | ----------------------------------------- |
| text      | The original text to perform replacement on |
| toReplace | The text to replace matches with          |
| regex     | The regular expression pattern            |
| flags     | Optional flags for the regular expression |

## Example

```javascript
<AoiClient>.addCommand({
  name: "$replaceTextWithRegex",
  code: `$replyMessage[$replaceTextWithRegex[text to manipulate;replacement text;regular expression pattern;flags]]`,
});
```