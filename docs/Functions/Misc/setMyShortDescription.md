# $setMyShortDescription

This function sets the bot's short description for a specific language.

## Parameters

| Parameter      | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| description    | The short description text to be set for the bot.            |
| language_code  | An optional language code for which the description is applicable. |

## Example

```js
<AoiClient>.addCommand({
  name: "setShortDescription",
  code: `
    $setMyShortDescription[A bot for various tasks;en]
   `,
});
```