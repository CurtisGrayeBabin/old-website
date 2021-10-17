module.exports = {
  siteMetadata: {
    siteUrl: "https://www.curtisbabin.com",
    title: "Curtis Babin",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Curtis Babin's website",
        short_name: "Curtis's site",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        icons: [
          {
            src: `/src/images/icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/src/images/icon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/src/images/icon.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/src/images/icon.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/src/images/apple-touch-icon.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LPTSLQBQHN",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    }
  ],
};
