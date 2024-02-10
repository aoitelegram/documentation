# $isDM

Will check if the given user is `private` chat.

## Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| userId    | user id for check (optional) |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
   $replyMessage[DM: $isDM]
  `,
});
```
