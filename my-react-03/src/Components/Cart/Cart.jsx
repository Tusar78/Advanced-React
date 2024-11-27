import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleDelete }) => {
  console.log(cart);

  if (cart.length) {
    return (
      <>
        <div className="cart__wrap">
          <div className="cart__list">
            {cart.map((crt) => (
              <div key={crt.id} className="cart__item">
                <div className="cart__item-head">
                  <div className="cart__imgs">
                    <img src={crt.image} alt="" />
                  </div>
                  <span className="cart__price"> Price: {crt.price}</span>
                </div>
                <button className="cart__remove" onClick={() => handleDelete(crt.id)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
