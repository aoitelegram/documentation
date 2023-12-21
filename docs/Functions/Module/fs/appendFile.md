# $appendFile

This function appends the specified content to the given file.

## Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| file      | Path to the file to append content to. |
| content   | Content to append to the file.         |

## Example

```js
client.command({
  name: "misc",
  code: `
    $appendFile[path/to/file.txt; This is some content.]
  `,
});
```
