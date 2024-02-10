# $bufferAllocUnsafe

Creates a new Buffer instance with the specified number of bytes, and sets it to a variable without initializing the memory.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| name      | The name of the variable to set the buffer   |
| bytes     | The number of bytes for the buffer           |

## Example

```js
<AoiClient>.addCommand({
  name: "create-buffer-unsafe",
  code: `
    $bufferAllocUnsafe[myBuffer; 1024]
   `,
});
```