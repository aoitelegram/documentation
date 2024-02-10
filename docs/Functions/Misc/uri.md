# $uri

Encodes or decodes a URI component.

## Parameters

| Parameter | Description                          |
| --------- | ------------------------------------ |
| text      | The URI component to encode/decode   |
| type      | Optional. Type of operation (encode/decode). Default is "encode". |

## Example

```js
<AoiClient>.addCommand({
  name: "encode-uri",
  code: `
    $uri[https://example.com]
   `,
});
```