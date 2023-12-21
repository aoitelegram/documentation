# $text

This function allows you to retrieve a specific word from the message text.

## Parameters

| Parameter | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| index     | The index of the word to retrieve (optional). Default is the whole message |

## Example

```js
client.command({
  name: "message,
  code: `
    $sendMessage[$text]
   `,
});
```
