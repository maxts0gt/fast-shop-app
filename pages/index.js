import ProductCard from "../components/ProductCard"
import { getAllProducts } from "../lib/shopify"

export default function Home({ products }) {

  console.log(products);
  return (
    <div className="text-3xl">
      Hello from Shopify Next.js
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products }, // will be passed to the page component as props
  }
}