# $milliseconds

This function returns the current milliseconds of the current second.

## Example

```js
client.command({
  name: "getMilliseconds",
  code: `
    $milliseconds
  `,
});
```