module.exports = {
  siteMetadata: {
    title: `Luca Pipolo | Web Developer`,
    description: `I love to write elegant and efficient code. Creating a
    performance function, clearly structuring a component, writing an
    effective test. Isn't that art? :)`,
    author: `Luca Pipolo <dev@lucapipolo.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luca Pipolo | Web Developer`,
        short_name: `Luca Pipolo`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `fullscreen`,
        icon: `src/images/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
