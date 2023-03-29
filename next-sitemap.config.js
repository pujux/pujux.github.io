/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: 'https://pufler.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
