# $if Parsing

Starting from version `0.5.0`, the library will adopt the `$if/$endif/$elseif/$elseIf` syntax. This function will not operate like regular `if` statements in common programming languages. Instead, upon code loading, it will process the condition and then decide what to keep and what to discard.

:::note{.warning}
This `$if` does not have access to the function's context.
:::

## Parameters

| Field     | Type | Description                                               | Required |
| --------- | ---- | --------------------------------------------------------- | :------: |
| condition | any  | The condition to check.                                   |   true   |

## Examples
```js
client.command({
  name: "ifv4",
  code: `
  $if[1==1&&2==1]
  $print[Hello!]
  $elseif[2==3]
  $print[True: 2 == 3]
  $endelseIf
  $else
  $if[1==1] 
  $print[Else]
  $endif
  $endif
  `
})
```