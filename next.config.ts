import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
    // SSR で出力する場合は、こちらを使う
  output: 'export',

  images: {
    unoptimized: true,
  },

  // サブディレクトリで運用する場合は、こちらを使う
  // basePath: '/reactnative', 
  trailingSlash: true,  
};

export default nextConfig;
