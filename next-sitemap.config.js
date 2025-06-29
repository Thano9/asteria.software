/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://asteria.software',
  generateRobotsText: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/server-sitemap-index.xml',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://asteria.software/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    const customPriority = {
      '/': 1.0,
      '/battledex': 0.9,
      '/battledx/privacypolicy': 0.3,
      '/battledx/support': 0.5,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}; 