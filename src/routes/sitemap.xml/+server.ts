// src/routes/sitemap.xml/+server.ts
import { getAllNavigableItems } from '$lib/stores/nondualityGuideStore';
import type { RequestHandler } from './$types';

const site = 'https://nondualize.org';

// Define your static pages with their priorities and change frequencies
const staticPages = [
  { 
    url: '', 
    changefreq: 'weekly', 
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/guides', 
    changefreq: 'weekly', 
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/about', 
    changefreq: 'monthly', 
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/contact', 
    changefreq: 'monthly', 
    priority: 0.6,
    lastmod: new Date().toISOString().split('T')[0]
  },
  // Section overview pages
  {
    url: '/guides/section-1-the-map',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/guides/section-2-the-pointer',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/guides/section-3-the-living',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/guides/section-4-the-meta',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  }
];

export const GET: RequestHandler = async () => {
  // Get all guide articles
  const guideItems = getAllNavigableItems();
  
  // Generate URLs for all guide articles
  const guidePages = guideItems.map(item => ({
    url: `/guides/${item.path}`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  }));
  
  // Combine static and dynamic pages
  const allPages = [...staticPages, ...guidePages];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};

export const prerender = true;
