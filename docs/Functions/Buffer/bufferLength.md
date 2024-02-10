# $bufferLength

Retrieves the length of a Buffer instance stored in a variable.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| name      | The name of the variable storing the buffer   |

## Example

```js
<AoiClient>.addCommand({
  name: "get-buffer-length",
  code: `
    $bufferLength[myBuffer]
   `,
});
```