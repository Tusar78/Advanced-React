import React from "react";
import './Product.css'

const Product = ({ product: { image, category, title, price } }) => {
  console.log(image);

  return (
    <div className="product__item">
      <div className="product__img--wrap">
        <img src={image} alt="" className="product__img" />
      </div>
      <div className="product__body">
        <span className="product__category">{category}</span>
        <h3 className="product__title">{title}</h3>
        <p className="product__price">Price <span>${price}</span></p>
        <button className="product__cart">Add Cart</button>
      </div>
    </div>
  );
};

export default Product;
