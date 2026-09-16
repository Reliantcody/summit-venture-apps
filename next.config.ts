import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const proxyRoutes = [
      { slug: "golf-pool", host: "https://golf.summitventure.io" },
      { slug: "group-scheduler", host: "https://schedule.summitventure.io" },
      { slug: "loan-tracker", host: "https://loans.summitventure.io" },
      { slug: "asset-tracker", host: "https://assets.summitventure.io" },
      { slug: "travel-tracker", host: "https://travel.summitventure.io" },
      { slug: "komune", host: "https://komune.summitventure.io" },
      { slug: "dashboard", host: "https://dashboard.summitventure.io" },
    ];

    const beforeFiles = proxyRoutes.flatMap(({ slug, host }) => [
      { source: `/${slug}`, destination: `${host}/` },
      { source: `/${slug}/:path*`, destination: `${host}/:path*` },
    ]);

    return { beforeFiles };
  },
};

export default nextConfig;
