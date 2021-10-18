// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Metadev WTF Official Blog",
  tagline: "Sharing all the love for Web3 development",
  url: "https://blog.metadev.wtf",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MetadevWTF", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/MetadevWTF/blog",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
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
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/metadev-square-white.png",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Find us",
            items: [
              {
                label: "Metadev.WTF",
                href: "https://metadev.wtf",
              },
              {
                label: "Github",
                href: "https://github.com/MetadevWTF",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/MetadevWTF",
              },
              {
                label: "Email",
                href: "mailto:metadev.wtf@gmail.com",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                html: "Metadev WTF is a team-of-two company. We build Smart Contract, NFTs, and other Web3 products. We share knowledge about DAPP development.",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metadev WTF. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
