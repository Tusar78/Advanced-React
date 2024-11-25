import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
        <section className="products">
            <div className="container">
                <div className="product__head">
                    <h2 className="products__title">My types of product available Here</h2>
                    <p>Product Added: <span>0</span></p>
                </div>
                <div className="products__list">
                    {products.map(product => <Product key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    </>
  );
};

export default Products;
