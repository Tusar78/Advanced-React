import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import { addToLS, getStoredCart, removeFromLS } from "../../Utils/localstorage";
import Cart from "../Cart/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  

  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToLS(product.id);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  // Load cart from local storage
  useEffect(() => {
    console.log("called the useEffect", products.length);
    if (products.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart, products);

      const saveCart = [];
      for (const id of storedCart) {
        const cart = products.find((product) => product.id === id);
        if (cart) {
          saveCart.push(cart);
        }
      }
      setCart(saveCart);
    }
  }, [products]);

  const handleDelete = id => {
    removeFromLS(id)
    const remainCart = cart.filter(crt => crt.id !== id);
    setCart(remainCart);
  }

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="product__head">
            <h2 className="products__title">
              My types of product available Here
            </h2>
            <Cart cart={cart} handleDelete={handleDelete} />
          </div>
          <div className="products__list">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleCart={handleCart}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
