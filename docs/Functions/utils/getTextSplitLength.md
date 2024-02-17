# $getTextSplitLength

## Usage

Returns the length of the array resulting from the `$textSplit` command.

## Example

```javascript
<AoiClient>.addCommand({
  name: "gettextsplitlength",
  code: `$replyMessage[$getTextSplitLength]`,
});
```