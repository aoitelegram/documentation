# AoiTelegram Version Notifications and Auto-Update

`aoitelegram`, much like `aoi.js`, supports options for automatic version updates or notifications about new package versions. This can be convenient when a minor version with bug fixes is released, and the library updates itself upon bot startup.

:::note{.warning}
To enable this feature, you need to specify the `aoiWarning` and `autoUpdate` parameters in the `AoiClient` constructor.
```js
const bot = new AoiClient({
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
:::

## Examples

![Aoi Warning 1](/img/warning_scrin_1.jpg)
![Aoi Warning 2](/img/warning_scrin_2.jpg)