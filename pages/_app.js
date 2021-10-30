import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import "../styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout locale={pageProps.locale} categories={pageProps.categories} preview={pageProps.preview}>
      <Head />
      <Component {...pageProps} />
    </Layout>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi

  // Pass the data to our page via props
  return { ...appProps, pageProps: { path: ctx.pathname, locale: ctx.router.locale } }
}

export default MyApp
