import React from 'react';
import banner from '../images/banner.jpg'


const Banner = () => {
    return (
        <div className=''>
            <div className=' w-full h-full object-cover '>
            <img src={banner} alt="banner" className='w-full object-cover pt-12'/>
            </div>
        </div>
    );
};

export default Banner;