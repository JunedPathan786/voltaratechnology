/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/voltaratechnology" : "",

  assetPrefix: isProd ? "/voltaratechnology/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
