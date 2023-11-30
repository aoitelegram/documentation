# $arrayLastIndexOf
Returns the index of the last array element matched.

## Parameters
| Parameter | Description |
| --------- | ------------ |
| name | Name of the array |
| element | Value for which the index should be returned |

## Example
```js
client.command({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $print[$arrayLastIndexOf[data;6]]
   `
})
```