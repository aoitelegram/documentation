# MongoDB

Starting from `aoitelegram@0.6.0` and above, `aoitelegram` supports an additional built-in database, namely `mongodb`.

## Configuration

```javascript
const bot = new AoiClient({
  token: "....",
  database: {
    type: "MongoDB",
    url: "mongodb+srv://...",
    tables: ["main"]
  }
})
```

## URL

To obtain the `URL` for connection, you need to sign up at `https://cloud.mongodb.com/` and create a database accordingly. Afterward, follow these steps:

![MongoDB](/img/mongodb_1.jpg)
![MongoDB](/img/mongodb_2.jpg)
![MongoDB](/img/mongodb_3.jpg)

## Server Connection Timeout

- Ensure that you have allowed ALL IPs to connect to your MongoDB server.
  - Navigate to `Security` -> `Network Access` -> `Allow all IPs`

![MongoDB](/img/mongodb_4.png)