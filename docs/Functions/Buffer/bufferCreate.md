# $bufferCreate

Creates a new Buffer instance from the provided content and sets it to a variable.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| name      | The name of the variable to set the buffer   |
| content   | The content to create the buffer from        |

## Example

```js
<AoiClient>.addCommand({
  name: "create-buffer-from-content",
  code: `
    $bufferCreate[myBuffer; Hello, world!]
   `,
});
```