# $getMyDescription

This function retrieves the description of the bot in a specified language.

## Parameters

| Parameter      | Description                                               |
| -------------- | --------------------------------------------------------- |
| language_code  | The language code for which the bot description will be retrieved. |

## Example

```js
<AoiClient>.addCommand({
  name: "getBotDescription",
  code: `
    $getMyDescription[en] // Replace "en" with the actual language code
  `,
});
```