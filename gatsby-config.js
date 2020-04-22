module.exports = {
  siteMetadata: {
    title: `Hatim Murtuza 🤟 Designer and Developer`,
    description: `Hatim is a software engineer, UI designer, and Developer. He builds beautiful, robust, and intuitive web-apps. `,
    author: `Hatim Murtuza`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hatim Murtuza`,
        short_name: `Hatim Murtuza`,
        start_url: `/`,
        background_color: `#fbfbfb`,
        theme_color: `#0075f2`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/404`],
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
  ],
}
