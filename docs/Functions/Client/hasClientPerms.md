# $hasClientPerms

## Usage

Bot has permissions

## Parameters

| Field | Description                                                      |
| ----- | ---------------------------------------------------------------- |
| perms | [perms](https://core.telegram.org/bots/api#chatmemberrestricted) |

## Example

```javascript
client.command({
  name: "command",
  code: `
  $if[$hasClientPerms[can_pin_messages];
  $replyMessage[True can_pin_messages];
  $replyMessage[False can_pin_messages]
  ]`,
});
```
