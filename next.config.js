module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: process.env.NEXT_PUBLIC_STRAPI_API_URL + '/admin',
        permanent: true,
      },
    ]
  },
}
