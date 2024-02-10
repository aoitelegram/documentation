# $readdir

This function reads the contents of a directory at the specified path.

## Parameters

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| dirPath   | Path to the directory to read the contents of. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $readdir[path/to/directory]
  `,
});
```
