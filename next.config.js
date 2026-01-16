
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'CSS-HTML-JS-Portfoilo'; // Change if your repo name is different

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
};

module.exports = nextConfig;
