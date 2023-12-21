# $fileExists

This function checks if a file exists at the specified path.

## Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| filePath  | Path to the file to be checked. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $fileExists[path/to/file.txt]
  `,
});
```
