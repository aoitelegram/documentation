# $setMyName

This function sets the bot's name for a specific language.

## Parameters

| Parameter      | Description                                              |
| -------------- | -------------------------------------------------------- |
| name           | The name to be set for the bot.                           |
| language_code  | An optional language code for which the name is applicable. |

## Example

```js
client.command({
  name: "setName",
  code: `
    $setMyName[MyBot;en]
   `,
});
```