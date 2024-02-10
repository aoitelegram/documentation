# $findSpecialChars

Finds and removes special characters from the specified text.

## Parameters

| Parameter | Description            |
| --------- | ---------------------- |
| text      | The text to process   |

## Example

```js
<AoiClient>.addCommand({
  name: "remove-special",
  code: `
    $findSpecialChars[Hello! This is a #test123]
   `,
});
```