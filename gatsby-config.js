module.exports = {
  siteMetadata: {
    title: "Jullay Ladakhi! | Edson Frainlar Inghyasi",
    author: "Edson Frainlar",
    description: "Know about the Ladakh - A gateway to the Tibet from India. Find the cultural, linguistic, political, geological, and social Information about Ladakh."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
