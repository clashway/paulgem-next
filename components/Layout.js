import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories, locale, preview }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar locale={locale} preview={preview} />
        <CategoryButtons categories={categories} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
