import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductPage from "./landing_page/products/ProductPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Refer from "./landing_page/Refer";
import Career from "./landing_page/Career";
import Login from "./landing_page/login/Login";



const DashboardRedirect = () => {
  window.location.href = "http://localhost:5174"; // Redirects user to dashboard
  return null;
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/Refer" element={<Refer />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        
        {/* Redirecting to Dashboard */}
        <Route path="/dashboard" element={<DashboardRedirect />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
