import React from 'react';
function Awards() {
    return (
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>TradeNova is your gateway to smarter, faster, and more efficient trading. Experience the future of trading today !</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Feature and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="pressLogo" style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;

 

