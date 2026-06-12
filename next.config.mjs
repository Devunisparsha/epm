/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/epm",
  
  // Static export for GitHub Pages (no server-side image optimization)
  images: {
    unoptimized: true,
  },
  
  // Enable React strict mode for better performance debugging
  reactStrictMode: true,
  
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable experimental features for better performance
  // experimental: {
  //   optimizeCss: true, // Requires 'critters' package
  // },
  
  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
