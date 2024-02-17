# $editTextSplitIndex

## Usage

Edits the element at a specified index in the array resulting from the `$textSplit` command.

## Parameters

| Field | Description                                     |
| ----- | ----------------------------------------------- |
| index | The index of the element to edit                |
| text  | The new text to replace the element at the index |

## Example

```javascript
<AoiClient>.addCommand({
  name: "editTextSplitIndex",
  code: `$editTextSplitIndex[index;text]`,
});
```