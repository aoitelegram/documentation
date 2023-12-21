# $onlyPerms

Will check if the user has the listed permission and return a error message if not.

## Parameters

| Parameter    | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| permission   | [permission chat telegram](https://core.telegram.org/bots/api#chatmemberadministrator) |
| messageError | message error (optional)                                                               |
| memberId     | member id (optional)                                                                   |

## Example

```js
client.command({
  name: "message",
  code: `
    $onlyPerms[can_send_documents;No perms, Error]
   `,
});
```
