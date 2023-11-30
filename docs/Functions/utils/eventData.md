# $eventData
Returns the object of the current event.

## Parameters
| Parameter | Description |
| --------- | ------------ |
| path | Path to the value (optional) |

## Example
```js
client.messageCommand({
  code: `
    $print[$eventData]
    $print[$eventData[from.username]]
   `
})
```