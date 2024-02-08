/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//   siteMetadata: {
//     title: `community-event`,
//     siteUrl: `https://www.yourdomain.tld`
//   },
//   plugins: ["gatsby-plugin-sitemap"]
// };

// In your gatsby-config.js
module.exports = {
  // Other configurations...
  developMiddleware: app => {
    app.use(
      "/api",
      proxy({
        target: "http://localhost:8080",
      })
    );
  },
};
