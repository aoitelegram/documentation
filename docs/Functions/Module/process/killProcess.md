# $killProcess

This function kills the current Node.js process and its child processes using the process module.

## Example

```js
client.command({
  name: "misc",
  code: `
    $killProcess
  `,
});
```
