# $hasChatPerms

Will check if the chat has the listed permission and return boolean.

## Parameters

| Parameter  | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| permission | [permission chat telegram](https://core.telegram.org/bots/api#chatpermissions) |

## Example

```js
<AoiClient>.addCommand({
  name: "message",
  code: `
    $replyMessage[$hasChatPerms[can_send_documents]]
   `,
});
```
