# $removeTextSplitElement

## Usage

Removes specific elements from the array resulting from the `$textSplit` command.

## Parameters

| Field    | Description                                      |
| -------- | ------------------------------------------------ |
| elements | The elements to remove from the split text array |

## Example

```javascript
<AoiClient>.addCommand({
  name: "removeTextSplitElement",
  code: `$removeTextSplitElement[element1 element2 ...]`,
});
```