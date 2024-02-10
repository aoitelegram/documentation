# $messageId

This function retrieves the ID of the current message.

## Parameters

None

## Example

```js
<AoiClient>.addCommand({
  name: "getMessageId",
  code: `
    $replyMessage[Current Message ID: $messageId]
  `,
});
```