const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Prevent `fs` module not found error during build for server-side only packages
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
