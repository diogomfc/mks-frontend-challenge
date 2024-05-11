/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com']
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
