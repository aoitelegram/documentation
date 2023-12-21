# $onlyChatPerms

Will check if the chat has the listed permission and return a error message if not.

## Parameters

| Parameter    | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| permission   | [permission chat telegram](https://core.telegram.org/bots/api#chatpermissions) |
| messageError | message error                                                                  |

## Example

```js
client.command({
  name: "message",
  code: `
    $onlyChatPerms[can_send_documents;No perms, Error]
   `,
});
```
