import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/template-portfolio-site",
  trailingSlash: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
