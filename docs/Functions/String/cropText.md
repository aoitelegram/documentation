# $cropText

Crops the text to a specified length, starting from a specified index and using a specified delimiter.

## Parameters

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| text      | The text to crop                                        |
| limit     | Optional. The maximum length of the cropped text. Default is 2000. |
| start     | Optional. The starting index from where to crop the text. Default is 0. |
| char      | Optional. The delimiter to use for splitting the text. Default is an empty string. |

## Example

```js
<AoiClient>.addCommand({
  name: "crop-text",
  code: `
    $cropText[This is a long text; 10; 5; " "]
   `,
});
```