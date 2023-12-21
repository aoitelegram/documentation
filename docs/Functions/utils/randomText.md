# $randomText

Selects a random item from the provided list.

## Parameters

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| ...text   | List of text values from which to choose randomly. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $randomText[Option 1; Option 2; Option 3]  // Returns a random option from the list
  `,
});
```
