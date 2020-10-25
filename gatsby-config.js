module.exports = {
  siteMetadata: {
    title: 'Breno Baptista',
    description: 'This website is the portfolio of the web developer Breno Baptista',
    author: 'Breno Baptista',
    siteUrl: 'https://brenobaptista.github.io'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-feed-mdx',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-vscode'
          },
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-smartypants'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/static/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolio Website of Breno Baptista',
        short_name: 'Breno Baptista',
        start_url: '/',
        background_color: '#ffdd57',
        theme_color: '#ffdd57',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-146454458-1',
        anonymize: true,
        respectDNT: true
      }
    }
  ]
}
