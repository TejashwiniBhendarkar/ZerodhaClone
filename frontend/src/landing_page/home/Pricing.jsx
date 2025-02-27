import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
    const navigate = useNavigate();
    const handlePricing = () => {
        navigate("/pricing");
    }

    return (  
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <span className="mx-5 text-primary" style={{ cursor: "pointer", textDecoration: "none" }} onClick={handlePricing}>
                    See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </span>
                           
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery<br/>and direct mutual funds</p>
                        </div>
                        <div className="col p-3 border">
                        <h1 className='mb-3'>₹20</h1>
                        <p> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Pricing;