# $chatId

Will return the chat ID of the given chat id

## Parameters

| Parameter | Description        |
| --------- | ------------------ |
| chatId    | chat id (optional) |

## Example

```js
<AoiClient>.addCommand({
  name: "message",
  code: `
    $replyMessage[$chatId]
   `,
});
```
