# $argsCheck

This function checks conditions related to the number of arguments in a command and performs actions based on the specified conditions.

## Parameters

| Parameter    | Description                                            |
| ------------ | ------------------------------------------------------ |
| condition    | A string containing the condition to be checked.       |
| errorMessage | (Optional) Custom error message to display on failure. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $argsCheck[== 2; Invalid number of arguments. Use: !misc arg1 arg2]
    $argsCheck[> 1; You need at least 2 arguments for this command.]
    $argsCheck[<= 5; Custom error message on failure.]
  `,
});
```
