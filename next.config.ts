import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH,
    // basePath: process.env.NODE_ENV === "production" ? "/my_portfolio" : "",
    // assetPrefix: process.env.NODE_ENV === "production" ? "/my_portfolio" : "",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
