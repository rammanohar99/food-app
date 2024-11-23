import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate the total price by summing up the price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          {/* Display the total price */}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <Link to="/checkout">
            <button>Proceed to Checkout</button> {/* Link to Checkout */}
          </Link>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
