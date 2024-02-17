# $findChars

## Usage

Finds and returns all characters within a given text, excluding digits and special characters.

## Parameters

| Field | Description                |
| ----- | -------------------------- |
| text  | The text to search chars   |

## Example

```javascript
<AoiClient>.addCommand({
  name: "findchars",
  code: `$replyMessage[$findChars[text &$ lol @$%]]`,
});
```