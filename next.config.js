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
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'en-CA'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
  },
}
