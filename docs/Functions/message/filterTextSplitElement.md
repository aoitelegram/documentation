# $filterTextSplitElement

## Usage

Filters elements from the array resulting from the `$textSplit` command based on a query and filtering type.

## Parameters

| Field      | Description                                               |
| ---------- | --------------------------------------------------------- |
| query      | The query to filter elements by                           |
| type       | The type of filtering (`equal`, `starts`, `ends`, `includes`) (default: `equal`) |
| separator  | The separator used to split the text array (default: ",") |

## Example

```javascript
<AoiClient>.addCommand({
  name: "filterTextSplitElement",
  code: `$filterTextSplitElement[query;type;separator]`,
});
```