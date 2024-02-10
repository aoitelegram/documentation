# $comment

A command for adding comments to your code. It doesn't perform any action and serves as a way to include comments in your scripts.

## Parameters

| Parameter | Description              |
| --------- | ------------------------ |
| content   | Content for the comment. |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $comment[This is a comment] // This comment doesn't affect the code execution
    $isBoolean[true]            // This is another comment
    $comment[Adding comments can improve code readability] // Use comments to explain your code
  `,
});
```
