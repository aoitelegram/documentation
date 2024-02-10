# $replyMessage

## Parameters

| Field | Type   | Description                                          | Required |
| ----- | ------ | ---------------------------------------------------- | :------: |
| text  | string | The text to include in the reply message (optional). |  false   |

## Usage

This function allows you to send a reply message with the specified text. If the `text` parameter is not provided, the reply message will be empty.

### Example

```javascript
$<AoiClient>.addCommand({
  name: "sendReply",
  code: `
  $replyMessage[This is a reply message.]
  `,
});
```

In this example, the function is used to send a reply message with the text "This is a reply message." If the `text` parameter is omitted, an empty reply message is sent.
