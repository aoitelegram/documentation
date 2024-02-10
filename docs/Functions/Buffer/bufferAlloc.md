# $bufferAlloc

Creates a new Buffer instance with the specified size, fill, and encoding, and sets it to a variable.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| name      | The name of the variable to set the buffer   |
| size      | The size of the buffer in bytes              |
| fill      | Optional. The value used to fill the buffer. Default is 0. |
| encoding  | Optional. The encoding of the buffer. Default is "utf8". |

## Example

```js
<AoiClient>.addCommand({
  name: "create-buffer",
  code: `
    $bufferAlloc[myBuffer; 10; 1]
   `,
});
```