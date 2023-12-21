# Variable Parsing

To conveniently retrieve data from variables, variable parsing was devised using the following syntax: `&var&`. (Works only for local variables)

:::note{.warning}
To enable variable parsing in the `AoiClient` constructor, specify the `varReplaceOption` parameter.
```js
const bot = new AoiClient({
    varReplaceOption: true,
   // ...other configurations
});
```
:::

## Examples
```js
client.command({
  name: "ampersand",
  code: `
  $sendMessage[&var&, &top_1&, &kasper&]
  $comment[undefined, undefined, undefined]
  $let[var;okey]
  $let[top_1;1]
  $let[kasper;top]
  $sendMessage[&var&, &top_1&, &kasper&]
  $comment[okey, 1, top]
  `
})
```