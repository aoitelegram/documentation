# $isNaN

Will check if the given NaN is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
client.command({
  name: "misc",
  code: `
   $isNaN[NaN]
   $isNaN[chbc]
  `,
});
```
