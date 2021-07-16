/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Site de teste`,
    description: `Site para praticar conteúdos do gatsby.`,
    author: `@Thiago`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`, //images
    `gatsby-transformer-sharp`, //images
    `gatsby-plugin-netlify-cms`
  ],
    
}
