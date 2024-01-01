# $getChatMember

This function retrieves information about a user's membership in a chat.

## Parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| userId     | An optional user ID for which membership information will be retrieved. Defaults to the ID of the message sender. |
| path       | An optional path to a specific property within the chat member object. |

## Example

```js
client.command({
  name: "getUserMembership",
  code: `
    $getChatMember[123456789;status] // Replace 123456789 with the actual user ID
  `,
});
```