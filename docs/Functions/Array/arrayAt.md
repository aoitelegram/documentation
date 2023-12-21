# $arrayAt

Returns the array element at the provided index.

## Parameters

| Parameter | Description        |
| --------- | ------------------ |
| name      | Name of the array  |
| index     | Index of the value |

## Example

```js
client.command({
  name: "array",
  code: `
    $createArray[data;1;4;5;6;7;8;9;0]
    $print[$arrayAt[data;-1]]
   `,
});
```
