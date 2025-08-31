import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AdminDashboard from "./components/AdminDashboard";
import YourOrders from "./pages/YourOrders";
import TrackOrder from "./pages/TrackOrder";
import LoginSecurity from "./pages/LoginSecurity";
import YourAddress from "./pages/YourAddress";
import PaymentOptions from "./pages/PaymentOptions";
import ContactUs from "./pages/ContactUs";
import Deals from "./pages/Deals";
import CustomerService from "./pages/CustomerService";
import Registry from "./pages/Registry";
import GiftCards from "./pages/GiftCards";
import Wallet from "./pages/Wallet";
import Sell from "./pages/Sell";
import UPI from "./pages/UPI";

function App() {
  const [cart, setCart] = useState({1: 2, 3: 1}); 

  return (
    <Router>
      
      <NavBar cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<YourOrders />} />
          <Route path="/track/:orderId" element={<TrackOrder />} />
          <Route path="/account/login-security" element={<LoginSecurity />} />
          <Route path="/account/address" element={<YourAddress />} />
          <Route path="/account/payment" element={<PaymentOptions />} />
          <Route path="/account/payment/upi" element={<UPI />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
