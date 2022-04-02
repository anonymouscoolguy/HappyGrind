// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HappyGrind",
  tagline: "We make boring stuff cool!",
  url: "https://happygrind.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "anonymouscoolguy", // GitHub org/user name.
  projectName: "happygrind", // Repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/anonymouscoolguy/HappyGrind/blob/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/anonymouscoolguy/HappyGrind/blob/master/",
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
        title: "HappyGrind",
        logo: {
          alt: "Cool unloaded logo",
          src: "img/logo.svg",
          srcDark: "img/dark-logo.svg",
        },
        hideOnScroll: true /* Hide navbar when scrolling down. */,
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guides",
          },
          {
            to: "https://ce.happygrind.com/",
            label: "Coding Exercises",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/anonymouscoolguy/HappyGrind",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Guides",
            items: [
              {
                label: "System Fundamentals",
                to: "/docs/intro",
              },
              {
                label: "Computer Organization",
                to: "/docs/intro",
              },
              {
                label: "Networks",
                to: "/docs/intro",
              },
              {
                label: "Computational Thinking",
                to: "/docs/intro",
              },
              {
                label: "Abstract Data Structures",
                to: "/docs/intro",
              },
              {
                label: "Resource Management",
                to: "/docs/intro",
              },
              {
                label: "Control",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/",
              },
              {
                label: "Contributers",
                href: "https://www.youtube.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Coding Exercises",
                href: "https://ce.happygrind.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HappyGrind, Inc. Built with Docusaurus.`,
      },
      hideableSidebar: true /* Make the sidebar hideable. */,
      autoCollapseSidebarCategories: true /* Auto collapse sidebar categories when another one is open. */,
      /* Announcement bar */
      announcementBar: {
        id: "support_us",
        content:
          "<b>🎉 If you believe in this project consider <a href='https://github.com/anonymouscoolguy/HappyGrind'>contributing</a> with your awesome knowledge. 💻</b>",
        backgroundColor: "#ffb703",
        textColor: "#ffffff",
        isCloseable: true,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
