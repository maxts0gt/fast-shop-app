/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_API_KEY: process.env.SHOPIFY_STOREFRONT_API_KEY,
    SHOPIFY_STOREFRONT_API_SECRET_KEY:
      process.env.SHOPIFY_STOREFRONT_API_SECRET_KEY
  },
  images: {
    domains: ['cdn.shopify.com']
  }
}

module.exports = nextConfig
