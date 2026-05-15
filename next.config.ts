import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/sorodriguezz",
  assetPrefix: "/sorodriguezz",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
