# $hasPerms

Will check if the user has the listed permission and return boolean.

## Parameters

| Parameter  | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| permission | [permission chat telegram](https://core.telegram.org/bots/api#chatmemberadministrator) |
| memberId   | member id (optional)                                                                   |

## Example

```js
client.command({
  name: "message",
  code: `
    $replyMessage[$hasPerms[can_post_stories]]
   `,
});
```
