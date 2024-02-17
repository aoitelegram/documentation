# $findNumbers

## Usage

Finds and returns all numbers within a given text.

## Parameters

| Field | Description                |
| ----- | -------------------------- |
| text  | The text to search numbers |

## Example

```javascript
<AoiClient>.addCommand({
  name: "$findNumbers",
  code: `$replyMessage[$findNumbers[text 67]]`,
});
```