# $isMember

Checks if the specified user (or the message sender if not specified) is a chat member.

## Parameters

| Parameter | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| userId    | Optional. ID of the user to check. Defaults to the sender's ID if not provided. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $isMember
    $isMember[123456789] 
  `,
});
```
