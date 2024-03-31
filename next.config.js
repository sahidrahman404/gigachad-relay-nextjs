/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      // This should match relay.config.js
      src: "./",
      artifactDirectory: "src/queries/__generated__",
      language: "typescript",
      eagerEsModules: false,
    },
  },
  images: {
    unoptimized: true,
  },
  output: "standalone",
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /lib\/server/ }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
