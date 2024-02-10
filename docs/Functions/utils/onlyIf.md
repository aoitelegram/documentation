# $onlyIf

## Parameters

| Field        | Type    | Description                                   |
| ------------ | ------- | --------------------------------------------- |
| condition    | string  | The condition to check.                       |
| ifTrue       | string  | The code to execute if the condition is true. |
| replyMessage | boolean | reply to message? (optional).                 |

## Usage

This function checks if the condition is true or not

## Example

$onlyIf\[value==value2;error message\]

$onlyIf\[value!=value2;error message\]

$onlyIf\[value&gt;value2;error message\]

$onlyIf\[value&lt;value2;error message\]

$onlyIf\[value&gt;=value2;error message\]

$onlyIf\[value&lt;=value2;error message\]

```javascript
<AoiClient>.addCommand({
  name: "special",
  code: `Special Command
$onlyIf[15==6;15 doesn't equal 6!]`,
});
```
