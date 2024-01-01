# $hour

This function returns the current hour of the day (in local time).

## Example

```js
client.command({
  name: "getHour",
  code: `
    $hour
  `,
});
```