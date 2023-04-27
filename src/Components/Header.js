import React, { useContext, useState } from 'react';
import SidebarContext from './SidebarContext';
import { BsBagCheck,BsFire } from 'react-icons/bs';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

const Header = () => {

//Header State
const [isActive , setIsActive] = useState(false)

const {isOpen,setIsOpen} = useContext(SidebarContext)
const {itemAmount} = useContext(CartContext)

    return (
        <div className=''>
            
            <div className=' bg-gray-300 z-20 flex justify-between mx-auto items-center p-4 px-[70px]  border-b drop-shadow-lg fixed w-full'>
            <Link to='/' >
                <BsFire className='text-2xl'></BsFire>
            </Link>
            <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer relative'>
                <BsBagCheck className='text-2xl'></BsBagCheck>
                <div className='bg-red-500 text-white absolute -bottom-[5px] left-[15px] border rounded-lg text-sm font-bold h-[20px] w-[20px] flex justify-center items-center'>
                    {itemAmount}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;