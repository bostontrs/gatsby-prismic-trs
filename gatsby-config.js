require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Prist | Gatsby & Prismic Starter`,
        description: `A starter powered by Gatsby and Prismic to showcase portfolios and blogs.`,
    author: `Marguerite Roth | marguerite.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
          accessToken: process.env.PRISMIC_ACCESS_TOKEN,
          linkResolver: () => post => `/${post.uid}`,
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/trs_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `gelasio\:300,400,500,700`,
          `roboto`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `voicesofbostontrs`
      }
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
            head: true,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}