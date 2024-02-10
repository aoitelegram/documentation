# Negative Operators

Starting from `aoitelegram@0.7.0` and above, the `!` operator will be supported. The main purpose of this operator is to turn errors into `undefined`. Errors covered by this operator include argument errors and errors within functions.

## Syntax
```js
$!nameFunction
```

## Example
```js
<AoiClient>.addFunction({
    name: "$err",
    type: "js",
    callback: () => {
        throw new Error("Error");
     },
});

<AoiClient>.addCommand({
    name: "test",
    code: "$print[1: $!err, 2: $!let]" // Output: 1: undefined, 2: undefined
});
```