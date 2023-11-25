# $sendMessage

## Parameters

| Field | Type   | Description                         | Required |
| ----- | ------ | ----------------------------------- | :------: |
| text  | string | The text to include in the message. |   true   |

## Usage

This function allows you to send a message with the specified text.

### Example

```javascript
client.command({
  name: "sendTextMessage",
  code: `
  $sendMessage[This is a text message.]
  `,
});
```

In this example, the function is used to send a message with the text "This is a text message."
