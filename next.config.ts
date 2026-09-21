import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-4844509e4b6a42b0b241ac9656d88a95.r2.dev",
      },
    ],
  },
};

export default nextConfig;
