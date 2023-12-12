/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
        RAPIDAPI_HOST: process.env.RAPIDAPI_HOST,
    }
}

module.exports = nextConfig
