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
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
    },
    hideableSidebar: true,
    // colorMode: {
    //   defaultMode: "dark",
    //   switchConfig: {
    //     // darkIcon: '☾',
    //     // lightIcon: "☀️"
    //   },
    //   respectPrefersColorScheme: true,
    // },
    navbar: {
      title: "Machine Learning",
      logo: {
        alt: "Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "Other Docs",
          position: "left",
          items: [
            {
              label: "ARPES Python Tools",
              to: "https://pranabdas.github.io/arpespythontools/",
              target: "_self",
            },
            {
              label: "Linux Tutorial",
              to: "https://pranabdas.github.io/linux/",
              target: "_self",
            },
            {
              label: "Python Tutorial",
              to: "https://pranabdas.github.io/python-tutorial/",
              target: "_self",
            },
            {
              label: "Quantum Espresso Tutorial",
              to: "https://pranabdas.github.io/espresso/",
              target: "_self",
            },
            {
              label: "SUV Python Tools",
              to: "https://pranabdas.github.io/suvtools/",
              target: "_self",
            },
            {
              label: "Condensed Matter Notes",
              href: "https://pranabdas.github.io/docs/condmat-notes/",
            },
            {
              label: "Fortran Programming",
              href: "https://pranabdas.github.io/docs/fortran/",
            },
            {
              label: "FullProf Tutorial",
              href: "https://pranabdas.github.io/docs/fullprof/",
            },
            {
              label: "Javascript Tutorial",
              href: "https://pranabdas.github.io/docs/js-learning/",
            },
            {
              label: "SUV ARPES Manual",
              href: "https://pranabdas.github.io/docs/arpes-suv-man/",
            },
          ],
        },
        {
          to: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
          target: "_self",
        },
        {
          to: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
          target: "_self",
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
