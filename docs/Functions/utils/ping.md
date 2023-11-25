# $ping

## Usage

This function is used to retrieve the ping time to the server. It returns the ping time in milliseconds.

### Example

```javascript
client.command({
  name: "ping",
  code: `
  $rendMessage[Bot ping: $ping ms]
  `,
});
```

In this example, the function is used to retrieve the ping time to the server and display it.
