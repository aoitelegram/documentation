# $datestamp

This function returns the current timestamp.

## Example

```js
client.command({
  name: "getTime",
  code: `
    $datestamp
  `,
});
```