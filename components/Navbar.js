import Link from "next/link"
import NextImage from "./Image"

const Navbar = ({ locale, preview }) => {
  const previewMode = preview &&
    <Link href="/api/preview?clear=true" prefetch={false}><a className="ml-3 font-semibold text-sm text-indigo-500">Disable Preview Mode</a></Link>;

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
          <Link href="/" locale="en-CA"><a className="ml-3 font-semibold text-sm text-indigo-500">Change to Canada</a></Link>
          : <Link href="/" locale="en-US"><a className="ml-3 font-semibold text-sm text-indigo-500">Change to US</a></Link>}
      </div>
      <div className="flex items-center">
        {previewMode}
      </div>
      <div className="flex items-center">
        <a className="ml-3 font-semibold text-sm text-indigo-500" href="/admin" target="_blank">Go to CMS</a>
      </div>
    </div>
  )
}

export default Navbar
