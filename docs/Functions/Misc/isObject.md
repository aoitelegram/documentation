# $isObject

Will check if the given object is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
client.command({
  name: "misc",
  code: `
   $isObject[true]
   $isObject[{}]
   $isObject[{{}}]
   $isObject[{ "text": true }]
  `,
});
```
