module.exports = {
  siteMetadata: {
    title: `VideoBird`,
    description: `Animated explainer videos for sales, brand awareness, and engagement starting at $497.`,
    author: `Dan Koe`,
    siteUrl: 'https://www.videobird.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: `/sitemap.xml`,
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-139580333-1',
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'leadbird.io',
        short_name: 'LeadBird',
        start_url: '/',
        icon: 'src/images/leadbird-favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
        wrapperStyle: `margin-left: 0!important; margin-right: 0!important;`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://thedankoe.us18.list-manage.com/subscribe/post?u=0a4622b59a0781fb3d5ed4723&amp;id=57b4766d79',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '354020558653540',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-remark-copy-linked-files',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-stripe',
    'gatsby-plugin-stripe-checkout',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
}
