# $isAdmin

Checks if the specified user (or the message sender if not specified) is an administrator.

## Parameters

| Parameter | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| userId    | Optional. ID of the user to check. Defaults to the sender's ID if not provided. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $isAdmin
    $isAdmin[123456789] 
  `,
});
```
