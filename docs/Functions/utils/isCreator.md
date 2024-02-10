# $isCreator

Checks if the specified user (or the message sender if not specified) is a chat creator.

## Parameters

| Parameter | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| userId    | Optional. ID of the user to check. Defaults to the sender's ID if not provided. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $isCreator
    $isCreator[123456789] 
  `,
});
```
