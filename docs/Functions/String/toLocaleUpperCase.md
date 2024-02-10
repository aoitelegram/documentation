# $toLocaleUpperCase

Converts a string to uppercase according to the current locale.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| text      | The text to convert     |

## Example

```js
<AoiClient>.addCommand({
  name: "convert-to-upper-case",
  code: `
    $toLocaleUpperCase[hello]
   `,
});
```