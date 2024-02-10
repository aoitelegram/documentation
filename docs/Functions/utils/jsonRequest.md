# $jsonRequest

Makes a JSON-based HTTP request to the specified API endpoint.

## Parameters

| Parameter    | Description                                              |
| ------------ | -------------------------------------------------------- |
| apiUrl       | URL of the API endpoint to make the request to.          |
| requestData  | JSON object containing data to be sent with the request. |
| property     | Optional. Property to extract from the API response.     |
| errorMessage | Optional. Custom error message to display on failure.    |

## Example

```js
<AoiClient>.addCommand({
  name: "misc",
  code: `
    $jsonRequest[https://api.example.com/data;{ "key": "value" };result;Custom Error Message]
  `,
});
```
