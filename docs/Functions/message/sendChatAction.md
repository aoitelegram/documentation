# $sendChatAction

Use this function when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success

## Parameters

| Parameter | Description                                                                                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| action    | typing, upload_photo, record_video, upload_video, record_voice, upload_voice, upload_document, choose_sticker, find_location, record_video_note, upload_video_note (default: typing) |
| chatId    | chat id (optional)                                                                                                                                                                   |

## Example

```js
<AoiClient>.addCommand({
  name: "message,
  code: `
    $sendChatAction
    $sendMessage[Text]
   `,
});
```
