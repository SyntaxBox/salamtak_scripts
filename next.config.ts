import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/publications",
        destination: "/publications/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
