// import product from "@/sanity/schemaTypes/product";
import {client} from "@/lib/client";
import Image from "next/image";
import { Product,FooterBanner,HeroBanner, Footer } from "@/components";


export default async function Home  ()  {
  const products = await client.fetch('*[_type == "product"]') || [];
  const bannerData = await client.fetch('*[_type == "banner"]') || [];
  const footerBanner = await client.fetch('*[_type == "banner"]') || [];
   return (
    <>
    <HeroBanner heroBanner={bannerData. length ? bannerData[0] : null}/>
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers Of my Varient</p>
    </div>
    <div className="products-container">
      {products?.map(
        (product) => <Product key=
        {product.id} product={product}/>
      )}
    </div>
    <FooterBanner footerBanner={footerBanner.length ? footerBanner[0] : null}/>
    </>
   )
}


