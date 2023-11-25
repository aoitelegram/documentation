# $var

## Parameters

| Field | Description                                             | Type         |
| :---- | :------------------------------------------------------ | :----------- |
| key   | The name of the key to which the value will be assigned | alphanumeric |
| value | The value to be assigned to the key                     | alphanumeric |

## Usage

Creating a global variable

## Example

```javascript
bot.command({
  name: "var",
  code: `
$var[ruben;gay]
$print[$get[ruben;global]];
`,
});
```
