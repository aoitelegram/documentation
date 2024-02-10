# $suppressErrors

This function sets a custom error message to be displayed when errors occur during command execution.

## Parameters

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| text      | The custom error message to be displayed on error. |

## Example

```js
<AoiClient>.addCommand({
  name: "exampleCommand",
  code: `
    $suppressErrors[An error occurred while processing the command.]
    // Your command logic here
  `,
});
```