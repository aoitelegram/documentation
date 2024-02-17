# $toLocaleString

## Usage

Returns the current date and time in the user's locale-specific format.

## Parameters

This function does not take any parameters.

## Example

```javascript
<AoiClient>.addCommand({
  name: "tolocalestring",
  code: `$replyMessage[$toLocaleString]`,
});
```