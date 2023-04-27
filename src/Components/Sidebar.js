import React, { useContext } from 'react';
import SidebarContext from './SidebarContext';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CartContext from './CartContext';
import Cart from './Cart';

const Sidebar = () => {

    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const { cart, emptyCart, totalPrice,itemAmount } = useContext(CartContext)



    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} bg-white w-full h-full fixed top-0  md:w-[35vw] lg:w-[30vw] drop-shadow-lg px-3 transition-all duration-300 z-30`}>

            <div className='flex justify-between text-center my-auto py-5 border-b drop-shadow-lg uppercase'>
                <div className='font-semibold text-sm'>Shopping Bag({itemAmount})</div>

                <div className='text-center cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                <AiOutlineArrowRight className='text-2xl '></AiOutlineArrowRight>
                </div>
            </div>
            <div className=' h-3/4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden mx-auto p-1'>
                {/* cartItem */}

                {cart.map((item) => {
                    return <Cart key={item.id} item={item}></Cart>
                })}

            </div>
            <div className=' border border-gray-500 rounded drop-shadow-lg h-[50px] flex justify-between items-center mx-auto px-2'>
                <div className='font-bold text-md'>
                    Total : ${totalPrice}
                </div>
                <div onClick={emptyCart} className=' border-b rounded-sm cursor-pointer bg-red-600 h-[30px] w-[30px] flex justify-center items-center text-center text-white'>
                    <RiDeleteBin6Line className='text-2xl'></RiDeleteBin6Line>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;