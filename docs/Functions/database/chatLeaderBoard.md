# $chatLeaderBoard

This will return the position of chats

## Parameters

| Field      | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| variable   | Variable name                                                                       |
| typeLeader | In which order it will be returned 1. asc (ascending / default) 2. dsc (descending) |
| custom     | Formatting (optional)                                                               |
| list       | How many to list (optional)                                                         |

## Options

- `top`
- `id`
- `title`
- `type`
- `value`
- `description`
- `invite_link`

## Examples

```javascript
client.command({
  name: "chatLeaderBoard",
  code: `
    $sendMessage[$chatLeaderBoard[examples;;{top}. {title} - {value} ⏳️\n;10]]
    `,
});
```
