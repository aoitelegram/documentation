# $deleteMessage

This function deletes a message in a specified chat.

## Parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| chatId     | An optional chat ID where the message will be deleted. Defaults to the ID of the received message's chat. |
| messageId  | An optional message ID to be deleted. Defaults to the ID of the received message. |

## Example

```js
client.command({
  name: "deleteMessageCommand",
  code: `
    $deleteMessage[-100123456789;987654321] // Replace -100123456789 and 987654321 with the actual chat ID and message ID
  `,
});
```