# $ram

This function retrieves the memory usage in megabytes for the specified type using the process module.

## Parameters

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| type      | (Optional) The type of memory usage to fetch. Default is "rss". |

## Example

```js
client.command({
  name: "misc",
  code: `
    $ram
    $ram[heapUsed]
  `,
});
```
