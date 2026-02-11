import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/index.html', // The path you want to redirect from (e.g., your old index.html)
        destination: '/',    // The path you want to redirect to (e.g., your main page)
        permanent: true,     // Set to true for a permanent 301 redirect, false for a temporary 302
      },
      // You can add more redirect rules here if needed
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
