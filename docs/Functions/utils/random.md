# $random

Generates a random integer within a specified range.

## Parameters

| Parameter | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| min       | Minimum value (inclusive) for the random number.                            |
| max       | Maximum value (inclusive) for the random number.                            |
| useCache  | (Optional) If true, caches the result for the given range. Default is true. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $random[1; 100]          // Returns a random number between 1 and 100
    $random[-10; 10; false]  // Returns a non-cached random number between -10 and 10
  `,
});
```
