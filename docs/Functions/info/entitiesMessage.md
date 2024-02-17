# $entitiesMessage

## Usage

Retrieves a specific property of an entity from a message.

## Parameters

| Field | Description                                         |
| ----- | --------------------------------------------------- |
| index | The index of the entity to retrieve (zero-based)    |
| path  | Optional path to the property to retrieve (default: "type") |

## Example

```javascript
<AoiClient>.addCommand({
  name: "entitiesmessage",
  code: `$replyMessage[$entitiesMessage[0;type]]`,
});
```