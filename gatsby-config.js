/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
      {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: { 
          closeTimeoutMS: 200,
          style: {
            overlay: {
              backgroundColor: `rgba(0, 0, 0, 0.6)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              borderRadius: `none`,
              background: `rgba(0,0,0,1)`,
              boxShadow: `0px 11px 28px 0px rgba(0,0,0,0.44)`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              margin: 100,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          }
        },
      }
    },
  ],
}