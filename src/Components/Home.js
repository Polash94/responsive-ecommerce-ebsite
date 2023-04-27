import React from 'react';
import Banner from './Banner';
import Sidebar from './Sidebar';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sidebar></Sidebar>
            <Product></Product>
        </div>
    );
};

export default Home;