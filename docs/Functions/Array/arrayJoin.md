# $arrayJoin

Concatenates the elements of the array using the specified separator.

## Parameters

| Parameter | Description          |
| --------- | -------------------- |
| name      | Name of the array    |
| separator | Separator to be used |

## Example

```js
<AoiClient>.addCommand({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $print[$arrayJoin[data; , ]]
   `,
});
```
