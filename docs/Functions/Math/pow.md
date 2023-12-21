# $pow

Returns `main` raised to a power `index`, that is, the value of the expression

## Parameters

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| base      | Degree base.                                                |
| exponent  | An indicator of the degree to which the base is raised base |

## Example

```js
client.command({
  name: "math",
  code: `
    $replyMessage[$pow[6;100]]
   `,
});
```
