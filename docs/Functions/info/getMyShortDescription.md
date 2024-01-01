# $getMyShortDescription

This function retrieves the short description of the bot in a specified language.

## Parameters

| Parameter      | Description                                               |
| -------------- | --------------------------------------------------------- |
| language_code  | The language code for which the bot's short description will be retrieved. |

## Example

```js
client.command({
  name: "getBotShortDescription",
  code: `
    $getMyShortDescription["en"] // Replace "en" with the actual language code
  `,
});
```