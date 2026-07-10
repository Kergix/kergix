import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security & minor performance boost
  poweredByHeader: false,
  // Ensure gzip compression is enabled (Vercel usually handles this, but good for custom deployments)
  compress: true,
  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year cache for images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
