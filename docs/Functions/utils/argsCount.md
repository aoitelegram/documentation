# $argsCount

This function returns the count of arguments passed in a command, excluding the command itself.

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $argsCount
  `,
});
```
