# $matchRegex

Finds the first match of a regular expression pattern in a string.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| text      | The text to search                           |
| regex     | The regular expression pattern to match      |
| flags     | Optional. Flags for the regular expression   |

## Example

```js
<AoiClient>.addCommand({
  name: "find-regex-match",
  code: `
    $matchRegex[Hello, world!;[A-Za-z]+]
   `,
});
```