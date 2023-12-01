# $addCallbackQuery
This function is used to add buttons to a message.

## Parameters
| Parameter      | Description                      |
| -------------- | -------------------------------- |
| index          | Index where the button will be placed |
| text           | Text to be displayed on the button |
| callback_data  | ID to be responded to by the button |

## Example
```js
client.command({
  name: "callback",
  code: `
  $addCallbackQuery[1;text1;test_data]
  $addCallbackQuery[1;text2;data2]
  $addCallbackQuery[2;text3;data3]
  $addCallbackQuery[2;text4;data4]
  $addCallbackQuery[3;text5;data5]
  $sendMessage[Text button!]
  $sendMessage[No button!]
  `,
});

client.action({
  data: "test_data",
  answer: true,
  code: `$print[Action]`,
});
```