# $advancedTextSplit

Splits the specified text using multiple delimiters and retrieves the specified fields.

## Parameters

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| text      | The text to split                        |
| ...fields | Delimiters and positions to retrieve     |

## Example

```js
<AoiClient>.addCommand({
  name: "split-text",
  code: `
    $advancedTextSplit[text;delimiter1;position1;delimiter2;position2;...]
   `,
});
```