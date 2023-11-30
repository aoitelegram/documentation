# $createArray
Creates an array for use with array functions.

## Parameters
| Parameter | Description |
| --------- | ------------ |
| name | Name of the array |
| ...args | Values to be included |

## Example
```js
client.command({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
   `
})
```