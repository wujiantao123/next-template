/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    productionBrowserSourceMaps: true,
    swcMinify: false,
    compiler: {
        // removeConsole: process.env.APP_ENV === "prod"
    },
}

module.exports = nextConfig
