# $copyfs

This function uses the fs-extra library to copy files or directories from the specified source path to the specified destination path.

## Parameters

| Parameter       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| sourcePath      | Path to the source file or directory to be copied.                  |
| destinationPath | Path to the destination where the file or directory will be copied. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $copyfs[source/path/file.txt; destination/path/file_copy.txt]
  `,
});
```
