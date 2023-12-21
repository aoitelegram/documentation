# $onlyClientPerms

## Usage

Only if bot permissions

## Parameters

| Field | Description                                                      |
| ----- | ---------------------------------------------------------------- |
| perms | [perms](https://core.telegram.org/bots/api#chatmemberrestricted) |

## Example

```javascript
client.command({
  name: "command",
  code: `
   $onlyClientPerms[can_pin_messages;Error permissions: can_pin_messages]
  `,
});
```
