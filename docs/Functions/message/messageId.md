# $messageId

This function retrieves the ID of the current message.

## Parameters

None

## Example

```js
client.command({
  name: "getMessageId",
  code: `
    $replyMessage[Current Message ID: $messageId]
  `,
});
```