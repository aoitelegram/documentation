# $isUnicodeEmoji

## Usage

Checks if the given input is a Unicode emoji.

## Parameters

| Field | Description            |
| ----- | ---------------------- |
| emoji | The input to validate |

## Example

```javascript
<AoiClient>.addCommand({
  name: "isunicodeemoji",
  code: `$replyMessage[$isUnicodeEmoji[emoji]]`,
});
```