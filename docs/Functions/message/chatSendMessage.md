# $chatSendMessage

This function sends a message to a specified chat.

## Parameters

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| chatId    | The ID of the chat to which the message will be sent. |
| content   | The content of the message to be sent.            |

## Example

```js
client.command({
  name: "sendMessageToChat",
  code: `
    $chatSendMessage[-100123456789;Hello, this is a test message] // Replace -100123456789 with the actual chat ID
   `,
});
```