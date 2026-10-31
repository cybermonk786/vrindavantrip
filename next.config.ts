import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allowedDevOrigins: ['10.167.116.247'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;