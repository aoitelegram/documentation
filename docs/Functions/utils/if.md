# $if

## Parameters

| Field     | Type | Description                                               | Required |
| --------- | ---- | --------------------------------------------------------- | :------: |
| condition | any  | The condition to check.                                   |   true   |
| ifTrue    | any  | The code to execute if the condition is true.             |   true   |
| ifFalse?  | any  | The code to execute if the condition is false (optional). |  false   |

## Usage

This function performs a conditional check based on the provided `condition`. If the `condition` evaluates to `true`, it executes the `ifTrue` code. If the `condition` evaluates to `false`, it executes the `ifFalse` code (if provided). If no `ifFalse` code is provided and the `condition` is `false`, the function does nothing.

### Example

```javascript
client.command({
  name: "performConditionalCheck",
  code: `
  $if[$message[1]==hello;Hello, World!;Sorry, it's not "hello."]
  `,
});
```

In this example, the function checks if the first word in the message is "hello." If it is, it replies with "Hello, World!" Otherwise, it replies with "Sorry, it's not 'hello.'"
