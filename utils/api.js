export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);

  const data = await response.json();
  return data;
}

export async function getProducts(locale = 'en-US') {
  if (locale == 'en-US') {
    locale = 'en';
  }
  const products = await fetchAPI(`/products?_locale=${locale}`);
  return products;
}

export async function getProduct(slug, locale = 'en-US') {
  if (locale == 'en-US') {
    locale = 'en';
  }
  console.log(slug, locale);
  const products = await fetchAPI(`/products?_locale=${locale}&slug=${slug}`);
  console.log(products);
  return products?.[0];
}
