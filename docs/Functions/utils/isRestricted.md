# $isRestricted

Checks if the specified user (or the message sender if not specified) has restricted status in the chat.

## Parameters

| Parameter | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| userId    | Optional. ID of the user to check. Defaults to the sender's ID if not provided. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $isRestricted
    $isRestricted[123456789] 
  `,
});
```
