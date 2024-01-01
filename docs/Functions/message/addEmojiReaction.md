# $addEmojiReaction

This function adds an emoji reaction to a message in a specified chat.

## Parameters

| Parameter      | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| emoji          | The emoji to be added as a reaction.                          |
| is_big         | An optional boolean parameter specifying if the emoji is big. Defaults to `true`. |
| message_id     | An optional message ID to which the reaction will be added. Defaults to the ID of the received message. |
| chatId         | An optional chat ID where the reaction will be added. Defaults to the ID of the received message's chat. |

## Example

```js
client.command({
  name: "addEmojiReaction",
  code: `
    $addEmojiReaction[👍;true;123456789;-100123456789] // Replace 123456789 with the actual message ID and chat ID
   `,
});
```