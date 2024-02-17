# $chatFirstName

## Usage

Retrieves the first name of the user in the current chat.

## Example

```javascript
<AoiClient>.addCommand({
  name: "chatfirstname",
  code: `$replyMessage[$chatFirstName]`,
});
```