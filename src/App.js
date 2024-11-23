// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import PrivacyPolicy component
import TermsOfService from './components/TermsOfService'; // Import TermsOfService component
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/menu/:restaurantId" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Adding route for Checkout */}
        <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Adding route for Privacy Policy */}
        <Route path="/terms" element={<TermsOfService />} /> {/* Adding route for Terms of Service */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
