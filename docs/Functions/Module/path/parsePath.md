# $parsePath

This function parses a given path into an object using the path module.

## Parameters

| Parameter  | Description                   |
| ---------- | ----------------------------- |
| pathString | The path string to be parsed. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $parsePath[some/path/file.txt]
  `,
});
```
