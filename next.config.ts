import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['image.gramedia.net', 'res.cloudinary.com', 'otimages.com'],
  },
};

export default nextConfig;
