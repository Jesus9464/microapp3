/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, option) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "microapp-3",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./microapp3": "./pages/index.tsx",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
