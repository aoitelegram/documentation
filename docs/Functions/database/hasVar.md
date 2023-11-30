# $hasVar
Returns a boolean value indicating whether the specified variable exists or not.

## Parameters
| Parameter | Description |
| --------- | ------------ |
| name | Name of the variable |
| table | Table (default main) |

## Example
```js
client.command({
  name: "has",
  code: `
    $print[$hasVar[var]]
   `
})
```