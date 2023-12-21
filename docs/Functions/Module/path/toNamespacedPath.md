# $toNamespacedPath

This function converts a given path to its namespace-prefixed form using the path module.

## Parameters

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| pathString | The path string to be converted. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $toNamespacedPath[C:\\some\\path]
  `,
});
```
