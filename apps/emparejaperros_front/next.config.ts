import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "public",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
