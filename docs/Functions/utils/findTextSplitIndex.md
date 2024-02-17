# $findTextSplitIndex

## Usage

Finds the index of a specified element in the array resulting from the `$textSplit` command.

## Parameters

| Field | Description                            |
| ----- | -------------------------------------- |
| query | The element to find the index of       |

## Example

```javascript
<AoiClient>.addCommand({
  name: "findTextSplitIndex",
  code: `$replyMessage[$findTextSplitIndex[query]]`,
});
```