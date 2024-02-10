# $error

Sends an error message.

## Parameters

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| text      | The error message to send                |
| custom    | Optional. Indicates if it's a custom error message (true/false). Default is false. |

## Example

```js
<AoiClient>.addCommand({
  name: "send-error",
  code: `
    $error[An error occurred]
   `,
});
```