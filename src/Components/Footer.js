import React from 'react';
import me from '../images/me.jpeg'


const footer = () => {
    return (    
        <div className=' bg-gray-300 text-white pb-5 p-3 flex flex-col md:flex-row md:justify-around'>
            <div className='  flex flex-col mb-2  justify-center items-center '>
            <div className='font-semibold text-sm'>
                This website is Designed by <br />
            </div>
            <div className='p-3'>
                <img className='h-[150px] border border-4 rounded-full border-gray-600 ' src={me} alt="myself" />
            </div>
            <div className='font-bold text-lg uppercase border-b-2 border-black'>
               <h1 className=''> Mohammad Polash</h1>
            </div>
            
            <div>

            </div>
        </div>
        
        <div className='font-bold text-sm items-center flex justify-center flex-col border border-orange-600 drop-shadow-xl md:border-none'>
        <h2 className='text-2xl'>Frontend Web Developer</h2>
                CONTACT: 01755300603
            </div>

        </div>
    );
};

export default footer;