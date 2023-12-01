# $message

## Parameters

| Field | Type    | Description                                                                 | Required |
| ----- | ------- | --------------------------------------------------------------------------- | :------: |
| index | integer | The index of the word to retrieve (optional). Default is the whole message. |  false   |

## Usage

This function allows you to retrieve a specific word from the message text. If the `index` parameter is not provided, the entire message text is returned.

### Example

```javascript
client.command({
  name: "getMessage",
  code: `$print[$message[3]]`,
});
```

In this example, the function is used to retrieve the third word from the message text. If the word at the specified index doesn't exist, it returns `null`.
