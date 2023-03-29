/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pufler.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
