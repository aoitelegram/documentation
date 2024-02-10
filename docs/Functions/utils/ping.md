# $ping

Performs a ping operation to measure response time.

## Parameters

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| target    | Optional. Specifies the target to ping. Values can be "client" or "db". Default is "client". |

## Example

```js
<AoiClient>.addCommand({
  name: "ping",
  code: `
    $ping
   `,
});
```