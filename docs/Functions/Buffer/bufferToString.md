# $bufferToString

Converts a Buffer instance stored in a variable to a string.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| name      | The name of the variable storing the buffer   |

## Example

```js
<AoiClient>.addCommand({
  name: "convert-buffer-to-string",
  code: `
    $bufferToString[myBuffer]
   `,
});
```