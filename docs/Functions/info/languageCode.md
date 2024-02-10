# $languageCode

## Usage

Return IETF language tag of the user's language

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `$replyMessage[$languageCode]`,
});
```
