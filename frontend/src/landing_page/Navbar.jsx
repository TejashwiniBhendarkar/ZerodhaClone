import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <nav className="navbar navbar-expand-lg border-bottom fixed-top" style={{ backgroundColor: "#FFF", width: "100vw" }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" style={{ width: "60%" }} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${activeTab === "signup" ? "active-tab" : ""}`} 
                                to="/signup" 
                                onClick={() => handleTabClick("signup")}
                            >
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${activeTab === "about" ? "active-tab" : ""}`} 
                                to="/about" 
                                onClick={() => handleTabClick("about")}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${activeTab === "products" ? "active-tab" : ""}`} 
                                to="/products" 
                                onClick={() => handleTabClick("products")}
                            >
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${activeTab === "pricing" ? "active-tab" : ""}`} 
                                to="/pricing" 
                                onClick={() => handleTabClick("pricing")}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${activeTab === "support" ? "active-tab" : ""}`} 
                                to="/support" 
                                onClick={() => handleTabClick("support")}
                            >
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
