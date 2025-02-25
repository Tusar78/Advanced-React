import React from "react";

const ShoppingCarts = ({ handleCart, products }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {products.map((product) => {
        return (
          <div key={product.id} className="border p-1.5 border-green-200 rounded">
            <h3 className="text-xl text-gray-400 text-center">
              {product.name}
            </h3>
            <p className="bg-red-100 text-red-400 inline">Price: {product.price}৳</p>
            <p>Available: {product.stock}</p>
            <button className="bg-green-100 text-green-700 px-6 py-1.5 rounded mt-2 cursor-pointer" onClick={() => {
              handleCart(product)
            }}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCarts;
