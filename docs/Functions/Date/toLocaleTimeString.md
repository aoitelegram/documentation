# $toLocaleTimeString

## Usage

Returns the current time in the user's locale-specific time format.

## Parameters

This function does not take any parameters.

## Example

```javascript
<AoiClient>.addCommand({
  name: "tolocaletimestring",
  code: `$replyMessage[$toLocaleTimeString]`,
});
```