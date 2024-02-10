# $isUndefined

Will check if the given undefined is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $isUndefined[true]
   $isUndefined[false]
   $isUndefined[undefined]
   $isUndefined[   ]
  `,
});
```
