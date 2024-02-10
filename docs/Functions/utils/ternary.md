# $ternary

## Parameters

| Field     | Type | Description                                               | Required |
| --------- | ---- | --------------------------------------------------------- | :------: |
| condition | any  | The condition to check.                                   |   true   |
| ifTrue    | any  | The code to execute if the condition is true.             |   true   |
| ifFalse?  | any  | The code to execute if the condition is false (optional). |  false   |

## Example
```js
<AoiClient>.addCommand({
  name: "ternary",
  code: `$sendMessage[$ternary[$message[1]==src;True: src;False: src!=$message[1]]]`
})
```