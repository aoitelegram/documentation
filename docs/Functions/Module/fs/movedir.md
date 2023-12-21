# $movedir

This function uses the fs-extra library to move a file or directory from the specified source path to the specified destination path.

## Parameters

| Parameter       | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| sourcePath      | Path to the source file or directory to be moved.                  |
| destinationPath | Path to the destination where the file or directory will be moved. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $movedir[source/path/directory; destination/path/new_directory]
  `,
});
```
