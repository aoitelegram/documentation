# $writeFile

This function writes content to a file at the specified path.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| filePath  | Path to the file to write content to.        |
| content   | Content to be written to the specified file. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $writeFile[path/to/file.txt; This is some content.]
  `,
});
```
