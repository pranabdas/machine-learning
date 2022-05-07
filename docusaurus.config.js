/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
/** @type {import('@docusaurus/types').Config} */
async function config() {
  const katex = (await import("rehype-katex")).default;
  return {
    title: "Machine Learning",
    tagline: "My machine learning and data science journey",
    url: "https://pranabdas.github.io",
    baseUrl: "/machine-learning/", // must have a trailing "/"
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "pranabdas", // Usually your GitHub org/user name.
    projectName: "Machine Learning", // Usually your repo name.
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        metadata: [{name: 'theme-color', content: '#006bb3'}],
        prism: {
          theme: require("prism-react-renderer/themes/github"),
          darkTheme: require("prism-react-renderer/themes/nightOwl"),
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          }
        },
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
          hideOnScroll: true,
          logo: {
            alt: "Logo",
            src: "img/favicon.ico",
          },
          items: [
            {
              to: "/",
              label: "Docs",
              position: "left",
              items: [
                {
                  label: "Machine Learning",
                  to: "/",
                },
                {
                  label: "~ ~ ~ Other Docs ~ ~ ~",
                  to: "https://pranabdas.github.io/docs/",
                  target: "_self",
                },
                {
                  label: "ARPES Python Tools",
                  to: "https://pranabdas.github.io/arpespythontools/",
                  target: "_self",
                },
                {
                  label: "Condensed Matter Notes",
                  to: "https://pranabdas.github.io/condmat-notes/",
                  target: "_self",
                },
                {
                  label: "Fortran Programming",
                  to: "https://pranabdas.github.io/fortran/",
                  target: "_self",
                },
                {
                  label: "Javascript Tutorial",
                  to: "https://pranabdas.github.io/javascript/",
                  target: "_self",
                },
                {
                  label: "Linux Tutorial",
                  to: "https://pranabdas.github.io/linux/",
                  target: "_self",
                },
                {
                  label: "OpenMX tutorial",
                  to: "https://pranabdas.github.io/openmx/",
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
                  label: "SUV ARPES Manual",
                  to: "https://pranabdas.github.io/arpes-manual/",
                  target: "_self",
                },
                {
                  label: "SUV Python Tools",
                  to: "https://pranabdas.github.io/suvtools/",
                  target: "_self",
                },
              ],
            },
            {
              to: "https://pranabdas.github.io",
              "aria-label": "About me",
              position: "right",
              target: "_self",
              className: "header-homepage-link",
              title: "Pranab's Homepage",
            },
            {
              href: "https://github.com/pranabdas/machine-learning",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
              title: "Visit project repository in GitHub",
            },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
        },
      }),

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/",
            // Please change this to your repo.
            editUrl:
              "https://github.com/pranabdas/machine-learning/blob/main/",
            remarkPlugins: [math],
            rehypePlugins: [katex],
            // breadcrumbs: false,
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themes: [
      [
        // https://github.com/easyops-cn/docusaurus-search-local
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          docsRouteBasePath: "/",
          indexBlog: false,
          indexPages:true,
          highlightSearchTermsOnTargetPage: true,
        },
      ],
    ],

    stylesheets: [
      {
        href: "https://pranabdas.github.io/drive/webfonts/katex/katex.min.css",
        type: "text/css",
      },
    ],
  };
}

module.exports = config;
