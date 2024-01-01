# $setMyCommands

This function sets the list of commands supported by a bot for a specific language and scope.

## Parameters

| Parameter      | Description                                              |
| -------------- | -------------------------------------------------------- |
| language_code  | The language code for which the commands are applicable. |
| scope          | An optional object specifying the command scope.          |
| ...commands    | One or more command objects to be set as supported.      |

## Example

```js
client.command({
  name: "setBotCommands",
  code: `
    $setMyCommands[en;{ bot_command: 'botCommand' };{ command: '/start', description: 'Start the bot' }]
    $commit[Or:]
    $setMyCommands[;;{ command: '/start', description: 'Start the bot' }]
   `,
});
```