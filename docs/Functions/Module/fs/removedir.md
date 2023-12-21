# $removedir

This function uses the fs-extra library to remove a file or directory at the specified path.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| path      | Path to the file or directory to be removed. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $removedir[path/to/file_or_directory]
  `,
});
```
