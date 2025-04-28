/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
            },
        ], // Add patterns for remote images
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
