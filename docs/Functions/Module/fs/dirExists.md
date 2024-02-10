# $dirExists

This function checks if a directory exists at the specified path.

## Parameters

| Parameter | Description                          |
| --------- | ------------------------------------ |
| dirPath   | Path to the directory to be checked. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $dirExists[path/to/directory]
  `,
});
```
