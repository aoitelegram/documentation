# $isBoolean

Will check if the given boolean is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $isBoolean[true]
   $isBoolean[false]
   $isBoolean[%^:#]
  `,
});
```
