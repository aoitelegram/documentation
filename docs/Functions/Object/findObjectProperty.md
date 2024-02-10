# $findObjectProperty

This function finds a specific property in an object and returns the property along with its value.

## Parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| object     | The object in which the property will be searched.        |
| property   | The name of the property to find in the object.           |
| format     | An optional parameter to format the output as a JSON string with indentation. Defaults to `false`. |

## Example

```js
<AoiClient>.addCommand({
  name: "findProperty",
  code: `
    $findObjectProperty[{ "name": "John", "age": 25, "city": "New York" };age;true]
  `,
});
```