# $reply

Sets the reply behavior for the current message.

## Parameters

| Parameter | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| reply     | Optional. Boolean value for the reply behavior. Default is `true`. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $reply[true]
    $jsonRequest[https://api.example.com/data;{ "key": "value" ;result;Custom Error Message] // Error message reply to user
    
    $reply[false]
    $jsonRequest[https://api.example.com/data;{ "key": "value" ;result;Custom Error Message] // Error message not reply to user
  `,
});
```
