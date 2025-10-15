import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // istersen güvenlik için sadece belirli domaini bırak
      },
    ],
  },
};

export default nextConfig;
