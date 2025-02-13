import React from 'react';
import Navbar from '../Navbar';
import Awards from './Awards';
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Education />
            <Pricing />
            <Stats />
            <Footer />
        </>
     );
}

export default HomePage;