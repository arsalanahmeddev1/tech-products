// app/product/[slug]/page.jsx
import { client, urlFor } from '@/lib/client';
import Product from '@/sanity/schemaTypes/product';
import { Minus, Plus, Star } from 'lucide-react';
import {AppContext} from '@/context/StateContext';
export async function generateStaticParams() {
  const query = `*[_type == "product"]{ slug }`;
  const products = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductDetails({ params}) {
  const query = `*[_type == "product" && slug.current == $slug][0]`;
  const product = await client.fetch(query, { slug: params.slug });
  // const {incQty,decQty, qty} = AppContext();
  if (!product) {
    return <p>Product not found</p>;
  }

  const { image, name, details, price } = product;

  return (
    <div className='product-detail-container'>
      <div>
        <div className='image-container'>
          {image && (
            <img 
              src={urlFor(image[0])} 
              alt={name} 
              className='product-image' 
            />
          )}
        </div>
      </div>
        <div className='product-detail-desc'>
        <h1>{name}</h1>
        <div className='reviews'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        </div>
        <p>(20)</p>
        <h4>Details:</h4>
        <p>{details}</p>
        <p className='price'>Price: ${price}</p>
        <div className='quantiy'>
          <h3>Quantity</h3>
          <p className='quantity-desc'>
            <span className='minus' onClick><Minus /></span>
            <span className='num' >0</span>
            <span className='plus'><Plus /></span>
          </p>
        </div>
        <div className="buttons">
          <button type='button' className='add-to-cart' onClick>Add to Cart</button>
          <button type='button' className='buy-now' onClick>But Now</button>
        </div>
        </div>
        {/* <div className="mylike-products-wrapper">
          <h2>you may like </h2>
          <div className="marquee">
            <div className="mylike-products-container">
                {products.map((item) => (
                  <Product key={item.id} 
                  product={item}
                  />
                ))}
            </div>
          </div>
        </div> */}
    </div>
  );
}
