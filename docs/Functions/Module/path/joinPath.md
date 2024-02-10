# $joinPath

This function joins path segments using the path module.

## Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| pathParts | The path segments to be joined. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $joinPath[path/part1; path/part2; file.txt]
  `,
});
```
