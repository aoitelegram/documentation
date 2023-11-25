# $await

## Parameters

| Field | Type   | Description                                                  | Required |
| ----- | ------ | ------------------------------------------------------------ | :------: |
| time  | number | The time in seconds to wait (optional). Default is 1 second. |  false   |

## Usage

This function is used to introduce a delay in seconds before continuing with the execution of code. If the `time` parameter is not provided, it defaults to a 1-second delay.

### Example

```javascript
client.command({
  name: "delayExecution",
  code: `
  $await[5]
  // This code will pause for 5 seconds before continuing
  `,
});
```

In this example, the function is used to introduce a 5-second delay in code execution. After the specified delay, the code will continue.
