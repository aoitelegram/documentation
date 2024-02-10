# $arrayIndexOf

Returns the index of the first occurrence of the specified element in the array.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| name      | Name of the array                            |
| element   | Value for which the index should be returned |

## Example

```js
<AoiClient>.addCommand({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $print[$arrayIndexOf[data;6]]
   `,
});
```
