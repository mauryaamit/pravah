const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Only active in production
  runtimeCaching: [
    {
      // Cache all page navigations:
      urlPattern: /^https:\/\/pravah-eight-cyan\.vercel\.app\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pravah-pages',
        expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 }, // 24hrs
        networkTimeoutSeconds: 10,
      },
    },
    {
      // Cache static assets (fonts, images, icons):
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico|woff|woff2|ttf)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'pravah-static',
        expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 }, // 30 days
      },
    },
    {
      // Cache ambient sounds:
      urlPattern: /\/sounds\/.*\.mp3$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'pravah-audio',
        expiration: { maxEntries: 20, maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },
    {
      // Cache Google Fonts:
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'pravah-fonts',
        expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 }, // 1 year
      },
    },
    {
      // Firebase — Network First (always try live, fall back to cache):
      urlPattern: /^https:\/\/.*\.firebaseio\.com\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pravah-firebase',
        networkTimeoutSeconds: 5,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 }, // 1 hr
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'apod.nasa.gov' },
      { protocol: 'https', hostname: 'commons.wikimedia.org' },
      { protocol: 'https', hostname: 'en.wikipedia.org' },
    ],
  },
  async redirects() {
    return [
      { source: '/shabda', destination: '/angrezi', permanent: true },
      { source: '/samvaad', destination: '/angrezi', permanent: true },
      { source: '/bhasha', destination: '/angrezi', permanent: true },
      { source: '/prerna', destination: '/noor', permanent: true },
      { source: '/lekh', destination: '/typewriter', permanent: true },
      { source: '/srot', destination: '/sahitya', permanent: true },
      { source: '/bodh', destination: '/darshan', permanent: true },
      { source: '/manas', destination: '/neurolab', permanent: true },
      { source: '/bharati', destination: '/bharat', permanent: true },
      { source: '/duniya', destination: '/vaishwik', permanent: true },
      { source: '/vishwa', destination: '/vaishwik', permanent: true },
      { source: '/vibhav', destination: '/vyaktiva', permanent: true },
      { source: '/vyakti', destination: '/vyaktiva', permanent: true },
      { source: '/kathakar', destination: '/kahani', permanent: true },
      { source: '/lekhak', destination: '/write', permanent: true },
      { source: '/sukoon', destination: '/kavitalay', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          { key: 'Service-Worker-Allowed', value: '/' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          { key: 'Content-Type', value: 'application/manifest+json' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
      {
        source: '/icons/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/sounds/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
