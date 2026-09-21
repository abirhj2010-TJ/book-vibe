import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //"https://i.ibb.co.com/MprDyVt/51-BIA4rrae-L-AC-UF1000-1000-QL80.jpg"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        
        
      },
    ],
  },
};

export default nextConfig;
