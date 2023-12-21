# $isUndefined

Will check if the given undefined is valid.

## Parameters

| Parameter | Description       |
| --------- | ----------------- |
| content   | content for check |

## Example

```js
client.command({
  name: "misc",
  code: `
   $isUndefined[true]
   $isUndefined[false]
   $isUndefined[undefined]
   $isUndefined[   ]
  `,
});
```
