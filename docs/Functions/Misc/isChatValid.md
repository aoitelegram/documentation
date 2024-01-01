# $isChatValid

This function checks if the specified chat ID corresponds to a valid chat.

## Parameters

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| chatId    | The ID of the chat to check for validity. If not provided, it defaults to the current chat ID. |

## Example

```js
client.command({
  name: "checkChatValidity",
  code: `
    $isChatValid[$chatID] // Check the validity of the current chat
   `,
});
```