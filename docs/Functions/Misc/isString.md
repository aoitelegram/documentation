# $isString

Will check if the given string is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
client.command({
  name: "misc",
  code: `
   $isString[true]
   $isString[%^:#]
  `,
});
```
