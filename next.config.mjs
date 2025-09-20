/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  }
};

export default nextConfig;