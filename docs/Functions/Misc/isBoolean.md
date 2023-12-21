# $isBoolean

Will check if the given boolean is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
client.command({
  name: "misc",
  code: `
   $isBoolean[true]
   $isBoolean[false]
   $isBoolean[%^:#]
  `,
});
```
