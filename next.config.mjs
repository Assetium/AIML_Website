/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // domains: ["res.cloudinary.com", "picsum.photos"],
    // domains: ["res.cloudinary.com", "picsum.photos"],
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/**',
    },
  ],
  },
};

export default nextConfig;
