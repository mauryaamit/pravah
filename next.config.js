const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Only active in production
  runtimeCaching: [
    {
      // Cache all room pages
      urlPattern: /^https:\/\/pravah-eight-cyan\.vercel\.app\/.*/,
      handler: 'StaleWhileRevalidate', // serve cache instantly, update in background
      options: {
        cacheName: 'pravah-pages',
        expiration: { maxAgeSeconds: 24 * 60 * 60 }, // 24 hours
      },
    },
    {
      // Cache static assets forever
      urlPattern: /\.(?:js|css|woff2|png|svg|ico|jpg|jpeg|gif|webp|ttf)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'pravah-static',
        expiration: { maxAgeSeconds: 30 * 24 * 60 * 60 }, // 30 days
      },
    },
    {
      // Cache Firestore API responses
      urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/,
      handler: 'NetworkFirst', // try network, fallback to cache
      options: {
        cacheName: 'pravah-firestore',
        networkTimeoutSeconds: 3, // if network > 3s, use cache
        expiration: { maxAgeSeconds: 24 * 60 * 60 },
      },
    },
    {
      // Cache ambient sounds:
      urlPattern: /\/sounds\/.*\.mp3$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'pravah-audio',
        expiration: { maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },
    {
      // Cache Google Fonts:
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'pravah-fonts',
        expiration: { maxAgeSeconds: 365 * 24 * 60 * 60 }, // 1 year
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
    optimizePackageImports: [
      'lucide-react',      // tree-shake icons — huge win
      'framer-motion',     // tree-shake animation lib
      'recharts',          // tree-shake charts
    ],
  },
  compress: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'apod.nasa.gov' },
      { protocol: 'https', hostname: 'commons.wikimedia.org' },
      { protocol: 'https', hostname: 'en.wikipedia.org' },
      { protocol: 'https', hostname: 'index.wikimedia.org' },
    ],
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        firebase: {
          test: /[\\/]node_modules[\\/]firebase[\\/]/,
          name: 'firebase',
          chunks: 'all',
          priority: 20,
        },
        framerMotion: {
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          name: 'framer-motion',
          chunks: 'all',
          priority: 20,
        },
      },
    };
    return config;
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
      { source: '/cinema', destination: '/chalchitr', permanent: false },
      { source: '/books', destination: '/kitab', permanent: false },
      { source: '/history', destination: '/itihas', permanent: false },
      { source: '/itihas-bhugoal', destination: '/itihas', permanent: false },
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
