# $chatCooldown

This function sets a cooldown to the current chat.

## Parameters

| Field | Description                                                  |
| ----- | ------------------------------------------------------------ |
| time  | The time of cooldown                                         |
| error | The error to be displayed when cooldown is active (optional) |

### Error Options

- %fullTime% - Returns time in human readable duration.
- %hours% - Returns time in hour.
- %minutes% - Returns time in minutes.
- %seconds% - Returns time in seconds.
- %ms% - Returns time in milliseconds.
- %days% - Returns time in days.
- %weeks% - Returns time in weeks.
- %months% - Returns time in months.
- %years% - Returns time in years.

## Examples

```javascript
bot.command({
  name: "hello",
  code: `
$chatCooldown[1m;Hey, you need to wait %fullTime%!]
$replyMessage[Hello!]
`,
});
```
