// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").github;
const darkCodeTheme = require("prism-react-renderer").vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AoiTelegram",
  tagline: "Documentation",
  favicon: "img/logo-telegramsjs.jpg",
  url: "https://aoitelegram.vercel.app/",
  baseUrl: "/",
  organizationName: "Sempai-07",
  projectName: "AoiTelegram",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Sempai-07/telegramsjs-docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/telegramsjs.jpg",
      announcementBar: {
        id: "join_us",
        content:
          'Like AoiTelegram? Join our <a target="_blank" rel="noopener noreferrer" href="https://t.me/aoitegram">Telegram chat</a>',
        backgroundColor: "#7494ec",
        textColor: "#FFFFFF",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "aoitegram",
        logo: {
          alt: "aoitg logo",
          src: "img/logo-telegramsjs.jpg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Home",
          },
          {
            href: "https://github.com/Sempai-07/aoitelegram",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://npmjs.com/package/aoitelegram",
            label: "NPM",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "aoitegram",
          src: "img/logo-telegramsjs.jpg",
          href: "https://github.com/Sempai-07/aoitelegram",
          width: 60,
          height: 60,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/home",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/sTznMCy6vy",
              },
              {
                label: "Telegram",
                href: "https://t.me/aoitegram",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Sempai-07/aoitelegram",
              },
            ],
          },
        ],
        copyright: `Sempai-07 © ${new Date().getFullYear()}\nLatest changes ${new Date().toLocaleString()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
        searchResultLimits: 20,
      },
    ],
  ],
};

module.exports = config;
