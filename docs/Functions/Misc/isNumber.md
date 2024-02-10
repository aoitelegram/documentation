# $isNumber

Will check if the given number is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $isNumber[fgk]
   $isNumber[467]
   $isNumber[577.798]
   $isNumber[NaN]
  `,
});
```
