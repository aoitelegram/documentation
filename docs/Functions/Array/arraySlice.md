# $arraySlice

Returns a new array containing a copy of a portion of the original array.

## Parameters

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| name      | Name of the array                           |
| index     | Number of elements to remove from the array |

## Example

```js
<AoiClient>.addCommand({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $let[slice;$arraySlice[data;5]]
    $print[$get[slice]]
   `,
});
```
