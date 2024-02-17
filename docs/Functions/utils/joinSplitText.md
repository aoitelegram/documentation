# $joinSplitText

## Usage

Joins the elements of the array resulting from the `$textSplit` command into a single string using a specified separator.

## Parameters

| Field | Description                                |
| ----- | ------------------------------------------ |
| sep   | The separator to use for joining the elements |

## Example

```javascript
<AoiClient>.addCommand({
  name: "joinSplitText",
  code: `$replyMessage[$joinSplitText[separator]]`,
});
```