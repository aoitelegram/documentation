# $async

## Parameters

| Field | Type   | Description                       | Required |
| ----- | ------ | --------------------------------- | :------: |
| args  | string | The asynchronous code to execute. |   true   |

## Usage

This function is used to create an asynchronous context for executing code. It allows you to run asynchronous code and handle promises within your commands.

### Example

```javascript
client.command({
  name: "executeAsyncCode",
  code: `
  $async[
    $await $sendMessage[Text 1]
    $await $sendMessage[Text 2]
  ]
  `,
});
```
