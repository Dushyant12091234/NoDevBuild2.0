import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this configuration to handle the 3D library
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },
};

export default nextConfig;