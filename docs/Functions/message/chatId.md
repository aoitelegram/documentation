# $chatId

Will return the chat ID of the given chat id

## Parameters

| Parameter | Description        |
| --------- | ------------------ |
| chatId    | chat id (optional) |

## Example

```js
client.command({
  name: "message",
  code: `
    $replyMessage[$chatId]
   `,
});
```
