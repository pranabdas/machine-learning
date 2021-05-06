/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Machine Learning",
  tagline: "My machine learning and data science journey",
  url: "https://pranabdas.github.io",
  baseUrl: "/machine-learning/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "Machine Learning", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    hideableSidebar: true,
    // colorMode: {
    //   defaultMode: "dark",
    //   switchConfig: {
    //     // darkIcon: '☾',
    //     // lightIcon: "☀️"
    //   },
    // },
    navbar: {
      title: "Machine Learning",
      logo: {
        alt: "Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          href: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
        },
        {
          href: "https://github.com/pranabdas/machine-learning",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/machine-learning/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
