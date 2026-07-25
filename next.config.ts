import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.ltrbxd.com",
      },
      {
        protocol: "https",
        hostname: "s.ltrbxd.com",
      },
      {
        protocol: "https",
        hostname: "i.gr-assets.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
};

export default nextConfig;
