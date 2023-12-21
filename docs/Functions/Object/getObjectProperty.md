# $getObjectProperty

Returns the value located in the object.

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| object    | Object to search within |
| path      | Path to the value       |

## Example

```js
client.command({
  name: "object",
  code: `
    $let[object;{ "message": { "message" : true } }]
    $print[$getObjectProperty[$get[object];message]]
    $print[$getObjectProperty[$get[object];message.message]]
   `,
});
```
