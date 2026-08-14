/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy static/PHP site paths (pre-Vercel). Anything still referencing
      // them — stale caches, bookmarks, external links — resolves cleanly
      // instead of hitting dead files (CORS/403 errors).
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/config.php', destination: '/', permanent: true },
      { source: '/main.js', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/thank-you.html', destination: '/thank-you', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/portfolio.html', destination: '/portfolio', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true }
    ];
  }
};

export default nextConfig;
