import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/setup",
        destination: "/setup",
        permanent: true,
      },
      {
        source: "/services/maintenance",
        destination: "/maintenance",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/maintenance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
