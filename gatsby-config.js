module.exports = {
  siteMetadata: {
    title: `Data Porn`,
    description: `Get mind blown`,
    author: `@mirzafaizan`,
    // siteUrl: `https://dataporn.cc`

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Data Porn`,
        short_name: `dataporn`,
        start_url: `/`,
        background_color: `#0000ff`,
        theme_color: `#0000ff`,
        display: `standalone`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-167052577-1",
      },
    },
  ],
}
