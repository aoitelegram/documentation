# $setObjectValue

This function sets a new value for a specified key in an object.

## Parameters

| Parameter  | Description                                       |
| ---------- | ------------------------------------------------- |
| object     | The object in which the key's value will be set.  |
| key        | The key for which the value will be set.          |
| newValue   | The new value to be set for the specified key.    |

## Example

```js
client.command({
  name: "setValue",
  code: `
    $setObjectValue[{ "name": "John", "age": 25, "city": "New York" };age;30] // Replace the object with your own
  `,
});
```
