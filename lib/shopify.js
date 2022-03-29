const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN




async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-01/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })

    return data
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  const query = `{
  collection(handle: "frontpage") {
    title
    products(first: 2) {
      edges {
        node {
          id
          title
          handle
          images(first: 5) {
            edges {
              node{
                url
                altText
              }
            }
          }
        }
      }
    }
  }
}`

  const response = await ShopifyData(query)

  const allProducts = response.data.collection.products.edges ? response.data.collection.products.edges : []

  return allProducts
}