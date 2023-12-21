# $modulo

Returns operation / the remainder when dividing.

## Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| number    | Number to return the remainder of |
| number    | Number to return the remainder of |

## Example

```js
client.command({
  name: "math",
  code: `
    $replyMessage[$modulo[16;6]]
   `,
});
```
