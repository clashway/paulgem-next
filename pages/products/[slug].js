import Head from "next/head"
import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"

const ProductPage = ({ product = null }) => {
  if (!product) {
    return <div>Not a valid product</div>;
  }
  return (
    <>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
        <Head>
          <title>{product.title} product</title>
        </Head>
        <div className="rounded-t-lg pt-2 pb-2 m-auto h-40 w-40">
          <NextImage media={product.image} />
        </div>
        <div className="w-full p-5 flex flex-col justify-between">
          <div className="my-4">{product.banner}</div>
          <h4 className="mt-2 font-semibold text-lg leading-tight text-gray-700">
            {product.title}
          </h4>
          <div className="mt-4 text-gray-600">${product.price}</div>
          <div className="mt-8 text-gray-600">{product.description}</div>
        </div>
      </div>

      {product.ingredients && <div className="ingredients mt-8">
        <h4 className="mt-2 font-semibold text-lg leading-tight text-gray-700">Ingredients</h4>
        <p className="mt-8">{product.ingredients}</p>
      </div>}

      {product.how_does_it_work && <div className="how-does-it-work mt-8">
        <h4 className="mt-2 font-semibold text-lg leading-tight text-gray-700">How Does It Work</h4>
        <p className="mt-8">{product.how_does_it_work}</p>
      </div>}

      {product.tasting_notes.length > 0 && <div className="tasting-notes mt-8">
        <h4 className="mt-2 font-semibold text-lg leading-tight text-gray-700">Tasting Notes</h4>
        <div className="notes mt-8 grid grid-cols-3 gap-4">
          {product.tasting_notes.map(note => {
            return (
              <div key={note.id}>
                <div className="mb-4">{note.eyebrow}</div>
                <div className="mb-4">{note.header}</div>
                <div className="mb-2">{note.description}</div>
              </div>
            )
          })}
        </div>
      </div>}
    </>
  )
}

export default ProductPage

export async function getStaticProps({ params, locale, previewData = {} }) {
  const { preview = null } = previewData;

  const product = await getProduct(params.slug, locale, preview);

  return {
    props: { product, preview },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}
