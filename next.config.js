/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "build",
  output: "export",
  basePath: "/suresmart",
};

module.exports = nextConfig;
