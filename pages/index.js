import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Strapi Next.js E-commerce</title>
      </Head>
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const products = await getProducts(locale)

  console.log(locale);
  return { props: { products }, revalidate: 10 }
}

export default HomePage
