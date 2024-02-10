# $reverse

Reverses the order of characters in a string.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| text      | The text to reverse     |

## Example

```js
<AoiClient>.addCommand({
  name: "reverse-text",
  code: `
    $reverse[hello]
   `,
});
```