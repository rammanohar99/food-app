// src/components/Checkout.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Change here

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [orderReference, setOrderReference] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate(); // Change here

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const randomRef = Math.floor(100000 + Math.random() * 900000); // Generate a random reference number
    setOrderReference(randomRef);
    setOrderPlaced(true);
    // Optionally, you can reset the form here
    setName('');
    setAddress('');
    setPaymentMethod('Credit Card');
  };

  // Redirect to home page after 5 seconds
  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        navigate('/'); // Change here
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [orderPlaced, navigate]);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {orderPlaced ? ( // Conditional rendering based on orderPlaced state
        <div>
          <h3>Order Placed Successfully!</h3>
          <p>Your reference number is: {orderReference}</p>
          <p>You will be redirected to the home page shortly...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required // Makes the field required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required // Makes the field required
            />
          </label>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option>Credit Card</option>
              <option>PayPal</option>
            </select>
          </label>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
