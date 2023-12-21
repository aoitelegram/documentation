# $getChatMemberCount

## Usage

Return the number of members in a chat

## Parameters

| Parameter | Description            |
| --------- | ---------------------- |
| chatId    | the chat id (optional) |

## Example

```javascript
client.command({
  name: "version",
  code: `$replyMessage[Member count: $getChatMemberCount]`,
});
```
