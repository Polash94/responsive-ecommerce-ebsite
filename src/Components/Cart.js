import React, { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

const Cart = ({ item }) => {

// cart context recieving
const {removeFromCart , handleIncrease, handleDecrease } = useContext(CartContext)

    const {title,amount,price,image,id} = item
    return (
        
        <div className=' flex p-2 border rounder-sm drop-shadow-lg '>
            <Link to={`/product/${item.id}`} className=' w-1/5 h-full flex justify-center items-center'>
                {/* image */}
                <img src={image} alt="title" className='w-[70px]'/>
            </Link>
            <div className=' w-4/5 '>
                <div className='flex justify-between p-1 items-center'>
                    {/* others */}
                    <Link to={`/product/${item.id}`} className='text-sm hover:scale-105 w-3/5 font-semibold uppercase duration-300'>
                        {/* title */}
                        {title}
                    </Link>
                    <div onClick={() => removeFromCart(id)} className='border rounded-lg border-gray-400 hover:scale-105 hover:bg-red-500 hover:text-white duration-300 cursor-pointer'>
                        {/* remove */}
                        <RxCross1 className='text-2xl'></RxCross1>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    {/* price */}
                    <div className='flex justify-around items-center gap-3 p-1 ml-3 border drop-shadow-2xl'>
                        <div onClick={() => handleDecrease(id)}  className='hover:text-red-700'>
                            <AiOutlineMinus></AiOutlineMinus>
                        </div>
                        <div className='font-bold text-sm'>
                            {amount}
                        </div>
                        <div onClick={() => handleIncrease(id)} className='hover:text-green-700'>
                            <AiOutlinePlus></AiOutlinePlus>
                        </div>
                    </div>
                    <div className='-ml-30 text-sm mt-1 font-bold '>
                        ${price}
                    </div>
                    <div className='font-bold text-sm mt-1 px-2'>
                        ${parseFloat(amount*price).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;