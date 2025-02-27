import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Logo" className="img-fluid" style={{ width: "140px" }} />
                </Link>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
                    </ul>
                </div>

                {/* Menu Button */}
                <button className="btn border-0" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            {/* Mega Dropdown Menu */}
            {isMenuOpen && (
                <div className="container-fluid position-absolute bg-white shadow p-4" style={{ top: "60px", width: "100%", zIndex: "1000" }}>
                    <div className="row">
                        {/* Trading Platforms */}
                        <div className="col-md-3 p-5">
                            <h6 className="fw-bold">Trading Platforms</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="http://localhost:5174" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                                        <img src="/media/images/logo.png" alt="Kite" width="20" /> Kite - Trading
                                    </a>
                                </li>
                                <li><Link to="https://console.zerodha.com/" className="dropdown-item"><img src="media/images/console.svg" alt="Console" width="20" /> Console</Link></li>

                            </ul>
                        </div>

                        {/* Utilities */}
                        <div className="col-md-3 p-5">
                            <h6 className="fw-bold">Utilities</h6>
                            <ul className="list-unstyled">
                                <li><Link to="https://zerodha.com/brokerage-calculator/#tab-equities" className="dropdown-item">Brokerage Calculator</Link></li>
                                <li><Link to="https://zerodha.com/markets" className="dropdown-item">Markets</Link></li>
                            </ul>
                        </div>

                        {/* Updates */}
                        <div className="col-md-3 p-5">
                            <h6 className="fw-bold">Updates</h6>
                            <ul className="list-unstyled">
                                <li><Link to="https://zerodha.com/z-connect" className="dropdown-item">Z-Connect Blog</Link></li>
                                <li><Link to="https://pulse.zerodha.com" className="dropdown-item">Pulse News</Link></li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="col-md-3 p-5">
                            <h6 className="fw-bold">Education</h6>
                            <ul className="list-unstyled">
                                <li><Link to="https://zerodha.com/varsity" className="dropdown-item"><img src="media/images/var.png" alt="Varsity" width="20" /> Varsity</Link></li>
                                <li><Link to="https://tradingqna.com" className="dropdown-item"><img src="media/images/trad.png" alt="Trading Q&A" width="20" /> Trading Q&A</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
