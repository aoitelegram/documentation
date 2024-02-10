# $getObjectKeys

This function retrieves the keys of an object and returns them as a string.

## Parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| object     | The object for which keys will be retrieved.              |
| sep        | An optional separator used to join the keys. Defaults to ", ". |

## Example

```js
<AoiClient>.addCommand({
  name: "getKeys",
  code: `
    $getObjectKeys[{ "name": "John", "age": 25, "city": "New York" };,] // Replace the object with your own
  `,
});
```