# $arrayConcat
Combines the specified array with new values.

## Parameters
| Parameter | Description |
| --------- | ------------ |
| name | Name of the array |
| ...args | New values |

## Example
```js
client.command({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $let[concat;$arrayConcat[data;10;20;30]]
    $print[$get[concat]]
   `
})
```