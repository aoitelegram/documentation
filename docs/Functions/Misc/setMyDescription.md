# $setMyDescription

This function sets the bot's description for a specific language.

## Parameters

| Parameter      | Description                                              |
| -------------- | -------------------------------------------------------- |
| description    | The description text to be set for the bot.              |
| language_code  | An optional language code for which the description is applicable. |

## Example

```js
client.command({
  name: "setDescription",
  code: `
    $setMyDescription[This is my bot;en]
   `,
});
```