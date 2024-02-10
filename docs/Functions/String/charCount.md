# $charCount

Counts the occurrences of a character or returns the length of the string.

## Parameters

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| text      | The text to analyze                            |
| findChar  | Optional. The character to count occurrences of |

## Example

```js
<AoiClient>.addCommand({
  name: "count-characters",
  code: `
    $charCount[hello world; o]
   `,
});
```