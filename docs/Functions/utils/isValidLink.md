# $isValidLink

## Usage

Checks if a given link is valid by attempting to fetch it.

## Parameters

| Field | Description          |
| ----- | -------------------- |
| link  | The link to validate |

## Example

```javascript
<AoiClient>.addCommand({
  name: "isvalidlink",
  code: `$replyMessage[$isValidLink[link]]`,
});
```