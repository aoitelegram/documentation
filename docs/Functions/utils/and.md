# $and

Combines the specified conditions with logical AND operation.

## Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| ...args   | Conditions to be evaluated (at least 2)|

## Example

```js
<AoiClient>.addCommand({
  name: "array",
  code: `
    $and[condition1;condition2;condition3]
   `,
});
```