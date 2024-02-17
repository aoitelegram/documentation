# $getTextSplit

## Usage

Retrieves a specific element from the array resulting from the `$textSplit` command.

## Parameters

| Field | Description                           |
| ----- | ------------------------------------- |
| index | The index of the element to retrieve  |

## Example

```javascript
<AoiClient>.addCommand({
  name: "gettextsplit",
  code: `$replyMessage[$getTextSplit[index]]`,
});
```