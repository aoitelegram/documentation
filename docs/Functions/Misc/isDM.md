# $isDM

Will check if the given user is `private` chat.

## Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| userId    | user id for check (optional) |

## Example

```js
client.command({
  name: "misc",
  code: `
   $replyMessage[DM: $isDM]
  `,
});
```
