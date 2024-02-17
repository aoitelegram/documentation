# $hasFunction

## Usage

Checks if the specified function is available in the aoitelegram.

## Parameters

| Field | Description                               |
| ----- | ----------------------------------------- |
| func  | The name of the function to check for     |

## Example

```javascript
<AoiClient>.addCommand({
  name: "$hasFunction",
  code: `$replyMessage[$hasFunction[hasFunction]]`,
});
```