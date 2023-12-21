# $checkContains

Checks if the given text contains any of the specified characters.

## Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| text      | The text to be checked.      |
| chars     | List of characters to check. |

## Example

```js
client.command({
  name: "misc",
  code: `
    $checkContains[Hello; H; e; l; l; o] // Returns true
    $checkContains[world; a; b; c]       // Returns false
    $checkContains[%^:#; %; ^; #]        // Returns true
  `,
});
```
