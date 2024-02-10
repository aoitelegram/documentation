# $isString

Will check if the given string is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $isString[true]
   $isString[%^:#]
  `,
});
```
