# $arrayIncludes

Determines if the specified array contains the given element.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| name      | Name of the array |
| match     | Value to be found |

## Example

```js
<AoiClient>.addCommand({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $print[$arrayIncludes[data;0]]
   `,
});
```
