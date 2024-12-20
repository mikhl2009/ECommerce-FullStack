export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  console.log("Request URL:", getStrapiURL(path));

  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?filters\\[Slug\\][$eq]=${slug}`);
  return products?.[0];
}
