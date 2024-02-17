# $randomShuffle

## Usage

Randomly shuffles an array and returns a random element.

## Parameters

| Field     | Description                            |
| --------- | -------------------------------------- |
| textArray | Array of elements to shuffle           |

## Example

```javascript
<AoiClient>.addCommand({
  name: "random_shuffle",
  code: `$replyMessage[$randomShuffle[textArray;text1;text2]]`,
});
```