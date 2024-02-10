# $checkCondition

Checks if the given condition is valid and evaluates it.

## Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| condition | Condition to be checked and evaluated. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $checkCondition[true]
    $checkCondition[false]
    $checkCondition[%^:#]
  `,
});
```
