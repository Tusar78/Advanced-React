import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState({
    items: [],
    productPrice: 0,
  });

  const addToCart = (product) => {
    setCart({
      items: [...cart.items, product],
      productPrice: cart.productPrice + product.price,
    });
  };

  console.log(cart);

  return (
    <>
      <div>
        <button
          onClick={() => addToCart({ name: "Laptop", price: 500 })}
          className="border px-6 py-2 shadow-2xs cursor-pointer shadow-amber-500 m-4 bg-amber-200"
        >
          Add Laptop ($500)
        </button>
        <button
          onClick={() => addToCart({ name: "Phone", price: 300 })}
          className="border px-6 py-2 shadow-2xs cursor-pointer shadow-amber-500 m-4 bg-amber-200"
        >
          Add Phone ($300)
        </button>
      </div>

      <div>
        {
          cart.items.map(item => {
            return <p>{item.name} - {item.price}</p>
          })
        }

        <p>{cart.productPrice}</p>
      </div>
    </>
  );
};

export default ShoppingCart;
