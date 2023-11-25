# $print

## Parameters

| Field | Type   | Description                     | Required |
| ----- | ------ | ------------------------------- | :------: |
| text  | string | The text to log to the console. |   true   |

## Usage

This function is used to log the specified text to the console.

### Example

```javascript
client.command({
  name: "logtext",
  code: `
  $print[This is a log message.]
  `,
});
```

In this example, the function is used to log the text "This is a log message" to the console.
