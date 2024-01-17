# Classes Options

## AoiClient

| Option                  | Description                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `token`                 | The token for authentication.                                                       |
| `telegram`              | Options for the Telegram integration (See `TelegramOptions` below).                  |
| `database`              | Options for the database (See `DatabaseOptions` below).                              |
| `disableFunctions`      | Functions that will be removed from the library's loading functions (string array). |
| `customFunction`        | An array of custom functions (See `DataFunction[]` below).                            |
| `functionError`         | For the error handler of functions (boolean).                                       |
| `sendMessageError`      | To disable text errors (boolean).                                                   |
| `disableAoiDB`          | Disabled built-in database (boolean, optional).                                      |
| `logging`               | Outputting system messages to the console (boolean, optional).                       |
| `autoUpdate`            | Checks for available package updates and performs an update if enabled (boolean, optional). |

## Additional Types

### TelegramOptions

Configuration options for interacting with the Telegram API.

| Option            | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `limit`           | The maximum number of updates to fetch at once. Defaults to 100 (number).      |
| `timeout`         | The timeout for long polling in seconds. Defaults to 60 seconds (number).      |
| `allowed_updates` | An array of allowed update types to receive. Defaults to all updates.          |
| `session`         | An optional session object for managing user sessions (unknown type).          |

### KeyValueOptions

Configuration options for the KeyValue database connection.

| Option      | Description                                  |
| ----------- | -------------------------------------------- |
| `path`      | The file path to the database storage (string).|
| `tables`    | An array of table names within the database (string array). |
| `extname`   | The file extension name used for the database file (string). |
| `logging`   | Log ready database (boolean).                 |

### MongoDBManagerOptions

Configuration options for the MongoDB database connection.

| Option      | Description                                  |
| ----------- | -------------------------------------------- |
| `url`       | MongoDB connection URL (string).              |
| `tables`    | An array of table names within the database (string array). |
| `logging`   | Log ready database (boolean).                 |

### DatabaseOptions

General database options for AoiClient.

| Option      | Description                                  |
| ----------- | -------------------------------------------- |
| `type`      | Type of the database ("MongoDB" or "KeyValue").|
|            | Further options depend on the selected type.  |

```js
const bot = new AoiClient({
  token: "YOUR_BOT_TOKEN_HERE",
  telegram: {
    /** The maximum number of updates to fetch at once. Defaults to 100. */
    limit: 100,
    /** The timeout for long polling in seconds. Defaults to 60 seconds. */
    timeout: 60000,
    /** An array of allowed update types to receive. Defaults to all updates. */
    allowed_updates: [],
    /** An optional session object for managing user sessions  */
    session: {},
  },
  database: {
    /** The available database type to be used is MongoDB, with KeyValue as the default **/
    type: "KeyValue",
    /** The link for connecting to MongoDB **/
    url: "mongodb+srv:...",
    /** The file path to the database storage. */
    path: "./database/",
    /** An array of table names within the database.*/
    tables: ["main"],
    /** The file extension name used for the database file. */
    extname: ".sql",
  },
  /** Functions that will be removed from the library's loading functions. **/
  disableFunctions: [],
  /** An array of customFunction functions **/
  customFunction: [],
  /** For the error handler of functions **/
  functionError: true,
  /** To disable text errors **/
  sendMessageError: true,
  /** Disabled built-in database. **/
  disableAoiDB: false,
  /** Outputting system messages to the console. **/
  logging: true,
  /** Checks for available package updates and performs an update if enabled (beta) **/
  autoUpdate: {
    /** Displaying messages about new versions. **/
    aoiWarning: true,
    /**  Whether automatic updates are enabled. **/
    autoUpdate: true,
    /** Whether to enable development versions. **/
    enableDev: true,
    /** Whether to enable beta versions. **/
    enableBeta: true,
  },
});
```