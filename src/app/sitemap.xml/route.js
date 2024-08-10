import fetchSlugs from "../../../utils/fetchSlugs";
import fs from 'fs';
import path from 'path';

const WEBSITE_URL = process.env.WEBSITE_URL;

// Function to recursively read routes from the src/app directory
const readRoutes = (dir, baseUrl = '') => {
    let routes = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            if (item !== 'node_modules' && !item.startsWith('.')) {
                routes = routes.concat(readRoutes(itemPath, `${baseUrl}/${item}`));
            }
        } else if (stat.isFile()) {
            // Filter out unwanted files
            if (item === 'robots.txt' || item === 'sitemap.xml' || item === 'layout.js') {
                continue;
            }

            if (item === 'page.js') {
                // Treat 'page.js' as index and push base route
                routes.push(baseUrl);
            } else if (item.endsWith('.js')) {
                // Convert file name to route path
                routes.push(`${baseUrl}/${item.replace('.js', '')}`);
            }
        }
    }
    return routes;
};

const renderXML = (slugs, appRoutes) => {
    const url = WEBSITE_URL;
    // Define the homepage entry
    const homepageEntry = `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${homepageEntry}${slugs
        .filter(Boolean)
        .map((item) => `<url>
    <loc>${url}/${item.slug}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${item.priority}</priority>
  </url>`)
        .join('')}
  ${appRoutes
        .filter((route) => !route.includes('robots.txt') && !route.includes('sitemap.xml') && !route.includes('/layout'))
        .map((route) => `<url>
    <loc>${url}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`)
        .join('')}
</urlset>`;
};

export async function GET() {
    const slugs = await fetchSlugs();

    // Read routes from the src/app directory
    const appRoutes = readRoutes(path.join(process.cwd(), 'src', 'app'));

    return new Response(renderXML(slugs, appRoutes), {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "x-content-type-options": "nosniff",
            "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
        },
    });
}
