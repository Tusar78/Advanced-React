import React, { useState } from "react";
import ShoppingCarts from "./ShoppingCarts";

const products = [
  {
    id: "P001",
    name: "Wireless Mouse",
    price: 1200,
    category: "Electronics",
    stock: 50,
  },
  {
    id: "P002",
    name: "Mechanical Keyboard",
    price: 3500,
    category: "Electronics",
    stock: 30,
  },
  {
    id: "P003",
    name: "Gaming Chair",
    price: 15000,
    category: "Furniture",
    stock: 15,
  },
  {
    id: "P004",
    name: "Smartphone Stand",
    price: 500,
    category: "Accessories",
    stock: 100,
  },
  {
    id: "P005",
    name: "Noise Cancelling Headphones",
    price: 8000,
    category: "Electronics",
    stock: 20,
  },
  {
    id: "P006",
    name: "USB-C Hub",
    price: 2500,
    category: "Accessories",
    stock: 40,
  },
  {
    id: "P007",
    name: "Fitness Tracker",
    price: 4000,
    category: "Wearables",
    stock: 25,
  },
  {
    id: "P008",
    name: "Wireless Charger",
    price: 1800,
    category: "Accessories",
    stock: 60,
  },
  {
    id: "P009",
    name: "Laptop Cooling Pad",
    price: 2200,
    category: "Electronics",
    stock: 35,
  },
  {
    id: "P010",
    name: "Portable SSD 1TB",
    price: 12000,
    category: "Storage",
    stock: 10,
  },
];

const ShoppingCartWrap = () => {
  const [cart, setCart] = useState({
    items: [],
    price: 0,
  });

  console.log(cart.items);

  const handleCart = (product) => {
    console.log(product.name);

    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, product],
      price: prevCart.price + product.price,
    }));
  };

  return (
    <div>
      <div className="mb-8">
        <p className="text-2xl border-b mb-2">Added Item</p>

        <div>
          <p>Total Price: {cart.price}৳</p>

          <div className="grid grid-cols-3 gap-3">
            {cart.items &&
              cart.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border p-1.5 border-green-200 rounded"
                  >
                    <h3 className="text-xl text-gray-400 text-center">
                      {item.name}
                    </h3>
                    <p className="bg-red-100 text-red-400 inline">
                      Price: {item.price}৳
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <p className="text-2xl border-b mb-2">Product List</p>
      <ShoppingCarts handleCart={handleCart} products={products} />
    </div>
  );
};

export default ShoppingCartWrap;
