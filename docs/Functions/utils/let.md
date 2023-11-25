# $let

## Parameters

| Field | Description                                             | Type         |
| :---- | :------------------------------------------------------ | :----------- |
| key   | The name of the key to which the value will be assigned | alphanumeric |
| value | The value to be assigned to the key                     | alphanumeric |

## Usage

Creating a local variable

## Example

```javascript
bot.command({
  name: "let",
  code: `
$let[ruben;gay]
$print[$get[ruben]];
`,
});
```
