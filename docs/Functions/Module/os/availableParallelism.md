# $availableParallelism

This function retrieves the number of available CPU cores for parallel processing using the os module.

## Example

```js
client.command({
  name: "misc",
  code: `
    $availableParallelism
  `,
});
```
