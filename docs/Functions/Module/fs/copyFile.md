# $copyFile

This function copies a file from the specified source path to the specified destination path.

## Parameters

| Parameter       | Description                                            |
| --------------- | ------------------------------------------------------ |
| sourcePath      | Path to the source file to be copied.                  |
| destinationPath | Path to the destination where the file will be copied. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $copyFile[source/path/file.txt; destination/path/file_copy.txt]
  `,
});
```
