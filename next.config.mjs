/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
          
            pathname: '/img/*',
          },
          {
            protocol: 'https',
            hostname: 'istad.co',
          
            pathname: '/resources/img/*',
          },
        ],
      },
};

export default nextConfig;