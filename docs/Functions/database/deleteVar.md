# $deleteVar
Deletes the specified variable and returns a boolean value indicating whether the variable was successfully deleted.

## Parameters
| Parameter | Description |
| --------- | ------------ |
| name | Name of the variable |
| hasDelete | Return a boolean expression if the variable is deleted (default false)|
| table | Table (default main) |

## Example
```js
client.command({
  name: "delete",
  code: `
    $print[$deleteVar[var]]
   `
})
```