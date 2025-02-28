import React from 'react';

function Hero() {
    return (
        <section className="container-fluid p-5" id="supportHero">
            <div id="supportWrapper">
                <h4 className='mt-5'>Support portal</h4>
                <a className='mt-5'href="">Track Ticket</a>
            </div>
            <div className=" row p-5">
                <div className="col-6 p-5" >
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input className="mt-3 mb-3"placeholder="Eg: how do i activate F&O, order is getting rejected ..."/>
                    <br/>
                    <a className="m-3" href="">Track account opening</a>
                    <a className="m-3" href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <br />
                    <a  className="m-3" href="">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                    <li><a href="">MCX Option contracts expiry - February 2025</a></li>
                    <li><a href="">MCX Base metals contract expiry - February 2025</a></li>
                    </ol>
                   
                </div>
    
            </div>
        </section>
    );
}

export default Hero;