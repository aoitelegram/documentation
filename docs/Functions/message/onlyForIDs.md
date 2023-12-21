# $onlyForIDs

Will check if the command was executed by any user of the listed user IDs and return a error if not

## Parameters

| Parameter    | Description              |
| ------------ | ------------------------ |
| ...ids       | users id                 |
| messageError | message error (optional) |

## Example

```js
client.command({
  name: "message",
  code: `
    $onlyForIDs[134567866;6786678;56774;No perms id]
   `,
});
```
