# $getChat

This function retrieves information about a chat.

## Parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| chatId     | An optional chat ID for which information will be retrieved. Defaults to the ID of the received message's chat. |
| path       | An optional path to a specific property within the chat object. |

## Example

```js
client.command({
  name: "getChatInfo",
  code: `
    $getChat[-100123456789;title] // Replace -100123456789 with the actual chat ID
  `,
});
```