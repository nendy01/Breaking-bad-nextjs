/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://www.breakingbadapi.com",
      "images.amcnetworks.com",
      "vignette.wikia.nocookie.net",
      "s-i.huffpost.com",
      "media1.popsugar-assets.com",
      "res.cloudinary.com",
      "i.pinimg.com",
      "static.wikia.nocookie.net",
      "m.media-amazon.com",
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
