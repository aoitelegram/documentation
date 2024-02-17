# $clientDestroy

## Usage

Destroys the client and disconnects from the Telegram service.

## Example

```javascript
<AoiClient>.addCommand({
  name: "client_destroy",
  code: `
  $clientDestroy
  $replyMessage[Client disconnect]
  `,
});
```