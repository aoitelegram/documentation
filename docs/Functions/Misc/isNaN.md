# $isNaN

Will check if the given NaN is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $isNaN[NaN]
   $isNaN[chbc]
  `,
});
```
