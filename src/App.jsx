import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
  const [cart, setCart] = useState({ 1: 2, 3: 1 });

  // ✅ Protect routes
  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      {/* Hide NavBar on login/signup */}
      {window.location.hash !== "#/login" &&
        window.location.hash !== "#/signup" && <NavBar cart={cart} />}

      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductDetailPage cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <YourOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/track/:orderId"
            element={
              <ProtectedRoute>
                <TrackOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/login-security"
            element={
              <ProtectedRoute>
                <LoginSecurity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/address"
            element={
              <ProtectedRoute>
                <YourAddress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/payment"
            element={
              <ProtectedRoute>
                <PaymentOptions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/payment/upi"
            element={
              <ProtectedRoute>
                <UPI />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/deals"
            element={
              <ProtectedRoute>
                <Deals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer-service"
            element={
              <ProtectedRoute>
                <CustomerService />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registry"
            element={
              <ProtectedRoute>
                <Registry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gift-cards"
            element={
              <ProtectedRoute>
                <GiftCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sell"
            element={
              <ProtectedRoute>
                <Sell />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
