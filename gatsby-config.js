require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `The Reef App`,
    siteTitleAlt: `The Reef App - The Coral Restoration Community`,
    siteHeadline: `The Reef App - The Coral Restoration Community`,
    siteUrl: `https://www.thereefapp.com`,
    siteDescription: `Our mission is to empower people and projects working in coral restoration by building a digital community for collaboration and knowledge sharing. Currently in early stage development, signup for news and developments or contact us to join the team`,
    siteLanguage: `en`,
    siteImage: `/rich-link-image.png`,
    author: `@thereefapp`,
    menuLinks:[
      {
        name:'home',
        link:'/#home'
      },
      { 
        name:'projects',
        link:'/#section_projects'
      },
      {
        name:'community',
        link:'/#section_people'
      },
      {
        name:'the team',
        link:'/#section_team'
      },
      {
        name:'contact',
        link:'/#section_contact'
      },
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui'
    },
    'gatsby-plugin-postcss',
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_GTAG_ID,
            // Google Analytics / GA
          //"AW-CONVERSION_ID",
            // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID",
          // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: process.env.GATSBY_GTAG_ID,
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
            id: process.env.GATSBY_TYPEKIT_ID,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
      },
    },
    {
      resolve: "google-map-react",
      options: {
        apiKey: process.env.GATSBY_GMAPS_ID,
      },
    },{
    resolve: `gatsby-source-airtable`,
    options: {
      apiKey: process.env.AIRTABLE_ID, // may instead specify via env, see below
      concurrency: 5, // default, see using markdown and attachments for more information
      tables: [
        {
          baseId: `appP6ja7vhGsjfxWE`,
          tableName: `Projects`,
        },
      ],
    },{
      resolve: 'gatsby-plugin-netlify',
      options: {    
      },
    },
  },
  ].filter(Boolean),
}
