# $testRegex

Tests if a string matches a regular expression pattern.

## Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| text      | The text to test                             |
| regex     | The regular expression pattern to test       |
| flags     | Optional. Flags for the regular expression   |

## Example

```js
<AoiClient>.addCommand({
  name: "test-regex",
  code: `
    $testRegex[Hello, world!;[A-Za-z]+]
   `,
});
```