# $onlyClientPerms

## Usage

Only if bot permissions

## Parameters

| Field | Description                                                      |
| ----- | ---------------------------------------------------------------- |
| perms | [perms](https://core.telegram.org/bots/api#chatmemberrestricted) |

## Example

```javascript
<AoiClient>.addCommand({
  name: "command",
  code: `
   $onlyClientPerms[can_pin_messages;Error permissions: can_pin_messages]
  `,
});
```
