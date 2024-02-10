# $stat

This function retrieves information about the specified file or directory using fs.promises.stat.

## Parameters

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| path      | Path to the file or directory to get information about. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $stat[path/to/file_or_directory]
  `,
});
```
