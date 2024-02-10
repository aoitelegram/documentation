# $isNull

Will check if the given null is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $isNull[true]
   $isNull[null]
   ``
});
```
