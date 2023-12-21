# $normalizePath

This function normalizes a given path using the path module.

## Parameters

| Parameter  | Description                       |
| ---------- | --------------------------------- |
| pathString | The path string to be normalized. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $normalizePath[some/../path]
  `,
});
```
