# $getMyName

This function retrieves the name of the bot in a specified language.

## Parameters

| Parameter      | Description                                               |
| -------------- | --------------------------------------------------------- |
| language_code  | The language code for which the bot name will be retrieved. |

## Example

```js
client.command({
  name: "getBotName",
  code: `
    $getMyName[en] // Replace "en" with the actual language code
  `,
});
```