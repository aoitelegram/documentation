# $packageDependencies

Retrieves the list of dependencies from the package.json file.

## Parameters

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| separator | Optional. The separator to use between dependencies. Default is ", " |

## Example

```js
<AoiClient>.addCommand({
  name: "list-dependencies",
  code: `
    $packageDependencies[; ]
   `,
});
```