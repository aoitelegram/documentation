# $getObjectValues

This function retrieves the values of an object and returns them as a string.

## Parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| object     | The object for which values will be retrieved.            |
| sep        | An optional separator used to join the values. Defaults to ", ". |

## Example

```js
client.command({
  name: "getValues",
  code: `
    $getObjectValues[{ "name": "John", "age": 25, "city": "New York" };, ] // Replace the object with your own
  `,
});
```