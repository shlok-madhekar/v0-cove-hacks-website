/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/prospectus",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
