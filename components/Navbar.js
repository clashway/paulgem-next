import Link from "next/link"
import NextImage from "./Image"

const Navbar = ({ locale }) => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <NextImage
            src="/strapi.png"
            alt="home"
            className="logo"
            height="44"
            width="150"
          />
        </a>
      </Link>
      <div className="flex items-center">
        {locale === 'en-US' ?
          <a className="ml-3 font-semibold text-sm text-indigo-500" href="/en-CA">Change to Canada</a>
          : <a className="ml-3 font-semibold text-sm text-indigo-500" href="/">Change to US</a>}
      </div>
      <div className="flex items-center">
        <a className="ml-3 font-semibold text-sm text-indigo-500" href="/admin">Go to CMS</a>
      </div>
    </div>
  )
}

export default Navbar
