# $or

Checks if any of the specified conditions are true.

## Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| ...args   | Conditions to check (at least 2) |

## Example

```js
<AoiClient>.addCommand({
  name: "or",
  code: `
    $or[condition1;condition2;condition3]
   `,
});
```