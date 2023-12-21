# $resolvePath

This function resolves a given path into an absolute path using the path module.

## Parameters

| Parameter  | Description                     |
| ---------- | ------------------------------- |
| pathString | The path string to be resolved. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $resolvePath[some/../path]
  `,
});
```
