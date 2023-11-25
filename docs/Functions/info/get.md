# $get

## Parameters

| Name    | Type   | description                                                      |
| ------- | ------ | ---------------------------------------------------------------- |
| varName | string | The name of the variable from which you want to retrieve values. |
| type    | string | The type of the variable, local for local, global for global.    |

## Usage

Getting the value of a variable

## Example

```javascript
client.command({
  name: "get",
  code: `
  $var[Getting;true]
  $let[Getting;true]
  $print[Global var: $get[Getting;global];\nLocal var: $get[Getting]]
  `,
});
```
