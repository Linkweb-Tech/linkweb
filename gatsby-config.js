const { createProxyMiddleware } = require("http-proxy-middleware") //v1.x.x
// Use implicit require for v0.x.x of 'http-proxy-middleware'
// const proxy = require('http-proxy-middleware')
// be sure to replace 'createProxyMiddleware' with 'proxy' where applicable

module.exports = {
  siteMetadata: {
    siteUrl: `https://linkweb.fr`,
    title: `Linkweb`,
    description: `Linkweb, agence web de création de site internet à Agen (47) et Toulouse (31).`,
    author: `@AgenceLinkweb`
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1328423824640421",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        url: "https://api.linkweb.fr/graphql/",
        html: {
          useGatsbyImage: true,
        },
        debug: {
          preview: true,
        },
       
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Linkweb`,
        short_name: `Linkweb`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/lw.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WJMB7VQ",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/blog-sitemap.xml`,
    //     // Exclude specific pages or groups of pages using glob parameters
    //     // See: https://github.com/isaacs/minimatch
    //     // The example below will exclude the single `path/to/page` and all routes beginning with `category`
    //     exclude: [`/blog/*`],
    //     query: `
    //     {
    //       allSitePage {
    //         nodes {
    //           path
    //         }
    //       }
    //   }`,
    //     resolveSiteUrl: ({ site, allSitePage }) => {
    //       //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
    //       return 'https://linkweb.fr'
    //     },
    //     serialize: ({ site, allSitePage }) =>
    //       allSitePage.nodes.map(node => {
    //         return {
    //           url: `https://linkweb.fr${node.path}`,
    //           changefreq: `daily`,
    //           priority: 0.7,
    //         }
    //       })
    //   }
    // }, 
    {
      resolve: `gatsby-plugin-sitemap`,
      // options: {
      //   output: `/page-sitemap.xml`,
      //   // Exclude specific pages or groups of pages using glob parameters
      //   // See: https://github.com/isaacs/minimatch
      //   // The example below will exclude the single `path/to/page` and all routes beginning with `category`
      //   query: `
      //   {
      //     post: allWpPost {
      //       nodes {
      //         path
      //         slug
      //       }
      //     }
      //   }`,
      //   resolveSiteUrl: (post) => {
      //     //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
      //     return 'https://linkweb.fr/blog'
      //   },
      //   serialize: (post) => {
      //     post.nodes.map(node => {
      //       return {
      //         url: `https://linkweb.fr/blog${node.path}`,
      //         changefreq: `daily`,
      //         priority: 0.7,
      //       }
      //     })
      //   }
      // }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43540005-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    
    
    // {
    //   resolve: `gatsby-plugin-tawk.to`,
    //   options: {
    //     tawkId: "6082b1a662662a09efc16b50/1f3v8bsdq",
    //     // get this from the tawk script widget
    //   },
    // }
  ]
};
