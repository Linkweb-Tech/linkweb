module.exports = {
  siteMetadata: {
    siteUrl: `https://linkweb.fr`,
    title: `Linkweb`,
    description: `Linkweb, agence web de création de site internet à Agen (47) et Toulouse (31).`,
    author: `@AgenceLinkweb`
  },
  plugins: [

    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "api.linkweb.fr",
        // The protocol. This can be http or https.
        protocol: "https",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: false,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          //htaccess_user: "your-htaccess-username",
          //htaccess_pass: "your-htaccess-password",
          //htaccess_sendImmediately: false,



          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to wordpress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://api.linkweb.fr",
        //   replacementUrl: "https://new.linkweb.fr/blog",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/categories",
          "**/posts",
          //"**/pages",
          "**/media",
          //"**/tags",
          //"**/taxonomies",
          "**/users",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ["**/posts/1456"],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function ({ entities }) {
          return entities
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
    `gatsby-plugin-page-transitions`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 700
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
      //     post: allWordpressPost {
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
    // yarn 
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43540005-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "linkweb.fr",
      },
    },
  ]
};
