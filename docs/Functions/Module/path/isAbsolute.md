# $isAbsolute

This function checks if the given path is an absolute path using the path module.

## Parameters

| Parameter  | Description                                |
| ---------- | ------------------------------------------ |
| pathString | The path string to check for absoluteness. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $isAbsolute[some/path]
  `,
});
```
