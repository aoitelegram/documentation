# $parseTime

Parses the specified time string into milliseconds.

## Parameters

| Parameter | Description                            |
| --------- | -------------------------------------- |
| time      | The time string to parse               |
| long      | Optional. Indicates whether to output the result in a long format (true/false). Default is false. |

## Example

```js
<AoiClient>.addCommand({
  name: "parse-time",
  code: `
    $parseTime[1d;true]
   `,
});
```