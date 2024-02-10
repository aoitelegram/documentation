# $deleteFile

This function deletes a file at the specified path.

## Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| filePath  | Path to the file to be deleted. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $deleteFile[path/to/file.txt]
  `,
});
```
