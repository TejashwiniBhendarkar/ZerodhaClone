import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
            if (window.innerWidth >= 992) {
                setIsMenuOpen(false); // Close menu when switching to desktop
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    <img src="media/images/logo.svg" alt="Logo" className="img-fluid" style={{ width: "140px" }} />
                </Link>

                {/* Desktop Navbar Links */}
                {!isMobile && (
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
                        </ul>
                    </div>
                )}

                {/* Menu Button for Mobile */}
                <button className="btn border-0" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            {/* Mega Dropdown Menu */}
            {isMenuOpen && (
                <div className="container-fluid position-absolute bg-white shadow p-4" style={{ top: "60px", width: "100%", zIndex: "1000" }}>
                    <div className="row">
                        {/* Mobile Nav Links (Only in Mobile View) */}
                        {isMobile && (
                            <div className="col-12 mb-3">
                                <ul className="list-unstyled text-center">
                                    <li><Link className="dropdown-item" to="/signup" onClick={closeMenu}>Signup</Link></li>
                                    <li><Link className="dropdown-item" to="/about" onClick={closeMenu}>About</Link></li>
                                    <li><Link className="dropdown-item" to="/products" onClick={closeMenu}>Products</Link></li>
                                    <li><Link className="dropdown-item" to="/pricing" onClick={closeMenu}>Pricing</Link></li>
                                    <li><Link className="dropdown-item" to="/support" onClick={closeMenu}>Support</Link></li>
                                </ul>
                            </div>
                        )}

                        {/* Trading Platforms */}
                        <div className="col-6 p-3">
                            <h6 className="fw-bold">Trading Platforms</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="http://localhost:5174" className="dropdown-item" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                        <img src="/media/images/logo.png" alt="Kite" width="20" /> Kite - Trading
                                    </a>
                                </li>
                                <li><Link to="/console" className="dropdown-item" onClick={closeMenu}><img src="media/images/console.svg" alt="Console" width="20" /> Console</Link></li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="col-6 p-3">
                            <h6 className="fw-bold">Education</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/varsity" className="dropdown-item" onClick={closeMenu}><img src="media/images/var.png" alt="Varsity" width="20" /> Varsity</Link></li>
                                <li><Link to="/tradingQA" className="dropdown-item" onClick={closeMenu}><img src="media/images/trad.png" alt="Trading Q&A" width="20" /> Trading Q&A</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
