import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/golf-pool/:path*",
        destination: "https://golf.summitventure.io/:path*",
      },
      {
        source: "/group-scheduler/:path*",
        destination: "https://schedule.summitventure.io/:path*",
      },
      {
        source: "/loan-tracker/:path*",
        destination: "https://loans.summitventure.io/:path*",
      },
      {
        source: "/asset-tracker/:path*",
        destination: "https://assets.summitventure.io/:path*",
      },
      {
        source: "/travel-tracker/:path*",
        destination: "https://travel.summitventure.io/:path*",
      },
      {
        source: "/komune/:path*",
        destination: "https://komune.summitventure.io/:path*",
      },
    ];
  },
};

export default nextConfig;
