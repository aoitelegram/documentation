# $milliseconds

This function returns the current milliseconds of the current second.

## Example

```js
<AoiClient>.addCommand({
  name: "getMilliseconds",
  code: `
    $milliseconds
  `,
});
```