import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/objects",      destination: "/talismans",   permanent: true },
      { source: "/objects/:slug", destination: "/talismans/:slug", permanent: true },
      { source: "/materials",    destination: "/atelier",     permanent: true },
      { source: "/spaces",       destination: "/atelier",     permanent: true },
      { source: "/contact",      destination: "/commission",  permanent: true },
    ];
  },
};

export default nextConfig;
