import Head from 'next/head'
import { fromImageTOUrl, API_URL } from '../../Components/Utils/urls'


const Product = ({ product }) => {
    return (
        <div>
            <Head>
                {product.meta_title &&
                    <title> {product.meta_title}</title>
                }
                {product.meta_description &&
                    <meta name="description" content={product.meta_description} />
                }
            </Head>

            <h3>
                {product.name}
            </h3>
            <img src={fromImageTOUrl(product.image)} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <p>
                {product.content}
            </p>
        </div>

    )
}
export async function getStaticProps({params: {slug} }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found[0] //Because the API response for filters is an array
        }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()

    //Return them to NextJS context
    return{
        paths: products.map(products => ({
            params: { slug: String(products.slug) }
        })),
        fallback: false //Tells to nextjs to show a 404 if the param doesnt match
    }

}
export default Product