/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
});

module.exports = nextConfig;
