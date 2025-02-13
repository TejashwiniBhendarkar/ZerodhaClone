import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import Footer from '../Footer';

function ProductPage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer />
        </>
     );
}

export default ProductPage;