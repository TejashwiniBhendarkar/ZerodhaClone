import React from "react";
import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)", width: "100vw" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          {/* Company Section */}
          <div className="col">
            <p>Company</p>
            <Link to="/about">About</Link>
            <br />
            <Link to="/products">Products</Link>
            <br />
            <Link to="/pricing">Pricing</Link>
            <br />
            <Link to="/Refer">Referral programme</Link>
            <br />
            <Link to="/career">Career</Link>
            <br />
            <a href="https://zerodha.tech/" target="_blank" rel="noopener noreferrer">Zerodha.tech</a>
            <br />

            <a href="https://zerodha.com/media/" target="_blank" rel="noopener noreferrer">Press & Media</a>
            <br />
            <a href="https://zerodha.com/cares/" target="_blank" rel="noopener noreferrer">Zerodha cares (CSR)</a>
            <br />
          </div>

          {/* Support Section */}
          <div className="col">
            <p>Support</p>
            <Link to="/contact">Contact</Link>
            <br />
            <Link to="/support">Support portal</Link>
            <br />
            <Link to="/blog">Z-Connect blog</Link>
            <br />
            <Link to="/charges">List of charges</Link>
            <br />
            <Link to="/resources">Downloads & resources</Link>
            <br />
          </div>

          {/* Account Section */}
          <div className="col">
            <p>Account</p>
            <Link to="/open-account">Open an account</Link>
            <br />
            <Link to="/fund-transfer">Fund transfer</Link>
            <br />
            <Link to="/challenge">60 day challenge</Link>
            <br />
          </div>
        </div>

        {/* Disclaimer and Other Info */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration 
            no.: IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 
            46025 – SEBI Registration no.: INZ000038238. Registered Address: Zerodha Broking Ltd., 
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, 
            Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Investments in securities markets are subject to market risks; read all the related 
            documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
