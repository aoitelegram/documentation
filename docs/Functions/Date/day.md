# $day

This function returns the current day of the week as a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday).

## Example

```js
<AoiClient>.addCommand({
  name: "getDay",
  code: `
    $day
  `,
});
```