export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  console.log(`requestUrl: (${requestUrl})`);
  const response = await fetch(requestUrl);

  const data = await response.json();
  return data;
}

function getLocaleParam(locale) {
  return `_locale=${locale}`;
}
function getSlugParam(slug) {
  return `slug=${slug}`;
}
function getStatusParam(preview) {
  return `status=published${preview ? "&status=draft" : ''}`;
}

export async function getProducts(locale = 'en-US') {
  if (locale == 'en-US') {
    locale = 'en';
  }

  const _locale = getLocaleParam(locale);

  const products = await fetchAPI(`/products?${_locale}`);

  return products;
}

export async function getProduct(slug, locale = 'en-US', preview) {
  if (locale == 'en-US') {
    locale = 'en';
  }

  const _status = getStatusParam(preview);
  const _slug = getSlugParam(slug);
  const _locale = getLocaleParam(locale);

  const products = await fetchAPI(`/products?${_locale}&${_status}&${_slug}`);

  return products?.[0];
}


export async function getPageData({ slug, locale = 'en-US', preview = false }) {
  const _slug = getSlugParam(slug);
  const _status = getStatusParam(preview);
  const _locale = getLocaleParam(locale);

  const URL = `/products?${_slug}&${_locale}&${_status}`;

  const pagesData = await fetchAPI(URL);

  return pagesData?.[0];
}