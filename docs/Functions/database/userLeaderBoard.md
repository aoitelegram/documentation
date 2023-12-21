# $userLeaderBoard

This will return the position of the leaderboard

## Parameters

| Field      | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| channelId  | Chat id for leaderboard                                                             |
| variable   | Variable name                                                                       |
| typeLeader | In which order it will be returned 1. asc (ascending / default) 2. dsc (descending) |
| custom     | Formatting (optional)                                                               |
| list       | How many to list (optional)                                                         |

## Options

- `top`
- `id`
- `first_name`
- `username`
- `type`
- `value`
- `last_name`
- `language_code`
- `bio`

## Examples

```javascript
client.command({
  name: "userLeaderBoard",
  code: `
    $sendMessage[$chatLeaderBoard[$chatId;examples;;{top}. {first_name} - {value} ⏳️\n;10]]
    `,
});
```
