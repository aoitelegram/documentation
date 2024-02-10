# $onlyIfMessageContains

Will check if the message contains the given text and if not return a error message.

## Parameters

| Parameter    | Description                                 |
| ------------ | ------------------------------------------- |
| content      | Message which should contain the given text |
| ...text      | Text to check for in the message            |
| messageError | error to return                             |

## Example

```js
<AoiClient>.addCommand({
  name: "message",
  code: `
    $onlyIfMessageContains[$message;true;false;Only true/false]
   `,
});
```
