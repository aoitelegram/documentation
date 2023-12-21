# $exec

Will execute given code in your console

## Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| code      | Code to execute in your console |

## Example

```js
client.command({
  name: "exec",
  code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `,
});
```
