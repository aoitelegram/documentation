# $toLocaleDateString

## Usage

Returns the current date in the user's locale-specific format.

## Parameters

This function does not take any parameters.

## Example

```javascript
<AoiClient>.addCommand({
  name: "tolocaledatestring",
  code: `$replyMessage[$toLocaleDateString]`,
});
```